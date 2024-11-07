# ToDesktop + Clerk minimal setup

All this app does is attempt to initialize Clerk and display Clerk's setup and signed in states.

## Setup

Create a .env.local as below

```
VITE_CLERK_PUBLISHABLE_KEY=<development key from Clerk>
```

Then run

```bash
npm install
npm run dev
```

When you open up localhost:5173 at this point, you should see the below.
<img width="1181" alt="Screenshot 2024-11-07 at 2 34 36 PM" src="https://github.com/user-attachments/assets/38c67b03-bf01-4b1f-b0b4-0a0829570334">

However, if you point a ToDesktop app at localhost:5173, the question of "Is Clerk loaded?" will change to "No". Based on the API response from Clerk, this is due to the Origin header not being set
<img width="1181" alt="Screenshot 2024-11-07 at 2 35 16 PM" src="https://github.com/user-attachments/assets/a6fc8f72-ceff-4abd-988f-e8e90acf2718">
