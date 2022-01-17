import React from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ButtonText = ({ color, text, sizeX, sizeY, onPress }) => {
  const defaultEvent = () => {};
  return (
    <Pressable onPress={onPress ? onPress : defaultEvent}>
      <View
        style={{
          height: sizeY || width * 0.21,
          width: sizeX || width * 0.21,
          marginVertical: width * 0.01,
          borderRadius: width * 0.04,
          backgroundColor: color || "#f3676b",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: width * 0.09 }}>{text}</Text>
      </View>
    </Pressable>
  );
};

const ButtonDelete = ({ onPress }) => {
  const defaultEvent = () => {};
  return (
    <Pressable onPress={onPress ? onPress : defaultEvent}>
      <View
        style={{
          height: width * 0.21,
          width: width * 0.21,
          marginVertical: width * 0.01,
          borderRadius: width * 0.04,
          backgroundColor: "#f3676b",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="delete" size={width * 0.09} color="white" />
      </View>
    </Pressable>
  );
};

export { ButtonText, ButtonDelete };
