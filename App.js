import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const zitate = [
  {text: "hallo", autor: "ich"},
  {text: "apple", autor: "du"},
  {text: "welt", autor: "wir"},
]

export default function App() {

  const [index, setIndex] = useState(0)
  const zitat = zitate[index]
  // const useStates = useState(0)
  // const index = useStates[0]
  // console.log(useStates)
  // const zitat = zitate[index]
  // const setIndex = useStates[1]

  return (
    <View style={styles.container}>
      <Text>{zitat.text}</Text>
      <Text>&mdash; {zitat.autor}</Text>
      <Button title='next' onPress={() => setIndex((index + 1) % zitate.length)}></Button>
      <Button title='back' onPress={() => setIndex(index == 0 ? zitate.length - 1: index - 1)}></Button>
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
