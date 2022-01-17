import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ButtonText, ButtonDelete } from "./src/components/button";
import RowButton from "./src/components/row";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#cde3f3",
  },
  displayArea: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "red"
  },
  buttonsArea: {
    flex: 2,
    display: "flex",
  },
  result: {
    color: "#32688c",
    textAlign: "right",
    fontSize: width * 0.11,
    maxWidth: width,
  },
});

const App = () => {
  const [display, setDisplay] = useState("0");

  const onSubmit = (number) => {
    let currentValue = display;
    let nextValue = (currentValue += number);
    let result = nextValue.replace(/^0+/, "");
    if (result === "") {
      setDisplay("0");
    } else {
      setDisplay(result);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayArea}>
        <Text style={styles.result}>{display}</Text>
      </View>
      <View style={styles.buttonsArea}>
        <RowButton>
          <ButtonText
            text="AC"
            sizeX={width * 0.44}
            onPress={() => setDisplay("0")}
          />
          <ButtonDelete
            onPress={() => {
              let operation = display;
              setDisplay(operation.slice(0, -1));
            }}
          />
          <ButtonText text="/" color="#f0a632" onPress={() => onSubmit("/")} />
        </RowButton>
        <RowButton>
          <ButtonText text="7" color="#47a3f3" onPress={() => onSubmit("7")} />
          <ButtonText text="8" color="#47a3f3" onPress={() => onSubmit("8")} />
          <ButtonText text="9" color="#47a3f3" onPress={() => onSubmit("9")} />
          <ButtonText text="x" color="#f0a632" onPress={() => onSubmit("*")} />
        </RowButton>
        <RowButton>
          <ButtonText text="4" color="#47a3f3" onPress={() => onSubmit("4")} />
          <ButtonText text="5" color="#47a3f3" onPress={() => onSubmit("5")} />
          <ButtonText text="6" color="#47a3f3" onPress={() => onSubmit("6")} />
          <ButtonText text="-" color="#f0a632" onPress={() => onSubmit("-")} />
        </RowButton>
        <RowButton>
          <ButtonText text="1" color="#47a3f3" onPress={() => onSubmit("1")} />
          <ButtonText text="2" color="#47a3f3" onPress={() => onSubmit("2")} />
          <ButtonText text="3" color="#47a3f3" onPress={() => onSubmit("3")} />
          <ButtonText text="+" color="#f0a632" onPress={() => onSubmit("+")} />
        </RowButton>
        <RowButton>
          <ButtonText text="0" color="#47a3f3" onPress={() => onSubmit("0")} />
          <ButtonText
            text="00"
            color="#47a3f3"
            onPress={() => onSubmit("00")}
          />
          <ButtonText text="." color="#47a3f3" onPress={() => onSubmit(".")} />
          <ButtonText
            text="="
            color="#27cf55"
            onPress={() => {
              try {
                let operation = display;
                setDisplay(eval(operation));
              } catch (error) {
                setDisplay("Error");
              }
            }}
          />
        </RowButton>
      </View>
    </View>
  );
};

export default App;
