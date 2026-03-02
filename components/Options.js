import {View, Text, Modal, Alert, StyleSheet, Button, FlatList, Pressable} from 'react-native';
import ListInput from './ListInput';


function Options(props){
    function onCancel(){
        props.onCancel();
    }
    

    return (
        <Modal visible={props.visible} backdropColor={'#235'} animationType='fade'>
            <View style={styles.mainContainer}>
                <Text style={styles.text}>Guide Order</Text>
                <View style={styles.list}>
                <FlatList
                    style={{flex: 1}}
                    data={props.randomGuide}
                    keyExtractor={(itemData)=> itemData.id}
                    renderItem={(itemData)=>{
                        return <ListInput text={itemData.item.text} id={itemData.item.id}/>;
                    }}
                
                />
                </View>

                <Pressable onPress={onCancel} style={styles.cancelButton}>
                    <Text style={styles.buttonText}>Return</Text>
                </Pressable>
            </View>

        </Modal>
    );
}

export default Options;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        alignItems: 'center',
        padding: 15
    },
    list: {
        flex: 2,
        width: '100%',
        padding: 20
    },
    text: {
        borderRadious: 2,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonList: {
        padding: 10,
        backgroundColor: '#ffdab9',
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        fontSize: 18,
        color: 'black'
    },
    buttonText: {
        color: 'black',
        fontSize: 20
    },  
    cancelButton: {
        backgroundColor: '#dc143c',
        borderRadius: 12,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        margin: 10
    },

})