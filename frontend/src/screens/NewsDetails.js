import * as React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {Card, Title, Paragraph } from 'react-native-paper'
import { COLORS } from '../core/COLORS'

export default function NewsDetails() {
  return (
    <ScrollView style={{backgroundColor:COLORS.InputColor}}>  
      <Card.Cover source={require('../assets/news.jpg')} />
      <Title style={{marginLeft:5,marginRight:5,color:COLORS.secondaryColor}}>News title</Title>
          <Paragraph style={{marginLeft:5,marginRight:5,color:'white'}}>
            News Details
          </Paragraph>
    </ScrollView>
)
}