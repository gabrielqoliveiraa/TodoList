import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



import Icon from 'react-native-vector-icons/MaterialIcons'




const Book = ({navigation}) => {

    const book = navigation.getParam('book', {
        title: '',
        description: '',
        read: false,
        photo: ''
    })


    const isEdit = navigation.getParam('isEdit', false);

    const [books, setbooks] = useState([])
    const [title, setitle] = useState(book.title)
    const [description, setdescription] = useState(book.description)
    const [read, setread] = useState(book.read)
    const [photo, setphoto] = useState(book.photo)


    useEffect(() => {
        AsyncStorage.getItem("books").then(data =>{
            const book = JSON.parse(data)
            setbooks(book)
        })
    }, [])  

    
    
        

    

    const isValid = () => {
        if(title !== undefined && title !== ''){
            return true;
        } 
        return false;
    }

    
    
    
    const onSave = async () => {
        if (isValid()){

            if (isEdit) {
                let newBooks = books

                newBooks.map((item) => {
                    if(item.id == book.id){
                        item.title = title
                        item.description = description
                        item.read = read;
                        item.photo = photo
                    }
                    return item
                });
                console.log(books)
                console.log(newBooks)

                await AsyncStorage.setItem("books", JSON.stringify(newBooks));


            } else {
                const id = (books.length + 1).toString()
                const data = {
                    id,
                    title,
                    description, 
                    photo,
                }   

                books.push(data)
                await AsyncStorage.setItem("books", JSON.stringify(books));
                
            }

            navigation.goBack();
            
            

        } else {
            console.log('invalido')
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
        <Text style={{fontSize: 16, color: '#ffff', textAlign:'center'}}>{isEdit ? 'Atualizar':'Cadastrar'}</Text>
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