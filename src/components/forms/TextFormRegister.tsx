/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { kilometersMask } from '../../utils/@masks/kilometers.mask'

import { rangeNumberMask } from '../../utils/@masks/range-number.mask'
import { textFormRegisterSchema } from '../../utils/@schemas/textFormRegister.schema'
import { TextFieldInputRegister } from '../inputs/TextFieldInputRegister'
import { Text } from '../typography/Text'
import { currencyCentsMask } from '../../utils/@masks/currency-cents.mask'

export const TextFormRegister = () => {
  const {
    handleSubmit,
    register,
    watch,
    clearErrors,
    getValues,
    setFocus,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Yup.object().shape({ ...textFormRegisterSchema })),
  })

  // const timesUpdated = updateInterval()

  const onSubmit = (data: Record<string, string>) => console.log(data)

  console.log(watch('range'))

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      maxWidth={300}
      m={10}
    >
      <Stack spacing={2}>
        <TextFieldInputRegister
          defaultValue="-100,999"
          label="Range"
          masked={rangeNumberMask().masked}
          onAccept={() => console.log('accept')}
          error={errors['range']}
          {...register('range')}
        />
        <TextFieldInputRegister
          defaultValue="1000"
          label="KM"
          masked={kilometersMask().masked}
          error={errors['km']}
          {...register('km')}
        />
        <TextFieldInputRegister
          defaultValue="1500"
          label="Money Cents"
          masked={currencyCentsMask().masked}
          error={errors['money']}
          {...register('money')}
        />
      </Stack>
      <>
        <Box mt={3} display="grid" gap={3}>
          <Button
            variant="outlined"
            onClick={() => setFocus('range')}
            type="button"
          >
            set focus
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setValue('range', rangeNumberMask().mask('89789'), {
                shouldTouch: true,
                shouldValidate: true,
                shouldDirty: true,
              })
            }}
            type="button"
          >
            *set value
          </Button>
          <Button
            variant="outlined"
            onClick={() => alert(getValues('range'))}
            type="button"
          >
            get value
          </Button>
          <Button
            onClick={() => setError('range', { message: 'error' })}
            variant="outlined"
            type="button"
          >
            set error
          </Button>
          <Button
            variant="outlined"
            onClick={() => clearErrors('range')}
            type="button"
          >
            clear error
          </Button>
          <Button variant="outlined" onClick={() => reset()} type="button">
            reset
          </Button>
        </Box>
        <Button
          sx={{ mt: 2, width: '100%', mb: 3 }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
        <Text error>*set value does not work properly</Text>
        <Text error>*reset fails if default value is defined</Text>
        <Text warn>*Does not have set blur method</Text>
        <Text warn>*Reset does not bring label down</Text>
        <Text warn>*By default it return masked value on submit</Text>
        <Text warn>
          *Text in the and only works with lazy true (always showing)
        </Text>
        <Text success>*Does accept text in the end</Text>
        <Text success>*Default value with mask applied</Text>
      </>
    </Box>
  )
}
