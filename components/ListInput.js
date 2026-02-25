import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const ListInput= (props) => {



    return (
        <View style={styles.item}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

export default ListInput;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
    },
    text: {
        fonstSize: 20
    }
});