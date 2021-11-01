import { MaskNumberOptions, IMaskReturnProps } from './@interfaces'
import { masker } from './index'

export const positiveNumberMask = ({
  startLetters,
  max,
  thousandsSeparator,
  min,
}: MaskNumberOptions = {}): IMaskReturnProps =>
  masker({
    masked: {
      mask: `${startLetters || ''}num`,
      blocks: {
        num: {
          mask: Number,
          scale: 0,
          max: max || 1000000000000,
          min: min || 0,
          thousandsSeparator: thousandsSeparator || '.',
        },
      },
    },
    transform: (value: string) => {
      return positiveNumberMask().unmask(value) || ''
    },
  })
