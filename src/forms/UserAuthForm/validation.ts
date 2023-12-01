import { object, string } from 'yup'

export const validateEmailSchema = object({
  authToken: string()
    .required('Введите Email')
    .email('Введен некорректный Email')
    .max(64, 'Email не должен превышать 64 символа'),
})
