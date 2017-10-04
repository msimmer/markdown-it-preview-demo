# `markdown-it-plugin-loader` Test Project

## Configuration

This project was rendered using the following configuration

```js
module.exports = {
  plugins: [
    'markdown-it-emoji',
    'markdown-it-mathjax',
    ['markdown-it-for-inline', {
      args: [
        'test_replace',
        'text',
        (tokens, idx) =>
          tokens[idx].content = tokens[idx].content.replace(/fails/g, 'works'),
      ],
    }],
  ]
}
```

## Settings

Here's some "text" using smart quotes. Add <span style='color:coral'>nested HTML</span>, and automatically link-ify URLs like http://github.com.

## Plugins

### `markdown-it-for-inline`

It fails!

### `markdown-it-emoji`

:fireworks: :tada:

### `markdown-it-mathjax`

$$1 *2* 3$$ => `\[1 *2* 3\]`

$1 *2* 3$ => `\(1 *2* 3\)`

$1 *2* 3$5 => `$1 <em>2</em> 3$5`

\\(1 *2* 3\\) => `\(1 *2* 3\)`

\\[1 *2* 3\\] => `\[1 *2* 3\]`

\begin{abc}1 *2* 3\end{abc} => `\begin{abc}1 *2* 3\end{abc}`
