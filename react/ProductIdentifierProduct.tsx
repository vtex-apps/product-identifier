import React from 'react'
import useProduct, { ProductContext } from 'vtex.product-context/useProduct'
import { path } from 'ramda'
import BaseProductIdentifier, {
  IdField,
} from './components/BaseProductIdentifier'

const allowedIdFields: Record<
  IdField,
  (contex: ProductContext) => string | null | undefined
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
    return path(['selectedItem', 'ean'], context)
  },
  skuReferenceId: context => {
    const refIds =
      context && context.selectedItem && context.selectedItem.referenceId
        ? context.selectedItem.referenceId
        : null
    if (!refIds) {
      return null
    }
        
    const refId = refIds.find(({ Key }) => Key === 'RefId')

    if (!refId) {
      return null
    }

    return refId.Value
  },
}

const sanitizeId = (idField: string): IdField => {
  const valid = idField in allowedIdFields
  return valid ? (idField as IdField) : 'productId'
}

const ProductIdentifierProduct: StorefrontFunctionComponent<
  ProductIdentifierProductProps
> = ({ idField, customLabel, label }) => {
  const context = useProduct()

  const sanitizedId = sanitizeId(idField) as IdField

  if (sanitizedId.indexOf('sku') === 0 && !context.selectedItem) {
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

ProductIdentifierProduct.schema = {
  title: 'admin/editor.product-identifier.title',
  type: 'object',
}

export default ProductIdentifierProduct
