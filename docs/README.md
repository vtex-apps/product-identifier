# Product Identifier

> Shows a product identifier, such as: product reference, product ID, sku EAN or sku reference.

![](./print.png)

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

<img src="./print2.png" width="200" />

## CSS handles

Below, we describe the namespaces are available in the app.

### `product-identifier`

| Token name                      | Description                                 | Component Source                      |
| ------------------------------- | ------------------------------------------- | ------------------------------------- |
| `product-identifier`            | The root element                            | [index](/react/ProductIdentifier.tsx) |
| `product-identifierLabel`       | Label of the product identifier             | [index](/react/ProductIdentifier.tsx) |
| `product-identifierSeparator`   | Corresponds to the element that renders `:` | [index](/react/ProductIdentifier.tsx) |
| `product-identifierValue`       | Value of the product identifier             | [index](/react/ProductIdentifier.tsx) |

## Contributing

Check [how to contribute](https://github.com/vtex-apps/awesome-io#contributing) to this project.
