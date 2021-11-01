/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { cpfMask } from '../../utils/@masks/cpf.mask'

import { currencyMask } from '../../utils/@masks/currency.mask'
import { dateMask } from '../../utils/@masks/date.mask'
import { phoneMask } from '../../utils/@masks/phone.mask'
import { positiveNumberMask } from '../../utils/@masks/positive-number.mask'
import { textFormSchema } from '../../utils/@schemas/textForm.schema'
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
  } = useForm({
    resolver: yupResolver(Yup.object().shape({ ...textFormSchema })),
  })

  console.log('watch ', watch('positive'))
  // const timesUpdated = updateInterval()

  const onSubmit = (data: Record<string, string>) => console.log(data)

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      maxWidth={300}
      m={10}
    >
      <Stack spacing={2}>
        <TextFieldInput
          inputProps={{ style: { textTransform: 'capitalize' } }}
          label="Nome"
          control={control}
          name="name"
        />
        <TextFieldInput
          defaultValue="1.000.000"
          label="Positive Number"
          control={control}
          name="positive"
          mask={positiveNumberMask().apply}
          onChange={() => console.log('onChange')}
        />
        <TextFieldInput
          // defaultValue="R$ 1.000.000"
          label="Currency"
          control={control}
          name="currency"
          mask={currencyMask().apply}
        />
        <TextFieldInput
          defaultValue="12/02/1990"
          label="Date"
          control={control}
          name="date"
          mask={dateMask().apply}
        />
        <TextFieldInput
          defaultValue="401.951.858-03"
          label="CPF"
          control={control}
          name="cpf"
          mask={cpfMask().apply}
        />
        <TextFieldInput
          defaultValue="(12) 99681-8163"
          label="Phone"
          control={control}
          name="phone"
          mask={phoneMask().apply}
        />
      </Stack>
      <>
        <Box mt={3} display="grid" gap={3}>
          <Button
            variant="outlined"
            onClick={() => setFocus('positive')}
            type="button"
          >
            set focus
          </Button>
          <Button
            variant="outlined"
            onClick={() => setValue('positive', 'mask not apply')}
            type="button"
          >
            set value (mask not apply)
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              setValue('positive', positiveNumberMask().mask('89789'))
            }
            type="button"
          >
            set value (with mask)
          </Button>
          <Button
            variant="outlined"
            onClick={() => alert(getValues('positive'))}
            type="button"
          >
            get value
          </Button>
          <Button
            onClick={() => setError('positive', { message: 'error' })}
            variant="outlined"
            type="button"
          >
            set error
          </Button>
          <Button
            variant="outlined"
            onClick={() => clearErrors('positive')}
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
        <Text mt={3} error>
          *Does not work for negative number
        </Text>
        <Text error>
          *Does not work for float number (has work around with i mask block)
        </Text>
        <Text error>*Does not work setting a text on the end</Text>
        <Text warn>*Does not have set blur method</Text>
        <Text warn>*Default value does not apply mask</Text>
        <Text warn>
          *The on change function is called even if it does not pass the mask
          with the masked value
        </Text>
        <Text warn>*Set value does not apply mask</Text>
        <Text warn>*By default it return masked value on submit</Text>
        <Text success>*Every thing else works fine</Text>
      </>
    </Box>
  )
}
