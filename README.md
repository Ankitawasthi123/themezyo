# Themezyo - Next.js App

A responsive website template library built with the Next.js App Router and Tailwind CSS.

Quick start (PowerShell / CMD):

```powershell
cd templify
npm install
npm run dev
```

Production:

```powershell
npm ci
npm run build
npm run start
```

Notes:
- `package.json` uses Next.js, React, and React DOM.
- `npm run build` creates a standalone server bundle for Node hosting.
- `npm run start` binds to `0.0.0.0` so it can receive traffic behind a server or reverse proxy.
- The `postbuild` step copies `public` and `.next/static` into `.next/standalone` for self-contained server deployment.

## VPS setup with VS Code

Install the **Remote - SSH** extension in VS Code, then add this host to your local SSH config:

```sshconfig
Host templify-vps
  HostName 200.141.0.54
  User root
  Port 22
```

On Windows, the SSH config file is usually here:

```text
C:\Users\YOUR_WINDOWS_USER\.ssh\config
```

Connect from VS Code:

1. Press `Ctrl + Shift + P`.
2. Run `Remote-SSH: Connect to Host...`.
3. Select `templify-vps`.
4. Enter the VPS password in the VS Code prompt if asked.
5. Open the project folder on the VPS.

## Deploy on the VPS

After copying or pulling the project onto the VPS, run:

```bash
cd /path/to/templify
npm ci
npm run build
```

Start the standalone server:

```bash
node .next/standalone/server.js
```

For production, run it with PM2:

```bash
npm install -g pm2
pm2 start .next/standalone/server.js --name templify
pm2 save
pm2 startup
```
