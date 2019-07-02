declare module 'vtex.product-summary-context/ProductSummaryContext' {
  interface ProductSummaryContext {
    product: {
      productId: string
      productReference: string
      items: Item[]
      sku: Item
    }
  }

  interface Item {
    itemId: string
    referenceId: Reference[]
  }

  interface Reference {
    Value: string
  }

  export const useProductSummary = () => ProductSummaryContext
}
