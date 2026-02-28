import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React from 'react';
import { useState, useRef } from 'react';
import EnterNames from './components/EnterNames';
import RandomGuide from './components/RandomGuide';

// App to chose who is going to guide 


export default function App() {
  const [guide, setGuide] = useState([]);
  const [order, setOrder] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const handleOnCancel = () => {
    setIsModalVisible(false);
    setIsSecondModalVisible(false);
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

  const onAccept = () => {
    Alert.alert(
      'Do you want to accept the current order?',
      [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          onPress: ()=> {
            //setOrder();
            //setGuide([]);
            //console.log(order);
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

        <RandomGuide guide={guide} visible={isSecondModalVisible} onCancel={handleOnCancel} onAccept={onAccept} setOrder={setOrder}/>
        <Text style={styles.buttonText}>Go hiking</Text>
      </Pressable>

      <Pressable onPress={()=> {

      }}
        style={({pressed})=> [
          styles.button,
          pressed && styles.buttonPressed
        ]}
      >
        <Text style={styles.buttonText}>Options</Text>

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