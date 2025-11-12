# The University of Oklahoma Computer Science Website

A website for the CSSB club at OU.

## Contributing

This project is powered by [Eleventy](https://www.11ty.dev/). Most of their documentation will be sufficient.

### Prerequisites

[Node.js and NPM](https://nodejs.org/en/download)

### Test

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Project Structure

dist/                 Final website output.

src/                  Everything in here will be processed by [Eleventy](https://www.11ty.dev/), unless prefixed with '_' or contains ".11tydata.

src/_layouts/         Shared templating layouts.

src/assets/           Images and such.

src/posts/            Posts written in markdown.

src/src.11tydata.json Global site data such as the base layout.

eleventy.config.js    [Eleventy Project Config](https://www.11ty.dev/docs/config/)
