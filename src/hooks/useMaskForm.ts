/* eslint-disable array-callback-return */
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export const useMaskForm = () => {
  const {
    setValue: setFormValue,
    register: registerForm,
    reset: resetForm,
    ...rest
  } = useForm()
  const maskRef = useRef<HTMLInputElement>(null)

  const setValue = (
    name: string,
    value: string,
    options?: {
      shouldValidate?: boolean
      shouldDirty?: boolean
      shouldTouch?: boolean
    }
  ) => {
    if (maskRef.current) maskRef.current.value = name
    setFormValue(name, value, options)
  }

  const reset = () => {
    resetForm()
  }

  const register = (name: string) => {
    return {
      maskRef,
      ...registerForm(name),
    }
  }

  return {
    register,
    setValue,
    reset,
    ...rest,
  }
}
