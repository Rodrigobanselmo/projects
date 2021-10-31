import TextField from '@mui/material/TextField'
import React from 'react'
import { Controller } from 'react-hook-form'

import { FormInputProps } from './interfaces'

export const TextFieldInput = ({
  defaultValue = '',
  mask,
  name,
  control,
  label,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onBlur, onChange, ref, value, ...rest },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error?.message ?? null}
          size="small"
          error={!!error}
          onChange={(e) => {
            mask && mask(e)
            onChange(e)
          }}
          onBlur={onBlur}
          inputRef={ref}
          fullWidth
          label={label}
          variant="outlined"
          value={value || ''}
          {...rest}
        />
      )}
    />
  )
}
