import { Text } from "react-native";

export default function showZitat({text, autor}){
    return ( 
        <>
            <Text style={{fontSize: 36}}>{text}</Text>
            <Text style={{fontStyle: "italic"}}>-- {autor}</Text>
        </> 
    )
}