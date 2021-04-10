const path = require('path');

export let PROXIES: Object = {};
try {
  PROXIES = require(path.join(process.cwd(), `proxy.conf.json`));
} catch (error) {
  PROXIES = {};
}
