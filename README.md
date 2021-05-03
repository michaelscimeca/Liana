# nuxt-template

> This repo represents a Nuxt.js setup for Vue.js that falls in line with Red Square development best practices.

## Initial Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# manual build for production and launch server
$ yarn run build
$ yarn start
```
## Deploying
If set up properly with heroku in mind, the build process should happen on the server and no manual build will be needed.

Simply either push to heroku or merge your branch into `master`, and a build will be initiated on the server.

## Connecting Prismic
If the Prismic API is public update the URL in the `package.json` for the `prismic` key.

## Parts of a page

GA tag goes in `app.html` on root of project

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
