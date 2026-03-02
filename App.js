import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React from 'react';
import { useState, useRef } from 'react';
import EnterNames from './components/EnterNames';
import RandomGuide from './components/RandomGuide';
import Options from './components/Options';

// App to chose who is going to guide 


export default function App() {
  const [guide, setGuide] = useState([]);
  const [randomGuide, setRandomGuide] = useState([]);
  const [order, setOrder] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);
  const [isOptionsModalVisible, setIsOptionsModalVisible] = useState(false);

  const handleOnCancel = () => {
    setIsModalVisible(false);
    setIsSecondModalVisible(false);
    setIsOptionsModalVisible(false);
  };

  const onEdit = ()=> {
    Alert.alert(
      'Editing the guide list',
      `Do you want to delete the list?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes',
          onPress: ()=> {
            setGuide([]);
            
          }
        }
      ]
    );
  };



  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Find out who is going to start</Text>
      
      <Pressable onPress={() => {
        //adding a modal
        setIsModalVisible(true);
      }} 
        style={({pressed})=>[
          styles.button,
          pressed && styles.buttonPressed
      ]}>

        <EnterNames visible={isModalVisible} onCancel={handleOnCancel} guide={guide} setGuide={setGuide} onEdit={onEdit}/>
        <Text style={styles.buttonText}>Enter the names</Text>
      </Pressable>

      <Pressable onPress={() => {
        setIsSecondModalVisible(true);
      }} 
        style={({pressed})=>[
          styles.button,
          pressed && styles.buttonPressed
      ]}>

        <RandomGuide guide={guide} 
          visible={isSecondModalVisible} 
          onCancel={handleOnCancel}  
          setOrder={setOrder}
          setRandomGuide={setRandomGuide}
          />
        <Text style={styles.buttonText}>Choose the order</Text>
      </Pressable>


  
      <Pressable onPress={()=> {
        //console.log(randomGuide);
        setIsOptionsModalVisible(true);
      }}
        style={({pressed})=> [
          styles.button,
          pressed && styles.buttonPressed
        ]}
      >
        <Options visible={isOptionsModalVisible} randomGuide={randomGuide} onCancel={handleOnCancel}/>
        <Text style={styles.buttonText}>Current List</Text>

      </Pressable>
    </View>
  );
};

const styles= StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#287',
    alignContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 50,
    borderRadious: 2,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#f2fdfd',
    marginTop: 40,
    alignItems: 'center', // setting the text in the middle horizntal
    justifyContent: 'center', // setting the content in the exact middle vertical
    width: '80%',
    height: '20%',
    borderRadius: 20
  },
  buttonPressed: {
    opacity: 0.8
  },
  buttonText: {
    color: 'black',
    fontFamily: 'fantasy',
    fontSize: 22,
    fontWeight: 'bold'
  }
});