# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- A Framework that uses React-TS for a better strong type safe variables

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

## Database Prisma configuration

This project is using prisma as ORM to our Database
we are using MySQL

we initialize with mysql with this command

```
npx prisma init --datasource-provider mysql
```

for more info are on the Prisma docs [Prisma Schema reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

To Create/Run the database and all changes run this:

```
npx prisma db push
```

Remember to hide the .env file in your local machine it must be configured as follows (in mysql case):

```
DATABASE_URL="<YOUR DATABASE (EG. mysql)>://<YOUR USER>:<YOUR PASSWORD>@<YOUR HOST>:<YOUR PORT>/<YOUR DATABASE NAME>"
```

Again, for more info go to docs [Prisma Schema reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

We created a seed.ts file in the prisma directory to have initial data

We added a new configuration in package.json to consume our seed.ts file for initial data

```
// ...
  "prisma": {
    "seed": "node --require esbuild-register prisma/seed.ts"
  },
  "scripts": {
// ...
```
## Environment variables

We are working with this data in our .env file

```
DATABASE_URL="<YOUR DATABASE (EG. mysql)>://<YOUR USER>:<YOUR PASSWORD>@<YOUR HOST>:<YOUR PORT>/<YOUR DATABASE NAME>"
SESSION_SECRET="<YOUR SECRET MESSAGE FOR THE SESSION, WHATEVER YOU LIKE>"
```
