const d3node = require('d3-node')

module.exports = {
    plugins: [
        ['markdown-it-container', {
            args: [
              'spoiler',
              {
                validate: params => params.trim().match(/^spoiler(.*)$/),
                render: (tokens, idx) => {
                  const match = tokens[idx].info.trim().match(/^spoiler(.*)$/)
                  return tokens[idx].nesting === 1
                    ? `<details><summary>Spoiler</summary>${match[1]}`
                    : '</details>'
                }
              }
          ],
        }],
        'markdown-it-emoji',
        'markdown-it-mathjax',
        ['markdown-it-for-inline', {
            args: [
                'test_replace',
                'text',
                (tokens, idx) => tokens[idx].content = tokens[idx].content.replace(/fails/g, 'works'),
            ],
        }],
        ['markvis', {
            args: [{ d3node }],
        }],
    ]
}
