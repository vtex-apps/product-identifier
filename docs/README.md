📢 Use this project, [contribute](https://github.com/vtex-apps/product-identifier) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Product Identifier
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

The Product Identifier app is responsible for showing a product identifier, such as a product reference, product ID, SKU EAN, or SKU reference.

![reference](https://user-images.githubusercontent.com/60782333/90151384-0abbd380-dd5d-11ea-9022-69ba4685e1d0.png)

## Configuration

1. Add the `vtex.product-identifier` app to your Store Theme's dependencies in the `manifest.json` file:
        
        ```json
        "dependencies": {
            "vtex.product-identifier": "0.x"
        }
        ```

2. Add `product-identifier.product` block as a child of `product-summary.shelf`.

        ```json
        "product-identifier.product": {
          "props": {
            "label": "default", //'default' | 'custom' | 'hide'
            "customLabel": "teste", // text if label is custom
            "idField": "skuReferenceId" //'itemId' | 'productId' | 'productReference' | 'skuEan' | 'skuReferenceId'
          }
        },
        ```

The `product-identifier` interface is also available within the admin's CMS where you can configure this component to show other identifiers, such as:

- Product Reference
- Product ID
- SKU EAN
- SKU Reference ID
- Item ID

It's also possible to customize or hide the label text. In the following example, the "Reference" text was substituted by "Foo."

![foo](https://user-images.githubusercontent.com/60782333/90145130-004a0b80-dd56-11ea-9cbd-5ee621da4d69.png)

## Customization

To apply CSS customization to this and other blocks, follow the instructions in the [Using  CSS  Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization) guide.

| CSS Handles |
| ----------- |
| `product-identifier`           | 
| `product-identifier__label`    | 
| `product-identifier__separator`| 
| `product-identifier__value`    | 

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://carafizi.com/"><img src="https://avatars3.githubusercontent.com/u/51974587?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel Carafizi</b></sub></a><br /><a href="https://github.com/vtex-apps/product-identifier/commits?author=carafizi1" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
