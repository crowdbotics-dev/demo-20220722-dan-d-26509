import { Pressable } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 0,
      top: 0,
      position: "absolute",
      height: 91,
      width: 197,
      backgroundColor: "#ffb0b0",
      borderRadius: 0,
      color: "#777777"
    }}></View><View style={{
      left: 69,
      top: 59,
      position: "absolute",
      width: 56,
      height: 54,
      backgroundColor: "#E4E4E4",
      borderRadius: "50%"
    }}></View><TextInput style={{
      left: 21,
      top: 142,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} placeholder="Enter Name"></TextInput><Text style={{
      left: 23,
      top: 123,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Name</Text><Pressable onPress={() => navigation.navigate("Untitled1")}><View style={{
        left: 23,
        top: 310,
        position: "absolute",
        height: 28,
        width: 152,
        backgroundColor: "#E4E4E4",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Text style={{
      left: 45,
      top: 239,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Button
    </Text></View>;
};

export default Untitled2;