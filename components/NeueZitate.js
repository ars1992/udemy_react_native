import { Text } from "react-native";


export default function neuesZitat({visible}) {
    if (visible) {
        return <Text>hallo neu</Text>
    }
    return null
}