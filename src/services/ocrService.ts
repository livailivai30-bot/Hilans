export interface OCRResult {
  text: string;
  confidence: number;
}

export async function extractIngredientsFromImage(_file: File): Promise<OCRResult> {
  // Placeholder adapter. Connect Google Vision, Gemini Vision or another OCR later.
  return {
    text: '',
    confidence: 0
  };
}
