import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ToastAndroid, View, Button } from "react-native";

export default function App() {
  const ShowToast = (text) => {
    ToastAndroid.showWithGravity(text, ToastAndroid.LONG, ToastAndroid.TOP);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hellow <Text style={{ color: "red" }}>World</Text>
      </Text>
      <Text style={styles.text}>
        Hellow <Text style={{ color: "blue" }}>World</Text>
      </Text>
      <Text style={styles.text}>
        Hellow <Text style={{ color: "black" }}>World</Text>
      </Text>
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
  text: {
    fontSize: 30,
    fontStyle: "italic",
  },
});
