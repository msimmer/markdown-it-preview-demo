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
