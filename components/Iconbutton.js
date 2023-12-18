import { Pressable} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function generateIconButton({onPress, icon, style}){
    return (
        <Pressable style={style} onPress={onPress}>
            <Ionicons name={icon} size={36} color="cornflowerblue" />
        </Pressable>
    )
}