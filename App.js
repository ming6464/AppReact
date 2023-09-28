import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ToastAndroid, View, Button } from "react-native";

export default function App() {
  const ShowToast = (text) => {
    ToastAndroid.showWithGravity(text, ToastAndroid.LONG, ToastAndroid.TOP);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>au fuck</Text>
      <Button title="Show Toast" onPress={() => ShowToast("Hello")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
