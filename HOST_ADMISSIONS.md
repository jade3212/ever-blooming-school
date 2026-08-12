# Ever Blooming School — Principal Admissions

The public website has one admission form. Applications are stored in PostgreSQL and are visible only to the authenticated Principal Dashboard.

## 1. Local setup

1. Install PostgreSQL and create a database named `app_db` (or use any PostgreSQL database you control).
2. Copy `.env.example` to `.env.local`.
3. Set `DATABASE_URL`, `JWT_SECRET`, `ADMIN_USER`, and `ADMIN_PASSWORD`.
4. Install packages:

```bash
npm install
```

5. Create/update the database tables:

```bash
npm run db:push
```

6. Start the site:

```bash
npm run dev
```

## 2. Principal dashboard

Open:

`http://localhost:3000/admin/login`

Use the username/password from `.env.local`.

The dashboard shows:
- Student name
- Parent/guardian name
- Parent phone
- Class
- Previous school
- Documents/notes
- Submission date
- Application status

Statuses can be changed to `pending`, `contacted`, `accepted`, or `rejected`.

## 3. Desktop notifications

On the Principal Dashboard click **Enable Notifications** and allow browser notifications. Keep the dashboard open on the principal/office computer. It checks for new applications every 5 seconds and shows a desktop notification containing the student, parent, class, and phone details.

For notifications while the dashboard/browser is completely closed, add a real push service (Web Push/FCM) or an email/SMS provider. The current implementation intentionally does not depend on a third-party messaging provider.

## 4. Production deployment

Use a managed PostgreSQL database and set the same environment variables in the hosting provider. Do not commit `.env.local` or expose `ADMIN_PASSWORD` in client-side code.

The public website does not contain a Parent Portal. The only private portal is the Principal Admissions Dashboard.
