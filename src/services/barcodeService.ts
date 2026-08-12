export interface BarcodeResult {
  barcode: string;
  productName?: string;
}

export async function scanBarcode(): Promise<BarcodeResult | null> {
  // Future integration point for real camera barcode APIs.
  return null;
}
