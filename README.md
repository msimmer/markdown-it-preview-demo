# `markdown-it-preview-demo`

This is a proof of concept for the  [`markdown-it-preview`](https://github.com/msimmer/markdown-preview.git) [Atom](https://atom.io/) package.

## Install

Make sure the `markdown-it-preview` package is installed and enabled in Atom settings, then clone the repo and install dependencies.

```console
$ npm i
```

Open `test.md` in Atom and press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd>  + <kbd>M</kbd>.

## Extend

Add [`markdown-it`](https://github.com/markdown-it/markdown-it) plugins with `npm` or `yarn`, then list them in `markdown-it-plugin.config.js`.

Restart (or `window:reload`) might be required after installing new packages.
