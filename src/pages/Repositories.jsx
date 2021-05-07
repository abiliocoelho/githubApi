import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { api } from "../services/api";
export function Repositories() {
  const route = useRoute();
  const { user } = route.params;
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getRepositories() {
      const response = await api.get(`${user}/repos`);
      setRepositories(response.data);
    }
    getRepositories();
  }, []);
  return (
    <View style={styles.container}>
      {repositories.map((repository) => (
        <View key={repository.id} style={styles.repositoryContainer}>
          <Text>{repository.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  repositoryContainer: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginTop: 2,
    padding: 4,
    borderRadius: 6,
  },
});
