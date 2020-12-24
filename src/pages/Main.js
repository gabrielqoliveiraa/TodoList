import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



import Icon from "react-native-vector-icons/MaterialIcons"


const Main = ({navigation}) => {
  const [books, setbooks] = useState([]) 


  useEffect(() => {
      AsyncStorage.getItem("books").then(data =>{
          const book = JSON.parse(data)
          setbooks(book)
      })
    }, [])  


 const onBookEdit = (bookId) => {
      const book = books.find(item => item.id == bookId)
      navigation.navigate('Book', {book: book, isEdit: true}) 
    }

 const onBookDelete = async (bookId) => {
    const newBooks = books.filter(item => item.id !== bookId)
    await AsyncStorage.setItem("books", JSON.stringify(newBooks))
    setbooks(newBooks)
    }




    
  


  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>LETS DO THIS</Text>

        <TouchableOpacity onPress={()=>{navigation.navigate('Book')}} style={styles.buttonPlus}>
          <Icon name="add" size={20} ></Icon>
        </TouchableOpacity>
      </View>
    

    <FlatList
      data={books}
      renderItem={({item }) => (
        <View style={styles.itemscontainer}>
            <TouchableOpacity style={styles.itembutton}>
                <Text>{item.title}</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => onBookEdit(item.id)}>
                <Icon name="create" size={14} color='#74b9ff'/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onBookDelete(item.id)}>
                <Icon name="delete" size={14} color='#ff7675'/>
            </TouchableOpacity>


        </View>
      )}
      keyExtractor={item => item.id}
    />

    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  toolbox: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  buttonPlus: {
    backgroundColor: '#74b9ff',
    borderRadius: 50,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',

  },

  itemscontainer: {
      flexDirection: 'row'
  },
  itembutton: {
      flex: 1,
  }
    
  
})



    







export default Main