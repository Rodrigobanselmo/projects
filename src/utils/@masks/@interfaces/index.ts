/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMaskProps {
  masked: IMask.AnyMaskedOptions
  transform?: (value: string) => any
}

export interface IMaskReturnProps {
  masked: IMask.AnyMaskedOptions
  transform: (value: string) => any
  apply: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  unmask: any
  mask: any
}

export interface MaskNumberOptions {
  max?: number
  min?: number
  thousandsSeparator?: string
  startLetters?: string
  endLetters?: string
}
