import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { COLORS  } from '../core/COLORS'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: COLORS.secondaryColor,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
