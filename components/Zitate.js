import { Text } from "react-native";

export default function showZitat(props){
    return ( 
        <>
            <Text>{props.text}</Text>
            <Text>-- {props.autor}</Text>
        </> 
    )
}