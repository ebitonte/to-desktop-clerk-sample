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

However, if you point a ToDesktop app at localhost:5173, the question of "Is Clerk loaded?" will change to "No". Based on the API response from Clerk, this is due to the Origin header not being set
