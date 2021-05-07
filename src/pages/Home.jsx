import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  const [user, setUser] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite um usuário válido"
          autoCorrect={false}
          autoCapitalize="none"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Repositories", { user })}
        >
          <Text style={styles.textButton}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  form: {
    padding: 30,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    backgroundColor: "rgba(0,0,255,0.1)",
    height: 56,
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
  },
  button: {
    width: "80%",
    backgroundColor: "rgba(0,0,255,0.1)",
    height: 56,
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
