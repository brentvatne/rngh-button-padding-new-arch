import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { GestureHandlerRootView, BorderlessButton, RectButton } from "react-native-gesture-handler";

function BrokenBorderlessButtonPadding() {
  return (
    <BorderlessButton
      onPress={() => { }}
      style={styles.buttonStyles}
    >
      <Text>Hi, this is an RNGH BorderlessButton</Text>
    </BorderlessButton>
  );
}

function BrokenRectButtonPadding() {
  return (
    <RectButton
      onPress={() => { }}
      style={styles.buttonStyles}
    >
      <Text>Hi, this is an RNGH RectButton</Text>
    </RectButton>
  );
}


function WorkingButtonPadding() {
  return (
    <TouchableOpacity
      onPress={() => { }}
      style={styles.buttonStyles}
    >
      <Text>Hi, this is a TouchableOpacity with identical styling</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <BrokenBorderlessButtonPadding />
        <View style={{ marginTop: 20 }} />
        <WorkingButtonPadding />
        <View style={{ marginTop: 20 }} />
        <BrokenRectButtonPadding />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyles: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: "#ccc",
    borderBottomWidth: 2,
    borderBottomColor: 'green'
  }
});