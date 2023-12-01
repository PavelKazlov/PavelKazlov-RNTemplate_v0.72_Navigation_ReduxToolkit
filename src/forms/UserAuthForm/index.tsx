import { Colors } from '@/constants'
// import { Icon, Input, Text } from '@rneui/base'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { validateEmailSchema } from './validation'

export const UserAuthForm = ({ setAuthToken }: any) => {
  const [token, setToken] = useState<string>('')

  const formik = useFormik({
    initialValues: { authToken: '' },
    onSubmit: onSubmitInput,
    validationSchema: validateEmailSchema,
    validateOnBlur: true,
    validateOnMount: false,
    validateOnChange: false,
  })

  const { values, setSubmitting, errors, touched, setFieldTouched, handleSubmit, setErrors, setValues } = formik

  function onSubmitInput(values: any) {
    if ((errors.authToken === '' || errors.authToken === undefined) && values.authToken !== '') {
      setAuthToken(values)
    } else {
      setSubmitting(false)
      return
    }
  }

  const onInputChange = (val: string) => {
    setToken(val)
    setErrors({ authToken: '' })
    setValues({ authToken: val })
  }

  const onInputBlur = () => {
    setFieldTouched('authToken', true)
    handleSubmit()
  }

  return (
    <>
      <Text style={{ fontSize: 20, color: Colors.primary }}>Введите ключ учетной записи</Text>
      <View
        style={{
          width: '80%',
          marginBottom: 10,
          borderBottomColor: Colors.primary,
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          style={{
            color: Colors.primary,
          }}
          onBlur={onInputBlur}
          onChangeText={(val) => onInputChange(val)}
          value={token}
          placeholder='Email'
          keyboardType='email-address'
        />
      </View>
      {errors?.authToken && (
        <Text
          style={{
            color: Colors.error,
            marginBottom: 10,
          }}
        >
          {errors?.authToken}
        </Text>
      )}
      {/* <Button onPress={onSubmitInput} title='SignIn' /> */}
    </>
  )
}
