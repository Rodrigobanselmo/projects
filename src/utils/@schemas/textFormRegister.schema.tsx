import * as Yup from 'yup'
import { currencyCentsMask } from '../@masks/currency-cents.mask'
import { kilometersMask } from '../@masks/kilometers.mask'
import { rangeNumberMask } from '../@masks/range-number.mask'

export const textFormRegisterSchema = {
  range: Yup.string()
    .required('Campo obrigatório')
    .transform(rangeNumberMask().transform),
  money: Yup.string()
    .required('Campo obrigatório')
    .transform(currencyCentsMask().unmask),
  km: Yup.string()
    .required('Campo obrigatório')
    .transform(kilometersMask().unmask),
}
