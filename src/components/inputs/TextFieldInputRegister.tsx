/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@mui/material/TextField'
import IMask, { MaskElement } from 'imask'
import React from 'react'
import { useEffect, useRef } from 'react'
import { RefCallBack } from 'react-hook-form'

import { mergeRefs } from '../../utils/mergeRefs'
import { FormInputRegisterProps } from './@interfaces'

export const TextFieldInputRegister = React.forwardRef<
  RefCallBack,
  FormInputRegisterProps
>(
  (
    {
      defaultValue = '',
      masked,
      name,
      label,
      error,
      onBlur,
      onChange,
      onAccept,
      value,
      ...rest
    },
    ref
  ) => {
    const maskRef = useRef<HTMLElement | MaskElement>(null)
    const lastValueRef = useRef('')
    const startedListener = useRef(false) // avoid to run useEffect  more than once (only for development)

    useEffect(() => {
      let mask = null as any

      if (maskRef.current && !startedListener.current) {
        mask = IMask(maskRef.current, masked)
      }

      return () => mask
    }, [])

    useEffect(() => {
      let maskListener = null as any

      if (maskRef.current && !startedListener.current) {
        const ref = maskRef.current as any
        maskListener = ref.addEventListener(
          'input',
          (e: any) => {
            if (lastValueRef.current !== e.target.value) {
              lastValueRef.current = e.target.value
              onChange && onChange(e)
              onAccept && onAccept(e)
            }
          },
          false
        )

        setTimeout(() => {
          startedListener.current = true
        }, 100)
      }

      return () => maskListener
    }, [])

    return (
      <>
        <TextField
          id={'id'}
          name={name}
          label={label}
          defaultValue={defaultValue}
          helperText={error?.message ?? null}
          error={!!error}
          onBlur={onBlur}
          inputRef={mergeRefs(ref, maskRef)}
          fullWidth
          size="small"
          variant="outlined"
          {...rest}
        />
      </>
    )
  }
)
