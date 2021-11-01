import { isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import * as Yup from 'yup'
import { cpfMask } from '../@masks/cpf.mask'
import { currencyMask } from '../@masks/currency.mask'
import { dateMask } from '../@masks/date.mask'
import { phoneMask } from '../@masks/phone.mask'
import { positiveNumberMask } from '../@masks/positive-number.mask'

export const textFormSchema = {
  name: Yup.string().required('Campo obrigatório'),
  positive: Yup.string()
    .required('Campo obrigatório')
    .transform(positiveNumberMask().transform),
  currency: Yup.string()
    .required('Campo obrigatório')
    .transform(currencyMask().transform),
  date: Yup.string()
    .required('Campo obrigatório')
    .length(10, 'Data inválida')
    .transform(dateMask().transform),
  cpf: Yup.string()
    .required('CPF obrigatório')
    .transform(cpfMask().transform)
    .test('validateCpf', 'CPF inválido', (value) => {
      if (value && value.length === 11) {
        return isValidCPF(value)
      }
      return false
    }),
  phone: Yup.string()
    .required('Celular obrigatório')
    .transform(phoneMask().transform)
    .test('validatePhone', 'Número de telefone inválido', (value) => {
      if (!value) return true
      if (value.length > 9) {
        return isValidPhone(value)
      }
      return false
    }),
}
