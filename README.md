# random-curry

Shows a random curry recipe from Cookpad

## Install

```bash
$ npm install
$ npm run netlify
```

Then navigate to http://localhost:8888

The above port is a proxy to the following ports:

- http://localhost:5000 (Svelte)
- http://localhost:34567 (lambda functions ie. `netlify-lambda`)

## Deploy

It is recommended to link a git repo to netlify to create a Continuous Development pipeline, where deployment will occur when a commit is pushed to master.

However, you can still manually push to Netlify:

```bash
$ npm install
$ npm run deploy
```
