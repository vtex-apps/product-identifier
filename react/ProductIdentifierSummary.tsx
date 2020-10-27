import React from 'react'
import { path } from 'ramda'
import BaseProductIdentifier, {
  IdField,
} from './components/BaseProductIdentifier'
import {
  useProductSummary,
  ProductSummaryContext,
} from 'vtex.product-summary-context/ProductSummaryContext'

const allowedIdFields: Record<
  IdField,
  (contex: ProductSummaryContext) => string | null | undefined
> = {
  itemId: context => {
    return path(['selectedItem', 'itemId'], context)
  },
  productId: context => {
    return path(['product', 'productId'], context)
  },
  productReference: context => {
    return path(['product', 'productReference'], context)
  },
  skuEan: context => {
    // TODO: Add `selectedSku` to ProductSummaryContext instead of using `sku`
    return path(['product', 'sku', 'ean'], context)
  },
  skuReferenceId: context => {
    // TODO: Add `selectedSku` to ProductSummaryContext instead of using `sku`
    const refId =
      context &&
      context.product &&
      context.product.sku &&
      context.product.sku.referenceId
        ? context.product.sku.referenceId
        : null

    if (!refId) {
      return null
    }

    const { Value } = refId

    if (!Value) {
      return null
    }

    return Value
  },
}

const sanitizeId = (idField: string): IdField => {
  const valid = idField in allowedIdFields
  return valid ? (idField as IdField) : 'productId'
}

const ProductIdentifierSummary: StorefrontFunctionComponent<
  ProductIdentifierProductProps
> = ({ idField, customLabel, label }) => {
  const context = useProductSummary()
  
  const sanitizedId = sanitizeId(idField) as IdField

  if (
    (sanitizedId.indexOf('sku') === 0 && !context.product) ||
    !context.product.items
  ) {
    return null
  }

  if (sanitizedId.indexOf('product') === 0 && !context.product) {
    return null
  }

  const value = allowedIdFields[sanitizedId](context)

  return (
    <BaseProductIdentifier
      idField={idField}
      value={value}
      customLabel={customLabel}
      label={label}
    />
  )
}

interface ProductIdentifierProductProps {
  idField: IdField
  customLabel: string
  label: 'default' | 'custom' | 'hide'
}

ProductIdentifierSummary.schema = {
  title: 'admin/editor.product-identifier.title',
  type: 'object',
}

export default ProductIdentifierSummary
