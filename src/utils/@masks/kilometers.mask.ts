import IMask from 'imask'
import { IMaskReturnProps } from './@interfaces'
import { masker } from './index'

export const kilometersMask = (): IMaskReturnProps =>
  masker({
    masked: {
      mask: 'num Km',
      lazy: false,
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: '.',
          scale: 0,
          max: 100000000000,
          min: 0,
        },
      },
    } as IMask.AnyMaskedOptions,
    transform: (value: string) => {
      return kilometersMask().unmask(value) || ''
    },
  })
