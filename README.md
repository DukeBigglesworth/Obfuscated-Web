{
  "name": "lua-host",
  "version": "1.0.0",
  "description": "Private Lua script host with password-protected dashboard and raw endpoints",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "engines": {
    "node": ">=18"
  },
  "dependencies": {
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "multer": "^1.4.5-lts.1",
    "uuid": "^11.0.5"
  }
}
