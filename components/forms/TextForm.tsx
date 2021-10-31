import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import { useForm } from 'react-hook-form'

import { numberMask } from '../../masks/number.mask'
import { TextFieldInput } from '../inputs/TextFieldInput'
import { Text } from '../typography/Text'

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
      <Text success mb={3}>
        *Every thing else works fine
      </Text>
      <TextFieldInput
        // defaultValue="Start with default value"
        label="Text Field"
        control={control}
        name="text-field"
        mask={numberMask.apply}
      />
      <Box>
        <Button onClick={() => setFocus('text-field')} type="button">
          set focus
        </Button>
        <Button onClick={() => setValue('text-field', '2344234')} type="button">
          set value
        </Button>
        <Button onClick={() => alert(getValues('text-field'))} type="button">
          get value
        </Button>
        <Button
          onClick={() => setError('text-field', { message: 'error' })}
          type="button"
        >
          set error
        </Button>
        <Button onClick={() => clearErrors('text-field')} type="button">
          clear error
        </Button>
        <Button onClick={() => reset()} type="button">
          reset
        </Button>
      </Box>
      <Button type="submit">Submit</Button>
    </Box>
  )
}
