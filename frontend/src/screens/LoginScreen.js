import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { COLORS } from '../core/COLORS'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  
  if (emailError || passwordError) {
    setEmail({ ...email, error: emailError })
    setPassword({ ...password, error: passwordError })
    return
  }

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    const data={
      email: email.value,
      password: password.value
    }

  try{
      await axios({
        
        method: "POST",
        data,
        url: "http://192.168.1.50:5000/auth/signin",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          }

      }).then(async (res) => {

        await AsyncStorage.setItem('@token',res.data.token)
          navigation.reset({
            index: 0,
            routes: [{ name: 'Matches' }],
          })
        })
    }catch(error){
      
      console.log(error.response.data.message)
    }
 }

  return (   
    <Background>
      
      <Logo />
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text style={styles.text}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      
    </Background>
    
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    color: COLORS.secondaryColor,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4, 
  },
  forgot: {
    fontSize: 13,
    color: COLORS.secondaryColor,
  },
  link: {
    fontWeight: 'bold',
    color: COLORS.secondaryColor,
  },
  text:{
    color: COLORS.fontPrimary,
  }
})
