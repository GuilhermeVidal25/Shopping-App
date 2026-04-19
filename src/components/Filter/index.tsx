import { TouchableOpacity, TouchableOpacityProps , Text  } from "react-native";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "../StatusIcon";

type Props = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
}
// aqui vc cria uma pasta types - dentro de SRC - para que 
// compartilhe esses status de selecionado ou não.

export function Filter({status, isActive, ...rest }: Props){
    return(
        <TouchableOpacity 
        style={[styles.container,{opacity: isActive? 1 : 0.5}]} 
        activeOpacity={0.8}
        {...rest}>
            <StatusIcon status={status}/>
            <Text style={styles.title}>
                {status === FilterStatus.DONE ? "Comprados": "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
} 

// ? : - é o if else (mais prático)
// caso você queira criar + de uma regra de estilização, pode fazer assim:
// dentro de style={} --> você coloca colchetes: []
//fica assim:
// <TouchableOpacity style={[styles.container,]} 
// {...rest} >
// você pode adicionar uma propriedade de {opacity} diretamente nela!
//