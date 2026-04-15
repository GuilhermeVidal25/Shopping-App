import { TouchableOpacity,TouchableOpacityProps, Text} from "react-native";

import {styles} from "./styles"

// aqui, estamos passando a tipagem dos dados type:
type Props = TouchableOpacityProps &   {
    title: string
}

// estamos dizendo que os dados recebidos nas props serão string 

export function Button({title, ...rest}: Props){
    // {title} foi desestruturado
    return(
        <TouchableOpacity 
                style={styles.container} 
                activeOpacity={0.8} 
                {...rest}
        >
        <Text style={styles.title}>{title}</Text>

        </TouchableOpacity>
    )
}
//activeOpacity={0.02} - propriedade estilo hover