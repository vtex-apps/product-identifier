import { IdField } from '../components/BaseProductIdentifier'

const allowedIdFields = [
  'productId',
  'productReference',
  'skuEan',
  'skuReferenceId',
]

export const sanitizeId = (idField: string): IdField => {
  const valid = idField in allowedIdFields
  return valid ? (idField as IdField) : 'productId'
}
