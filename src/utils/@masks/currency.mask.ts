/* eslint-disable @typescript-eslint/no-explicit-any */
import IMask from 'imask'
import { masker } from './index'

const masked = {
  mask: 'R$ num',
  blocks: {
    num: {
      mask: Number,
      thousandsSeparator: '.',
      scale: 0,
      max: 100000000000,
    },
  },
} as IMask.AnyMaskedOptions

export const currencyMask = () =>
  masker({
    masked,
    transform: (value: string) => {
      return masker({ masked }).unmask(value) || ''
    },
  })
