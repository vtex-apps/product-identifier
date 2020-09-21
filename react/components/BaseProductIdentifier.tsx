import React from 'react'
import { IOMessage } from 'vtex.native-types'
import styles from '../styles.css'
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
  itemId: {
    id: 'store/product-identifier.itemId',
    defaultMessage: '',
  },
})

const ProductIdentifier: StorefrontFunctionComponent<
  ProductIdentifierProps & InjectedIntlProps
> = ({ idField, value, customLabel, label, intl }) => {
  return (
    <span
      className={`${styles['product-identifier']} ${styles['product-identifier']}--${idField} c-muted-1`}
    >
      {label !== 'hide' && (
        <span className={styles['product-identifier__label']}>
          {label === 'custom' && <IOMessage id={customLabel} intl={intl} />}
          {label === 'default' && (
            <FormattedMessage id={messages[idField].id} />
          )}
        </span>
      )}
      {label !== 'hide' && (
        <span className={styles['product-identifier__separator']}>: </span>
      )}
      <span className={styles['product-identifier__value']}>{value}</span>
    </span>
  )
}

export type IdField =
  | 'productReference'
  | 'productId'
  | 'skuEan'
  | 'skuReferenceId'
  | 'itemId'

interface ProductIdentifierProps {
  idField: IdField
  value: string | undefined | null
  customLabel: string
  label: 'default' | 'custom' | 'hide'
}

export default injectIntl(ProductIdentifier)
