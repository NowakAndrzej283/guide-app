import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';
import { useState, useRef } from 'react';
import EnterNames from './components/EnterNames';
import RandomGuide from './components/RandomGuide';

// App to chose who is going to guide 


export default function App() {
  const [guide, setGuide] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const handleOnCancel = () => {
    setIsModalVisible(false);
    setIsSecondModalVisible(false);
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

        <EnterNames visible={isModalVisible} onCancel={handleOnCancel} guide={guide} setGuide={setGuide}/>
        <Text style={styles.buttonText}>Enter the names</Text>
      </Pressable>

      <Pressable onPress={() => {
        setIsSecondModalVisible(true);
      }} 
        style={({pressed})=>[
          styles.button,
          pressed && styles.buttonPressed
      ]}>

        <RandomGuide guide={guide} visible={isSecondModalVisible} onCancel={handleOnCancel}/>
        <Text style={styles.buttonText}>Go hiking</Text>
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