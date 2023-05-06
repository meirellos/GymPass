import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Rotas from "./src/screens/routes";
import Login from "./src/screens/login";
import Gym from "./src/screens/gym";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <Rotas />
      <StatusBar style="auto" />
    </View>
  );
}
