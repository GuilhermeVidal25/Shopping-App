import { TextInput, TextInputProps  } from "react-native"

import {styles} from "./styles"

export function Imput({...rest}: TextInputProps ){
    return(
        <TextInput style={styles.container} {...rest}/>
    )
}
