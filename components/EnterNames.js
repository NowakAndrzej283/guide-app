import {Modal, View, Text, StyleSheet, Pressable, FlatList, TextInput, ScrollView, Alert} from 'react-native';
import { useState } from 'react';
import ListInput from './ListInput';

function EnterNames(props){
    const [text, onChangeText] = useState('');
    //const [isDisabled, setIsDisabled] = useState(false);
    const isDisabled = text.length === 0;


    // when we want to quit the modal
    const onCancel = () => {
        props.onCancel();
    };

    // setting the written value to the quide array
    const handleAddGuide = () => {
        props.setGuide(prev => [...prev, {text: text, id: Math.floor(Math.random()* 1000000)}]);
        onChangeText('');
        console.log(props.guide);
    };



    return(
        <>
        <Modal animationType="fade" backdropColor={'#235'} visible={props.visible}>
            <View style={styles.mainContainer}>

                <View>
                    <Text style={styles.header}>Enter the names</Text>
                </View>

                <View style={styles.addGuide}>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={onChangeText}
                        placeholder='ex. Jan Kowalski'
                    />
                    <Pressable 
                        onPress={handleAddGuide}
                        disabled={isDisabled}
                    
                        style={({pressed}) => [
                            styles.buttonSubmit,
                            isDisabled && styles.buttonDisabled,
                            pressed && styles.buttonPressed
                        ]}>
                        <Text>Add</Text>
                    </Pressable>
                </View>

                <View style={styles.list}>    
                    <FlatList 
                        style={{flex: 1}}
                        data={props.guide}
                        renderItem={(itemData)=>{
                            return <ListInput text={itemData.item.text} id={itemData.item.id}/>;
                        }}
                        keyExtractor={(itemData)=> {
                            return itemData.id;
                        }}
                
                
                    />
                </View>    

                <Pressable onPress={onCancel} style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
            </View>
        </Modal>
        </>
    );

}

export default EnterNames;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        alignItems: 'center',
        padding: 10
    },
    list: {
        flex: 2,
        width: '100%',
        padding: 20
    },
    button: {
        backgroundColor: '#f2fdfd',
        marginTop: 40,
        alignItems: 'center', // setting the text in the middle horizntal
        justifyContent: 'center', // setting the content in the exact middle vertical
        width: '80%',
        height: '10%',
        borderRadius: 20,
      },
      buttonPressed: {
        opacity: 0.8
      },
      buttonText: {
        color: 'black',
        fontFamily: 'Cochin',
        fontWeight: 25,
        fontSize: 20,
      },
      buttonSubmit: {
        flex: 1,
        backgroundColor: '#3cb666',
        borderRadius: 14,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        margin: 12,
        borderWidth: 1
      },
      buttonDisabled: {
        backgroundColor: '#2e8b57'
      },    
      header: {
        color: 'white',
        fontFamily: 'Cochin',
        fontWeight: 25,
        fontSize: 20
      },
      input: {
        height: 40,
        flex: 3,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
      },
      addGuide: {
        flexDirection: "row",
        padding: 10,
      }
      

})