import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import {styles} from "./styles"
import { Button } from '@/components/Button';
import { Imput } from '@/components/Imput';
import { Filter } from '@/components/Filter';
import { Item } from '@/components/Item';

import { FilterStatus } from '@/types/FilterStatus';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE ]
const ITEMS  = [
  {id: "1", status: FilterStatus.DONE , description: "1 pacote de café"}, 
  {id: "2", status: FilterStatus.PENDING , description: "3 pacotes de macarrão"},
  {id: "3", status: FilterStatus.PENDING , description: "3 cebolas"}

]

export function Home() {
  return (
    <View style={styles.container}> 
      <Image source={require("@/assets/logo.png")} style={styles.logo}/>
      
      <View style={styles.form}>
        <Imput placeholder='O que gostaria de comprar? ' />
        <Button title="Entrar"/>
      </View>
    
      <View style={styles.content}>
        <View style={styles.header}>
          {
          FILTER_STATUS.map((status)=>(
            <Filter key={status} status={status} isActive/>
          ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={ITEMS} 
          /** data={[]} --> se colocar assim, ele renderiza somente o nome vazio da lista  */
          keyExtractor={(item) => item.id}
          renderItem={({item})=>(
            <Item 
            /* aqui ele já recebe as props do item, já que no componente item, já tipamos e etc */
              data={item}
              onRemove={()=> (console.log("remove"))}
              onStatus={()=> (console.log("change status"))}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={()=><View style={styles.separator}/>}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={()=> <Text style={styles.empty}>Nenhum item selecionado</Text>}
        />
      </View>
    </View>
  );
}