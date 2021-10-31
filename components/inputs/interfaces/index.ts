import { ChangeEvent } from 'react'
import { Control, FieldValues } from 'react-hook-form'

export interface FormInputProps {
  name: string
  control: Control<FieldValues, object>
  label: string
  defaultValue?: string
  mask?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}
