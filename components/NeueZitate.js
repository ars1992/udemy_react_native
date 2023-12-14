import { Modal, Pressable, Text, View } from "react-native";


export default function neuesZitat({ visible, onCancel }) {
    return (
        <Modal visible={visible} onRequestClose={onCancel}>
            <Text>hallo neu</Text>
            <Pressable onPress={onCancel}>
                <Text>abrechen</Text>
            </Pressable>
        </Modal>
    )
}