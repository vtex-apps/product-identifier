import React from 'react'
import { IOMessage } from 'vtex.native-types'
import { useCssHandles } from 'vtex.css-handles'
import {
  defineMessages,
  FormattedMessage,
  injectIntl,
  InjectedIntlProps,
} from 'react-intl'


const messages = defineMessages({
  productReference: {
    id: 'store/product-identifier.productReference',
    defaultMessage: '',
  },
  productId: {
    id: 'store/product-identifier.productId',
    defaultMessage: '',
  },
  skuEan: {
    id: 'store/product-identifier.skuEan',
    defaultMessage: '',
  },
  skuReferenceId: {
    id: 'store/product-identifier.skuReferenceId',
    defaultMessage: '',
  },
})

const CSS_HANDLES = [
  'product-identifier',
  'product-identifierLabel',
  'product-identifierSeparator',
  'product-identifierValue'
]

const ProductIdentifier: StorefrontFunctionComponent<
  ProductIdentifierProps & InjectedIntlProps
> = ({ idField, value, customLabel, label, intl }) => {
  return (
    <span
      className={`${handles.product - identifier} ${handles.product - identifier}--${idField} c-muted-1`}
    >
      {label !== 'hide' && (
        <span className={handles.product - identifierLabel}>
          {label === 'custom' && <IOMessage id={customLabel} intl={intl} />}
          {label === 'default' && (
            <FormattedMessage id={messages[idField].id} />
          )}
        </span>
      )}
      {label !== 'hide' && (
        <span className={handles.product - identifierSeparator}>: </span>
      )}
      <span className={handles.product - identifierValue}>{value}</span>
    </span>
  )
}

export type IdField =
  | 'productReference'
  | 'productId'
  | 'skuEan'
  | 'skuReferenceId'

interface ProductIdentifierProps {
  idField: IdField
  value: string | undefined | null
  customLabel: string
  label: 'default' | 'custom' | 'hide'
}

export default injectIntl(ProductIdentifier)
