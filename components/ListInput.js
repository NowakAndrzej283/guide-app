import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const ListInput = (props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

export default ListInput;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#ffdab9',
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        width: '100%',
    },
    text: {
        fonstSize: 25
    }
});