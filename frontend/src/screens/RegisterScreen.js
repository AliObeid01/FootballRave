import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { COLORS } from '../core/COLORS'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import axios from "axios"
import { URL } from '../core/axiosUrl'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [registerError, setRegisterError] = useState('')

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    const data={
      name:name.value,
      email: email.value,
      password: password.value
    }

    try{
      await axios({       
        method: "POST",
        data,
        url: `${URL.auth}/signup`,
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          }
      }).then((res) => {
          console.log(res.data)
          navigation.navigate('LoginScreen')
        })
    }catch(error){
      setRegisterError(error.response.data.message)  
    }
 }

  return (
    <Background>
      <Logo />
      <Title>Create Account</Title>
      <Title style={{fontSize: 15,color:COLORS.error}}>{registerError}</Title>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button onPress={onSignUpPressed}>Sign Up</Button>
      <View style={styles.row}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color:  COLORS.secondaryColor,
  },
  text:{
    color: COLORS.fontPrimary,
  }
})
