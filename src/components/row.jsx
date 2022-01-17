import React from "react";
import { View } from "react-native";

const Row = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </View>
  );
};

export default Row;
