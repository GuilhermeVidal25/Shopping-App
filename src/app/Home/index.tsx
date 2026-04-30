import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, Alert} from 'react-native';
import {styles} from "./styles"
import { Button } from '@/components/Button';
import { Imput } from '@/components/Imput';
import { Filter } from '@/components/Filter';
import { Item } from '@/components/Item';

import { FilterStatus } from '@/types/FilterStatus';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE ]

export function Home() {
  const [filter, setFilter ] = useState<FilterStatus>();
  const [description, setDescription] = useState("")
  const [items, setItems] = useState <any>([])

  function handleAdd(){
   if (!description.trim()) {
    return Alert.alert("Adicione", "Informe a descrição para adicionar")
   }
   const newItem = {
    id: Math.random().toString(36).substring(2),
    description,
    status: FilterStatus.PENDING,
   } 
  }

  return (
    <View style={styles.container}> 
      <Image source={require("@/assets/logo.png")} style={styles.logo}/>
      
      <View style={styles.form}>
        <Imput 
        placeholder='O que gostaria de comprar? ' 
        onChangeText={setDescription }
        />
        <Button title="Adicionar" onPress={handleAdd}/>
      </View>
    
      <View style={styles.content}>
        <View style={styles.header}>
          {
          FILTER_STATUS.map((status)=>(
            <Filter 
            key={status} 
            status={status} 
            isActive={status === filter}
            onPress={()=> setFilter(status)}
            />
          ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={items} 
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