declare module 'vtex.product-context/useProduct' {
  const useProduct: () => ProductContext
  export default useProduct

  export interface ProductContext {
    product: {
      productId: string
      productReference: string
    }
    selectedItem: {
      ean: string
      referenceId: ReferenceId[]
    }
  }

  interface ReferenceId {
    Key: string
    Value: string
  }
}
