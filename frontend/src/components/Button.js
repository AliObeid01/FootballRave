import React from 'react'
import { StyleSheet} from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { COLORS  } from '../core/COLORS'

export default function Button(props) {
  return (
    <PaperButton style={styles.button} labelStyle={styles.text} {...props}/>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: COLORS.secondaryColor
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color:COLORS.fontPrimary
  },
})
