/* eslint-disable @typescript-eslint/no-explicit-any */
import IMask from 'imask'
import { masker } from './index'

const masked = {
  mask: 'R$ num',
  blocks: {
    num: {
      mask: Number, // enable number mask
      scale: 2, // digits after point, 0 for integers
      padFractionalZeros: true, // if true, then pads zeros at end to the length of scale
      radix: ',', // fractional delimiter
      mapToRadix: ['.'], // symbols to process as radix
      thousandsSeparator: '.', // any single char
      min: -100000000000,
      max: 1000000000000,
    },
  },
} as IMask.AnyMaskedOptions

export const currencyCentsMask = () =>
  masker({
    masked,
    transform: (value: string) => {
      return masker({ masked }).unmask(value) || ''
    },
  })
