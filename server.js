# Private Lua Script Host

A simple private place to host Lua scripts (for Roblox executors etc.) so you can do:

```lua
loadstring(game:HttpGet("https://YOUR-APP.onrender.com/raw/yourscript"))()
```

- Dashboard is password-protected
- Anyone without the password gets a clean **404 Not Found**
- Each script gets its own secret-ish raw URL
- CORS enabled for HttpGet

---

## Your Dashboard Password

```
BnRe3pZhNvhjqMvEZCWsUOkAHzxc8Yhs8cLacgfz0tCrNE1thvxdzoxG8ZaOM4AungPdJ8ZfAyYyEtdOO3KQEPd4U69SbVf2qafC
```

**Copy this now and save it in your notepad.**  
It is also hardcoded in `server.js` (search for `DASHBOARD_PASSWORD`).

---

## Deploy on Render (recommended)

1. Create a free account at [render.com](https://render.com)
2. Push this folder to a **private** GitHub repository
3. In Render → **New** → **Web Service**
4. Connect the GitHub repo
5. Settings:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
6. Click **Create Web Service**
7. Wait for it to deploy. Your URL will be something like `https://lua-host-xxxx.onrender.com`

### Important notes about free Render

- Free instances **spin down** after ~15 min of inactivity. First request after that can take 30–60 seconds.
- The filesystem is **ephemeral**. Scripts are saved to `data/scripts.json`, but they will be **wiped** on every redeploy or when the instance fully restarts.
  - For personal use this is usually fine (just re-upload).
  - If you want permanent storage later: enable a Persistent Disk (paid) or switch the storage to a free database (Turso / Neon / etc.).

---

## How to use

1. Go to `https://your-app.onrender.com/login`
2. Paste the password above
3. Upload a script:
   - Name: `myscript` (only a-z, 0-9, `-`, `_`)
   - Paste your Lua code
   - Click **Save Script**
4. Copy the raw URL (or open the script and click **Copy Raw URL**)

Then in your executor:

```lua
loadstring(game:HttpGet("https://your-app.onrender.com/raw/myscript"))()
```

You can also use:

```lua
loadstring(game:HttpGet("https://your-app.onrender.com/raw/myscript.lua"))()
```

---

## Security notes

- The main site and dashboard return **404** to anyone who is not logged in.
- Raw URLs (`/raw/...`) are public by design so `HttpGet` works.  
  Keep the full URL private — only put it inside your own scripts.
- Use random-looking script names if you want extra obscurity (`x7k9p2m` instead of `main`).
- For stronger protection, obfuscate your Lua with a real obfuscator before uploading.
- Change the password in `server.js` anytime and redeploy.

---

## Local testing

```bash
cd lua-host
npm install
npm start
```

Open http://localhost:3000/login
