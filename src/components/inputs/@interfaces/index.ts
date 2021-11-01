import { TextFieldProps } from '@mui/material/TextField'
import IMask from 'imask'
import { ChangeEvent, RefObject } from 'react'
import { Control, FieldError, FieldValues } from 'react-hook-form'

export type FormInputProps = TextFieldProps & {
  name: string
  control: Control<FieldValues, object>
  label: string
  defaultValue?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  mask?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export type FormInputFixProps = TextFieldProps & {
  name: string
  control: Control<FieldValues, object>
  label: string
  defaultValue?: string
  masked: IMask.AnyMaskedOptions
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export type FormInputRegisterProps = TextFieldProps & {
  name: string
  label: string
  defaultValue?: string
  masked: IMask.AnyMaskedOptions
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  onAccept?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  error?: FieldError | null
  maskRef?: RefObject<HTMLElement | IMask.MaskElement>
}
