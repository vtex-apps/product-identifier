# Product Identifier
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> Shows a product identifier, such as: product reference, product ID, sku EAN or sku reference.

![reference](https://user-images.githubusercontent.com/284515/90145591-764e7280-dd56-11ea-98d8-fd4c41536e60.png)

## Usage

Add `"vtex.product-identifier": "0.x"` to your `manifest.json` `dependencies`.

Interfaces available: `product-identifier`.

## Content

This component can be configured using the CMS to show other identifiers.

Possible identifiers:

- Product Reference
- Product ID
- SKU EAN
- SKU Reference ID

You can hide the label or customize its text, example:

![Customizing text](https://user-images.githubusercontent.com/60782333/90145130-004a0b80-dd56-11ea-9cbd-5ee621da4d69.png)

## CSS handles

Below, we describe the namespaces are available in the app.

### `product-identifier`

| Token name                      | Description                                 | Component Source                      |
| ------------------------------- | ------------------------------------------- | ------------------------------------- |
| `product-identifier`            | The root element                            | [index](/react/ProductIdentifier.tsx) |
| `product-identifier__label`     | Label of the product identifier             | [index](/react/ProductIdentifier.tsx) |
| `product-identifier__separator` | Corresponds to the element that renders `:` | [index](/react/ProductIdentifier.tsx) |
| `product-identifier__value`     | Value of the product identifier             | [index](/react/ProductIdentifier.tsx) |

## Contributing

Check [how to contribute](https://github.com/vtex-apps/awesome-io#contributing) to this project.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!