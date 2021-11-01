import TextField from '@mui/material/TextField'
// import IMask, { MaskElement } from 'imask'
import React from 'react'
// import { useEffect, useRef } from 'react'
import { Controller } from 'react-hook-form'

// import { mergeRefs } from '../../utils/mergeRefs'
import { FormInputProps } from './@interfaces'

export const TextFieldInput = ({
  defaultValue = '',
  mask,
  name,
  control,
  label,
  onChange,
  ...restInput
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onBlur, onChange: func, ref, value, ...rest },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error?.message ?? null}
          size="small"
          error={!!error}
          onChange={(e) => {
            mask && mask(e)
            onChange && onChange(e)
            func(e)
          }}
          onBlur={onBlur}
          inputRef={ref}
          fullWidth
          label={label}
          variant="outlined"
          value={value || ''}
          {...rest}
          {...restInput}
        />
      )}
    />
  )
}
