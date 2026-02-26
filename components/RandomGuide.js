import {View, StyleSheet} from 'react-native';

const RandomNumber = (props) => {

    return(
        <Modal visible={props.visible}>
            <View style={styles.mainContainer}> 
                <Text>{}</Text>
            </View>     
        </Modal>
    );

};

export default RandomNumber;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }

});