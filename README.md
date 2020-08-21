# @lcf.vs/collection

[PRERELEASE] A Collection+JSON implementation

## Example

```js
import {
  collection,
  detail,
  document,
  error,
  item,
  link,
  property,
  query,
  script
} from '@lcf.vs/collection'

const result = document
  .withCollection(collection
    .withError(error
      .withCode('error code')
      .withMessage('error message')
      .withDetails([
        detail
          .withMessage('detail message')
          .withName('detail name')
      ])
      .withTitle('error title'))
    .withHref('/items')
    .withItems([
      item
        .withHref('/items/1')
        .withData([
          property
            .withName('id')
            .withPrompt('Get the id')
            .withValue('1'),
          property
            .withName('name')
            .withPrompt('Get the name')
            .withValue('product')
        ])
        .withLinks([
          link
            .withHref('/items/1/rss')
            .withRel('rss')
        ])
    ])
    .withLinks([
      link
        .withHref('/items')
        .withRel('top')
    ])
    .withQueries([
      query
        .withData([
          property
            .withName('search')
            .withPrompt('Search an item')
            .withValue('product')
        ])
        .withHref('/items/search')
        .withRel('search')
    ])
    .withScripts([
      script
        .withIntegrity('integrity string')
        .withSrc('/main.js')
    ])
    .withVersion('1.0'))

console.log(JSON.stringify(result, null, 2))
```
