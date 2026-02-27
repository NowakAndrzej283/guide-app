import {View, StyleSheet, Modal, FlatList, Pressable, Text} from 'react-native';
import { useState, useEffect } from 'react';

function RandomNumber(props){
    const [randomGuide, setRandomGuide] = useState([]);

    // when we want to quit the modal
    const onCancel = () => {
        props.onCancel();
    };

    // random generating function
    const shuffleArray = (arr) => {
        const shuffled = [...arr];

        for(let i = shuffled.length - 1;i > 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        }
        return shuffled;
    };

    return(
        <Modal visible={props.visible} animationType="fade" backdropColor={'#235'}>
            <View style={styles.mainContainer}> 
                <Pressable 
                    style={styles.button} 
                    onPress={() => {
                        setRandomGuide(shuffleArray(props.guide));
                        console.log(randomGuide);
                    }}
                >
                <Text style={styles.text}>Radomly Select</Text>
                </Pressable>
                <View style={styles.list}>
                <FlatList
                    style={{flex: 1}}
                    data={randomGuide}
                    keyExtractor={(item)=> item.id}
                    renderItem={({item, index})=> {
                        return <Text style={styles.buttonList}>{item.text}</Text>
                    }}
                    
                />
                </View>

                <Pressable onPress={onCancel} style={styles.cancelButton}>
                    <Text style={styles.text}>Cancel</Text>
                </Pressable>
                
            </View>     
        </Modal>
    );

};

export default RandomNumber;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
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
        height: '10%',
        borderRadius: 20,
        width: '90%'
      },
    buttonPressed: {
        opacity: 0.8
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    buttonList: {
        padding: 10,
        backgroundColor: '#ffdab9',
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        fontSize: 18
    },
    cancelButton: {
        backgroundColor: '#dc143c',
        borderRadius: 12,
        padding: 10,
        width: '80%',
        alignItems: 'center'
    }
    
});