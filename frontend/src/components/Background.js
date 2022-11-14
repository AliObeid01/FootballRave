import React from 'react'
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { COLORS  } from '../core/COLORS'

export default function Background({ children }) {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="width">
        {children}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.primaryColor,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
