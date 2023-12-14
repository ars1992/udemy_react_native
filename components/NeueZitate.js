import { Modal, Pressable, Text, StyleSheet, View } from "react-native";


export default function neuesZitat({ visible, onCancel }) {
    return (
        <Modal visible={visible} onRequestClose={onCancel}>
            <View style={styles.container}>
                <Text>hallo neu</Text>
                <Pressable onPress={onCancel}>
                    <Text>abbrechen</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})