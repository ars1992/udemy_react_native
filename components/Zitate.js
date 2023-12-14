import { Text } from "react-native";

export default function showZitat({text, autor}){
    return ( 
        <>
            <Text>{text}</Text>
            <Text>-- {autor}</Text>
        </> 
    )
}