/* eslint-disable @typescript-eslint/no-explicit-any */
import IMask from 'imask'

interface IMaskProps {
  masked: IMask.AnyMaskedOptions | IMask.AnyMasked
  transform?: (value: string) => any
}

export const masker = ({ masked, transform }: IMaskProps) => {
  const mask = IMask.createPipe(
    masked,
    IMask.PIPE_TYPE.UNMASKED,
    IMask.PIPE_TYPE.MASKED
  )

  const unmask = IMask.createPipe(
    masked,
    IMask.PIPE_TYPE.MASKED,
    IMask.PIPE_TYPE.UNMASKED
  )

  const apply = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const unmasked = unmask(e.target.value)
    const newValue = mask(unmasked)
    e.target.value = newValue
  }

  return {
    mask,
    apply,
    transform: transform || unmask,
    unmask,
  }
}
