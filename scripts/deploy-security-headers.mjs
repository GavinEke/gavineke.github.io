import { isDeepStrictEqual } from 'node:util';
import { securityHeaders } from '../config/security-headers.mjs';

const { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ZONE_ID: zone } = process.env;
if (!token || !/^[a-f0-9]{32}$/i.test(zone ?? '')) {
  throw new Error('Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ZONE_ID for gavineke.com.');
}

const phase = 'http_response_headers_transform';
const rulesetsUrl = `https://api.cloudflare.com/client/v4/zones/${zone}/rulesets`;
const headers = Object.fromEntries(Object.entries(securityHeaders).map(([name, value]) => [
  name.toLowerCase(), { operation: 'set', value },
]));
const rule = {
  ref: 'gavineke_com_security_headers',
  description: 'Security headers for gavineke.com',
  expression: 'http.host eq "gavineke.com" and cf.response.error_type eq "" and not starts_with(http.request.uri.path, "/cdn-cgi/")',
  action: 'rewrite',
  action_parameters: { headers },
  enabled: true,
};

async function request(method, path, body) {
  const response = await fetch(rulesetsUrl + path, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (method === 'GET' && response.status === 404) return null;
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(`Cloudflare returned HTTP ${response.status}: ${JSON.stringify(data.errors)}`);
  }
  return data.result;
}

const ruleset = await request('GET', `/phases/${phase}/entrypoint`);
if (!ruleset) {
  await request('POST', '', { name: 'Response header transforms', kind: 'zone', phase, rules: [rule] });
} else {
  const rulesPath = `/${ruleset.id}/rules`;
  const existing = ruleset.rules?.find((item) => item.ref === rule.ref);
  if (!existing) {
    await request('POST', rulesPath, rule);
  } else if (Object.entries(rule).some(([key, value]) => !isDeepStrictEqual(existing[key], value))) {
    await request('PATCH', `${rulesPath}/${existing.id}`, rule);
  }
}
console.log('Cloudflare security header rule is up to date for gavineke.com.');
