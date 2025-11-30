# Secure Guard — Local Setup

This project contains a backend Node.js API (in `backend/`) and static frontend files (in `frontend/`).

## Requirements
- Node.js 18+ (recommended)
- npm
- MongoDB (Atlas or local)

## Backend — quick start
1. Open a terminal and change to the backend folder:

```powershell
cd "D:\practice secure guard\backend"
```

2. Install dependencies (already done for the repo):

```powershell
npm install
```

3. Create or verify `.env` contains:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/secureguard?retryWrites=true&w=majority
```

Replace `<username>` and `<password>` with your DB user credentials. For local MongoDB, use `mongodb://localhost:27017/secureguard`.

4. Start the server:

```powershell
npm run start
```

Server will run at `http://localhost:5000` and provide APIs under `/api/auth` and `/api/contact`.

## Test the API (PowerShell examples)

Signup:

```powershell
Invoke-RestMethod -Method Post -Uri 'http://localhost:5000/api/auth/signup' -Body (ConvertTo-Json @{name='Test';email='test@example.com';password='pass123'}) -ContentType 'application/json'
```

Submit contact message:

```powershell
Invoke-RestMethod -Method Post -Uri 'http://localhost:5000/api/contact' -Body (ConvertTo-Json @{name='Visitor';email='v@example.com';message='Hello'}) -ContentType 'application/json'
```

If you prefer `curl` (native executable):

```powershell
curl.exe -X POST http://localhost:5000/api/auth/signup -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","password":"pass123"}'
```

## Notes and troubleshooting
- If you see `querySrv ENOTFOUND` errors, verify your `MONGO_URI` host is correct, the Atlas cluster is running, and your IP is whitelisted in MongoDB Atlas Network Access.
- If Express/body-parser throws `Cannot find module '../encodings'`, run `npm install` in `backend` to ensure `iconv-lite` and related packages are installed. I added `iconv-lite` as needed.
- To fix reported vulnerabilities: `npm audit fix` inside `backend/`.

## Git
To save the backend fixes I made:

```powershell
cd "D:\practice secure guard"
git add backend/models backend/routes backend/server.js README.md
git commit -m "Fix ESM/CommonJS, mount routes, and add README"
```

---

If you want, I can run the API tests for you here — but I recommend running the `Invoke-RestMethod` commands locally to see live responses in your environment.