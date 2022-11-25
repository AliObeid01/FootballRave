import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { COLORS  } from '../core/COLORS'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input style={styles.input} {...props}/>
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  input: {
    height:55,
    backgroundColor: COLORS.InputColor,
  },
  description: {
    fontSize: 13,
    color: COLORS.placeholder,
    paddingTop: 8,
  },
  error: {
    fontSize: 12,
    color: COLORS.error,
    paddingTop: 8,
  },
})
