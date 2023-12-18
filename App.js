import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Zitate from './components/Zitate';
import NeueZitate from './components/NeueZitate';
import Bigbutton from './components/Bigbutton'
import Iconbutton from './components/Iconbutton'
import { Ionicons } from '@expo/vector-icons';


const zitateData = [
  { text: "hallo", autor: "ich" },
  { text: "jeanette", autor: "liebe" },
  { text: "was möchtest du zu Weihnachten ?", autor: "dich" },
]

export default function App() {

  const [index, setIndex] = useState(0)
  const [zitate, setZitate] = useState(zitateData)
  const [isShowDialog, setShowDialog] = useState(false)
  const zitat = zitate[index]

  function addZitatToZitateData(text, autor) {
    setShowDialog(false)
    const neueZitateData = [...zitate, { text, autor }]
    setZitate(neueZitateData)
    setIndex(neueZitateData.length - 1)
  }

  return (
    <View style={styles.container}>

      <Iconbutton 
        style={styles.new} 
        onPress={() => setShowDialog(true)}
        icon="add-circle"/>
      

      <NeueZitate
        visible={isShowDialog}
        onCancel={() => setShowDialog(false)}
        onSave={addZitatToZitateData}>
      </NeueZitate>
      <Zitate text={zitat.text} autor={zitat.autor} />

      <Bigbutton style={[styles.button, styles.next]} titel={"next"}
        onPress={() => setIndex((index + 1) % zitate.length)}></Bigbutton>
      <Bigbutton style={[styles.button, styles.back]} titel={"back"}
        onPress={() => setIndex(index == 0 ? zitate.length - 1 : index - 1)}></Bigbutton>

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
    right: 20
  }
});
