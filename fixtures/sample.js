const { readFile } = require('node:fs/promises');
const fetch = require('node-fetch');

async function loadConfig(path) {
  const raw = await readFile(path, 'utf8');
  return JSON.parse(raw);
}

class ApiClient {
  #retries = 3;
  constructor(baseUrl, options = {}) {
    this.baseUrl = baseUrl;
    this.headers = { 'content-type': 'application/json', ...options.headers };
  }
  async get(endpoint) {
    for (let i = 0; i < this.#retries; i++) {
      try {
        const res = await fetch(`${this.baseUrl}/${endpoint}`, { headers: this.headers });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      } catch (err) {
        if (i === this.#retries - 1) throw err;
      }
    }
  }
}

module.exports = { loadConfig, ApiClient };

// Line comment: legacy loader
/**
 * JSDoc comment: returns parsed JSON
 * @deprecated use the ESM variant
 */
