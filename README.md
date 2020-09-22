# INSO4116 - Team B (InternView)
### Team Members: [Isabel A. Muñiz](https://github.com/isaandrea12), [Kathiana Díaz](https://github.com/kathianadiaz), [Kenneth Rosario](https://github.com/kenneth-rosario), [Jose Maldonado](https://github.com/jose-maldonado), [Jose Rivera](https://github.com/jvserivera), [Jose Vera](https://github.com/josevera7), [Yavier Mari](https://github.com/YMari)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependancies:
```
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

To setup prisma for dev:
Choose yes when prompted to create a db
```
npx prisma migrate save --name <any-name> --experimental
npx prisma migrate up --experimental
npx prisma generate
```

To run tests on application:
```
npm test
```

Each time you make a change to prisma.schema run above commands again

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
