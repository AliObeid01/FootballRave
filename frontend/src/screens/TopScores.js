import React from 'react';
import { StyleSheet, View,SectionList,Text} from 'react-native';
import { Avatar } from "react-native-elements"
import { COLORS } from '../core/COLORS'
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

export default function TopScores({route}) {
     
    const state = {
        data: [
          {
            title: "Top Scores",
            data: [
              "Processes & Threads",
              "Memory Management",
              "CPU Scheduling",
              "Process Synchronization",
              "Deadlock",
            ],
          },
          {
            title: "Top Assists",
            data: [
              "Data Link Layer",
              "Network Layer",
              "Transport Layer",
              "Application Layer",
              "Network Security",
            ],
          },
          {
            title: "Top Red Cards",
            data: [
                "Data Link Layer",
                "Network Layer",
                "Transport Layer",
                "Application Layer",
                "Network Security",
            ],
          },
          {
            title: "Top Yellow Cards",
            data: [
                "Data Link Layer",
                "Network Layer",
                "Transport Layer",
                "Application Layer",
                "Network Security",
            ],
          },
        ],
      };
      
       
        return (
          <View style={styles.screen}>
            
            <SectionList
              sections={state.data}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View style={styles.row}>
                <Avatar  size="small" rounded source={require('../assets/news.jpg')}/>
                <Text style={styles.rowText}>{item}</Text>
                <Text style={styles.rowText}>1</Text>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
          </View>
        );
      
    }

    const styles = StyleSheet.create({
      screen: {
        backgroundColor:COLORS.InputColor
      },
      header: {
        fontSize: 20,
        color: COLORS.secondaryColor,
        marginTop: 10,
        padding: 2,
        backgroundColor: COLORS.primaryColor,
        textAlign: "center",
      },
      row: {
        marginHorizontal: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 2,
      },
      rowText: {
        fontSize: 18,
        color: COLORS.secondaryColor,
      },
    });
