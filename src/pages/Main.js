import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native'


import Icon from "react-native-vector-icons/MaterialIcons"


const Main = ({navigation}) => {

  const data =[
    {
      id: 1,
      tittle: "Clean code", 
      read: false,
      photo: null
    },
    {
      id:2,
      tittle: "Js",
      read: true,
      photo: null
    }
  ]


  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>LETS DO THIS</Text>

        <TouchableOpacity onPress={()=>{navigation.navigate('Book')}} style={styles.buttonPlus}>
          <Icon name="add" size={20} ></Icon>
        </TouchableOpacity>
      </View>
    

    <FlatList
      data={data}
      renderItem={({item }) => (
        <Text>{item.tittle}</Text>
      )}
      keyExtractor={item => item.id.toString()}
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

  }
    
  
})



    







export default Main