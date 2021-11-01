import { MaskNumberOptions, IMaskReturnProps } from './@interfaces'
import { masker } from './index'

export const rangeNumberMask = ({
  startLetters,
  endLetters,
  max,
  thousandsSeparator,
  min,
}: MaskNumberOptions = {}): IMaskReturnProps =>
  masker({
    masked: {
      mask: `${startLetters || ''}num${endLetters || ''}`,
      lazy: !endLetters,
      blocks: {
        num: {
          mask: Number,
          max: max || 1000000000000,
          min: min || -10000000000,
          thousandsSeparator: thousandsSeparator || '.',
          radix: ',', // fractional delimiter
          mapToRadix: ['.'],
          scale: 8, // digits after the fractional delimiter
        },
      },
    },
    transform: (value: string) => {
      return rangeNumberMask().unmask(value) || ''
    },
  })
