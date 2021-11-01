import { masker } from './index'
import IMask from 'imask'

export const yearMask = masker({
  masked: {
    mask: 'iiii/yyyy',
    blocks: {
      iiii: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: new Date().getFullYear() + 2,
        maxLength: 4,
      },
      yyyy: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: new Date().getFullYear() + 2,
        maxLength: 4,
      },
    },
  },
})
