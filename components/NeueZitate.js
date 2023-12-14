import { Pressable, Text, View } from "react-native";


export default function neuesZitat({visible, onCancel}) {
    if (visible) {
        return (
            <View>
                <Text>hallo neu</Text>
                <Pressable onPress={onCancel}>
                    <Text>abrechen</Text>
                </Pressable>
            </View>
        )
    }
    return null
}