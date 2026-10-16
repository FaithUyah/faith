import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.svg':'image/svg+xml' };

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  let requestPath = decodeURIComponent(url.pathname);
  if (requestPath === '/health') { res.writeHead(200, {'content-type':'text/plain'}); res.end('ok'); return; }
  if (requestPath === '/manus-routes.json') requestPath = '/public/manus-routes.json';
  let filePath = path.join(root, requestPath === '/' ? 'index.html' : requestPath);
  try {
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error('not file');
  } catch {
    filePath = path.join(root, 'index.html');
  }
  try {
    const body = await readFile(filePath);
    res.writeHead(200, {'content-type': mime[path.extname(filePath)] || 'application/octet-stream', 'cache-control':'no-cache'});
    res.end(body);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
});
server.listen(port, '0.0.0.0', () => console.log(`DMI clone listening on ${port}`));
