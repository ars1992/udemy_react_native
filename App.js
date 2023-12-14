import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const zitate = [
  {text: "hallo", autor: "ich"},
  {text: "apple", autor: "du"},
  {text: "welt", autor: "wir"},
]

export default function App() {
  const useStates = useState(0)
  const index = useStates[0]
  console.log(useStates)
  const zitat = zitate[index]

  return (
    <View style={styles.container}>
      <Text>{zitat.text}</Text>
      <Text>&mdash; {zitat.autor}</Text>
      <Button title='next' onPress={() => alert(zitat.text)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
