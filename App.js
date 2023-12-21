import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';

import Zitate from './components/Zitate';
import NeueZitate from './components/NeueZitate';
import Bigbutton from './components/Bigbutton'
import Iconbutton from './components/Iconbutton'

const db = SQLite.openDatabase("zitate.db")

export default function App() {

  const [index, setIndex] = useState(0)
  const [zitate, setZitate] = useState([])
  const [isShowDialog, setShowDialog] = useState(false)

  useEffect(() => {
    initDB()
    loadZitate()
  }, [])

  function initDB() {
    db.transaction((tx) => tx.executeSql(
      'CREATE TABLE IF NOT EXISTS zitate (id INTEGER PRIMARY KEY NOT NULL, zitat TEXT, autor TEXT);'
      )
    )
  }

  function setZitatContent() {
    const zitat = zitate[index]
    if (zitate.length <= 0) {
      return <Text style={styles.keineZitate}>Keine Zitate</Text>
    }
    return <Zitate text={zitat.text} autor={zitat.autor} />
  }

  function addZitatToZitateData(text, autor) {
    setShowDialog(false)
    const neueZitateData = [...zitate, { text, autor }]
    setZitate(neueZitateData)
    setIndex(neueZitateData.length - 1)
    saveZitate(neueZitateData)
  }

  function removeZitatFromZitateData() {
    const neueZitateData = [...zitate]
    neueZitateData.splice(index, 1)
    setIndex(0)
    setZitate(neueZitateData)
    saveZitate(neueZitateData)
  }

  function createDeleteAlert() {
    Alert.alert("Löschen", "Möchten Sie das Zitat löschen", [
      {
        text: "Abbrechen",
        style: "cancel"
      },
      {
        text: "Löschen",
        style: "destructive",
        onPress: removeZitatFromZitateData,
      }
    ])
  }

  function saveZitate(zitate) {
    // AsyncStorage.setItem("Zitate", JSON.stringify(zitate))
  }

  async function loadZitate() {
    // let zitateAusSpeicher = await AsyncStorage.getItem("Zitate")
    if (zitateAusSpeicher !== null) {
      zitateAusSpeicher = JSON.parse(zitateAusSpeicher)
      setZitate(zitateAusSpeicher)
    }
  }

  return (
    <View style={styles.container}>

      {zitate.length <= 0 ? null :
        <Iconbutton
          style={styles.delete}
          onPress={() => createDeleteAlert()}
          icon="md-remove-circle" />
      }

      <Iconbutton
        style={styles.new}
        onPress={() => setShowDialog(true)}
        icon="add-circle" />

      <NeueZitate
        visible={isShowDialog}
        onCancel={() => setShowDialog(false)}
        onSave={addZitatToZitateData}>
      </NeueZitate>

      {setZitatContent()}

      {zitate.length <= 1 ? null : (
        <>
          <Bigbutton style={[styles.button, styles.next]} titel={"next"}
            onPress={() => setIndex((index + 1) % zitate.length)}></Bigbutton>

          <Bigbutton style={[styles.button, styles.back]} titel={"back"}
            onPress={() => setIndex(index == 0 ? zitate.length - 1 : index - 1)}></Bigbutton>
        </>
      )}

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
  },
  delete: {
    position: "absolute",
    top: 60,
    left: 20
  },
  keineZitate: {
    fontSize: 50
  }
});
