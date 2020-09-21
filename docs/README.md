📢 Use this project, [contribute](https://github.com/vtex-apps/product-identifier) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Product Identifier
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Product Identifier app is responsible for showing a product identifier, such as: product reference, product ID, sku EAN or sku reference.

![reference](https://user-images.githubusercontent.com/60782333/90151384-0abbd380-dd5d-11ea-9022-69ba4685e1d0.png)

## Configuration

Add the `vtex.product-identifier` app to your theme's dependencies in the `manifest.json` file, as in:

```
"dependencies": {
    "vtex.product-identifier": "0.x"
}
```

Now, the `product-identifier` interface is available. Within the admin's CMS, you can configure this component to show other identifiers, such as:

- Product Reference
- Product ID
- SKU EAN
- SKU Reference ID
- Item ID

It's also possible to hide the component label or customize its text. Notice that, in the following example, the "Reference" text was substituted by "Foo".

![foo](https://user-images.githubusercontent.com/60782333/90145130-004a0b80-dd56-11ea-9cbd-5ee621da4d69.png)

## Customization

To apply CSS customization in this and other blocks, follow the instructions given in the recipe on [Using  CSS  Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

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
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
