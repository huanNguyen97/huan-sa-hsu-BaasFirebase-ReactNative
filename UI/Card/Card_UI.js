// Import from react
import React from 'react';
import { 
    Text,
    View,
    StyleSheet
} from 'react-native'; 

import {
    Card,
    Button
} from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

// UI part 
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Main content
const Card_UI = (props) => {
    // Navigation for passing component in navigator because Card_UI isn't a navigator
    const navigation = useNavigation();

    return (
        <Card style={styles.card}>
            <Card.Title style={styles.card_title}>{props.game.name}</Card.Title> 
            <Card.Divider />
            <Text style={styles.card_content}>{props.game.brand}</Text>
            <Text></Text>
            <View style={styles.card_view}>
                <Button
                    title="Edit"
                    style={styles.card_button_edit}
                    buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 13 }}
                    icon={{
                        name: 'pencil',
                        type: 'font-awesome',
                        size: 18
                    }}
                    onPress={() => {
                        navigation.navigate('Edit', {
                            id: props.game.id,
                            name: props.game.name,
                            category: props.game.category,
                            brand: props.game.brand,
                            year_released: props.game.year_released,
                            price: props.game.price
                        })
                    }}

                />
                <Text>{/* empty */}</Text>
                <Button
                    title="View"
                    titleStyle={{ fontWeight: 'bold', fontSize: 13 }}
                    icon={{
                        name: 'info-circle',
                        type: 'font-awesome',
                        size: 18
                    }}
                    onPress={() => {
                        navigation.navigate('Detail', {
                            id: props.game.id
                        })
                    }}
                />
                <Text>{/* empty */}</Text>
                <Button
                    title="Delete"
                    disabled={props.canShowing}
                    style={styles.card_button_delete}
                    buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 13 }}
                    icon={{
                        name: 'trash',
                        type: 'font-awesome',
                        size: 18
                    }}
                    onPress={() => {
                        props.showModalHandle_True(props.game.id)
                    }}
                />
            </View>
        </Card>
    );
};
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// End UI

export default Card_UI;

const styles = StyleSheet.create({
    card: {
        padding: 100
    },
    card_title: {
        fontSize: 25
    },  
    card_content: {
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center'
    },
    card_button_edit: {
        marginRight: 70
    },
    card_button_delete: {
        marginLeft: 50
    },
    card_view: {
        flexDirection: 'row'
    }
})

