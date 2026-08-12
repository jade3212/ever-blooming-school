# Ever Blooming School — Windows setup

## First time only

1. Install Node.js LTS.
2. Install PostgreSQL and create a database called `app_db`.
3. Copy `.env.example` to `.env.local`.
4. Change `ADMIN_USER`, `ADMIN_PASSWORD`, and `JWT_SECRET`.
5. In Command Prompt, inside the folder containing `package.json`, run:

```cmd
npm install
npm run db:push
npm run dev
```

Open `http://localhost:3000`.

## Principal

Open `http://localhost:3000/admin/login`.
Use the credentials in `.env.local`.

Click **Enable Notifications** once and allow notifications in Chrome/Edge. Keep the dashboard open on the school office/principal computer to receive new admission notifications.

## If the admission form says it cannot connect

Open `http://localhost:3000/api/health`.
It should show:

```json
{"ok":true,"database":"connected"}
```

If it says `unavailable`, PostgreSQL is not running or `DATABASE_URL` is incorrect.
