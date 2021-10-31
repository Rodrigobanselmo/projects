/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import { useForm } from 'react-hook-form'

import { numberMask } from '../../masks/number.mask'
import { TextFieldInput } from '../inputs/TextFieldInput'
import { Text } from '../typography/Text'
import { updateInterval } from '../../hooks/updateInterval'

export const TextForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    clearErrors,
    getValues,
    setFocus,
    setValue,
    setError,
    reset,
  } = useForm()

  // const timesUpdated = updateInterval()

  const onSubmit = (data: Record<string, string>) => console.log(data)
  console.log(watch('text-field'))

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      maxWidth={300}
      m={10}
    >
      <Text warn>*Does not have set blur method</Text>
      <Text warn>*Default value does not apply mask</Text>
      <Text warn>*Set value does not apply mask</Text>
      <Text success mb={3}>
        *Every thing else works fine
      </Text>
      <TextFieldInput
        defaultValue=""
        label="Text Field"
        control={control}
        name="text-field"
        mask={numberMask.apply}
      />
      <Box mt={3} display="grid" gap={3}>
        <Button
          variant="outlined"
          onClick={() => setFocus('text-field')}
          type="button"
        >
          set focus
        </Button>
        <Button
          variant="outlined"
          onClick={() => setValue('text-field', 'mask not apply')}
          type="button"
        >
          set value (mask not apply)
        </Button>
        <Button
          variant="outlined"
          onClick={() => setValue('text-field', numberMask.mask('89789'))}
          type="button"
        >
          set value (with mask)
        </Button>
        <Button
          variant="outlined"
          onClick={() => alert(getValues('text-field'))}
          type="button"
        >
          get value
        </Button>
        <Button
          onClick={() => setError('text-field', { message: 'error' })}
          variant="outlined"
          type="button"
        >
          set error
        </Button>
        <Button
          variant="outlined"
          onClick={() => clearErrors('text-field')}
          type="button"
        >
          clear error
        </Button>
        <Button variant="outlined" onClick={() => reset()} type="button">
          reset
        </Button>
      </Box>
      <Button sx={{ mt: 2, width: '100%' }} variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  )
}
