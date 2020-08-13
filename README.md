# Product Identifier

> Shows a product identifier, such as: product reference, product ID, sku EAN or sku reference.

![reference](https://raw.githubusercontent.com/vtex-apps/product-identifier/master/print.png)

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

You can hide the label or customize its text. For example:

![foo](https://user-images.githubusercontent.com/60782333/90145130-004a0b80-dd56-11ea-9cbd-5ee621da4d69.png)

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
