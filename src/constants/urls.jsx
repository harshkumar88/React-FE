const environment = {
    apiUrl: 'http://localhost:4000',
};

const host = environment.apiUrl;
const version = '/v1';

  

export const ApiUrls = {
  host,
  version,
  auth: `${host}/auth${version}`,
  user: `${host}/user${version}`,
  variable: `${host}/variable${version}`,
  company: `${host}/tenant${version}`,
  content: `${host}/content${version}`,
  filter: `${host}/filters${version}`,
  cohort: `${host}/cohort${version}`,
  assessment: `${host}/assessment${version}`,
  template: `${host}/template${version}`,
  campaign: `${host}/campaign${version}`,
  workflow: `${host}/workflow${version}`,
  language: `${host}/language${version}`,
  communication: `${host}/Communication${version}`,
  permission: `${host}/permission${version}`,
  role: `${host}/role${version}`,
  mobile: `${host}/auth${version}/mobile`,
  analytics: `${host}/analytics${version}`,
  journey: `${host}/journey${version}`,
  journey_screen: `${host}/journey/screen${version}`,
  journey_component: `${host}/journey/screen/component${version}`,
  leaderboard: `${host}/leaderboard${version}`,
  certificate: `${host}/certificate${version}`,
};
