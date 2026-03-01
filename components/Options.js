import {View, Text, Modal, Alert, StyleSheet, Button, FlatList} from 'react-native';
import ListInput from './ListInput';


function Options(props){
    function onCancel(){
        props.onCancel();
    }
    

    return (
        <Modal visible={props.visible} backdropColor={'#235'} animationType='fade'>
            <View style={styles.mainContainer}>
                <Text style={styles.text}>History</Text>
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

            </View>
            <Button title='cancel' onPress={onCancel}></Button>
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
        marginTop: 50,
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
})