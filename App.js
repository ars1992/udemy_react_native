import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Zitate from './components/Zitate';
import NeueZitate from './components/NeueZitate'
import { Ionicons } from '@expo/vector-icons';


const zitate = [
  {text: "hallo", autor: "ich"},
  {text: "apple", autor: "du"},
  {text: "welt", autor: "wir"},
]

export default function App() {

  const [index, setIndex] = useState(0)
  const [isShowDialog, setShowDialog] = useState(false)
  const zitat = zitate[index]

  return (
    <View style={styles.container}>
      <Pressable style={[styles.new]} onPress={()=>setShowDialog(isShowDialog ? false : true)}>
        <Ionicons name="add-circle" size={36} color="cornflowerblue" />
      </Pressable>
      <NeueZitate visible={isShowDialog}></NeueZitate>
      <Zitate text={zitat.text} autor={zitat.autor}/>
      <Pressable style={[styles.button, styles.next]} onPress={() => setIndex((index + 1) % zitate.length)}>
        <Text style={styles.buttonText}>next</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.back]} onPress={() => setIndex(index == 0 ? zitate.length - 1: index - 1)}>
        <Text style={styles.buttonText}>back</Text>
      </Pressable>
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
  button: {
    position: 'absolute',
    bottom: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "cornflowerblue",
    padding: 10,
  },
  buttonText: {
    fontSize: 25,
  },
  next: {
    left: 20,
  },
  back: {
    right: 20,
  },
  new: {
    position: "absolute",
    top: 60,
    bottom: null,
    right: 20
  }
});
