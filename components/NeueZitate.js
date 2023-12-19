import { Modal, TextInput, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import Bigbutton from "./Bigbutton"
import Iconbutton from "./Iconbutton"

export default function neuesZitat({ visible, onCancel, onSave }) {
    const [zitat, setZitat] = useState("")
    const [autor, setAutor] = useState("")

    function stateZurückSetzen(){
        setZitat("")
        setAutor("")
    }

    function abbruchVerarbeiten(){
        onCancel()
        stateZurückSetzen()
    }

    function speichereZitat(){
        const newZitat = zitat.trim()
        const newAutor = autor.trim()

        if(newZitat === "" || newAutor === ""){
            alert("Zitat und Autor dürfen nicht leer sein!")
            return
        }
        onSave(newZitat, newAutor)
        stateZurückSetzen()
    }


    return (
        <Modal visible={visible} onRequestClose={onCancel}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <Iconbutton
                    onPress={abbruchVerarbeiten}
                    style={styles.abbrechenButton}
                    icon="chevron-back-circle-sharp">
                </Iconbutton>

                <TextInput
                    placeholder="Zitat"
                    style={[styles.input, styles.inputZitat]}
                    multiline={true}
                    onChangeText={setZitat}>
                </TextInput>

                <TextInput
                    placeholder="Autor"
                    style={styles.input}
                    returnKeyType="done"
                    onChangeText={setAutor}
                    onSubmitEditing={speichereZitat}>
                </TextInput>

                <Bigbutton
                    titel={"Speichern"}
                    onPress={speichereZitat}>
                </Bigbutton>

            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        width: "90%",
        padding: 10,
        marginBottom: 10,
        fontSize: 25,
    },
    inputZitat: {
        height: 200,
        textAlignVertical: "top",
    },
    abbrechenButton: {
        position: "absolute",
        top: 60,
        left: 20,
    },
})