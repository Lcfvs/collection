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
  script,
  template
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
            .withPrompt('Item name to search')
            .withValue('product')
        ])
        .withHref('/items/search')
        .withPrompt('Search an item')
        .withRel('search')
    ])
    .withScripts([
      script
        .withIntegrity('integrity string')
        .withSrc('/main.js')
    ])
    .withTemplate([
      template
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
    ])
    .withVersion('1.0'))

console.log(JSON.stringify(result, null, 2))
```

Resulting to
```json
{
  "collection": {
    "href": "/items",
    "version": "1.0",
    "error": {
      "code": "error code",
      "message": "error message",
      "title": "error title",
      "details": [
        {
          "message": "detail message",
          "name": "detail name"
        }
      ]
    },
    "items": [
      {
        "data": [
          {
            "name": "id",
            "prompt": "Get the id",
            "value": "1"
          },
          {
            "name": "name",
            "prompt": "Get the name",
            "value": "product"
          }
        ],
        "href": "/items/1",
        "links": [
          {
            "href": "/items/1/rss",
            "rel": "rss"
          }
        ]
      }
    ],
    "links": [
      {
        "href": "/items",
        "rel": "top"
      }
    ],
    "queries": [
      {
        "href": "/items/search",
        "prompt": "Search an item",
        "rel": "search",
        "data": [
          {
            "name": "search",
            "prompt": "Item name to search",
            "value": "product"
          }
        ]
      }
    ],
    "scripts": [
      {
        "integrity": "integrity string",
        "src": "/main.js"
      }
    ],
    "template": [
      {
        "data": [
          {
            "name": "id",
            "prompt": "Get the id",
            "value": "1"
          },
          {
            "name": "name",
            "prompt": "Get the name",
            "value": "product"
          }
        ]
      }
    ]
  }
}
```
