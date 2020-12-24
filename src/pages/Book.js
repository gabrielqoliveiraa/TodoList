import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'




const Book = ({navigation}) => {
    const [title, setitle] = useState()
    const [description, setdescription] = useState()
    const [photo, setphoto] = useState()

    const isValid = () => {
        if(title !== undefined && title !== ''){
            return true;
        } 

        return false;
    }
    
    
    
    const onSave = () =>{
        if (isValid()){
            console.log(`title ${title}`)
        }

    }





  return (
    <View style={styles.containar}>
      <Text style={styles.header}>Inclua seu novo livro</Text>

      <View>
        <TextInput
        style={styles.input}
        placeholder='Título'
        value={title}
        onChangeText={(text)=>{setitle(text)}}
        />

        <TextInput
        style={styles.input}
        placeholder='Descrição'
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(text)=>{setdescription(text)}}
        />
      </View>

       <TouchableOpacity style={styles.camera}> 
        <Icon name='photo-camera' size={18} color='#fff' />
      </TouchableOpacity>



      <TouchableOpacity onPress={onSave} style={([styles.cadastrar, (isValid()) ? '': styles.saveButtonIvalid ])}> 
        <Text style={{fontSize: 16, color: '#ffff', textAlign:'center'}}>Cadastrar</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={() =>{navigation.goBack()}} style={styles.cancel}> 
        <Text style={{fontSize: 16, textAlign:'center', color: '#b2bec3'}}>Cancelar</Text>
      </TouchableOpacity>
    
    
    </View>
  )
}
      
      
      
      

    
    
    


const styles = StyleSheet.create({
  containar: {
      flex: 1, 
      padding: 10, 
      
  },
  header: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    fontSize: 16,
    borderBottomColor: '#00cec9',
    borderBottomWidth: 2,
    marginBottom: 10
  },

  cadastrar: {
    backgroundColor: '#0984e3',
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,

  },
    

  camera: {
    backgroundColor: '#74b9ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },

  cancel: {
    alignSelf: 'center'

  }, 
  saveButtonIvalid:{
      opacity: 0.5,
  }

})
    

    
    








export default Book