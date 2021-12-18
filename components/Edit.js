// Import from react
import React, { useState } from 'react';

import {
    Text,
    ScrollView
} from 'react-native';

import {
    Card,
    Button,
    Input
} from 'react-native-elements';

import { useRoute } from '@react-navigation/native';

// Import from owner project
import { update_game } from '../api/api';
import firebaseDB from '../firebase/firebase';

// Component part 
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Main content
const Edit = (props) => {
    // Take params from navigator
    const route = useRoute();

    // Set data default values
    const [data, setData] = useState({});

    const [name, setName] = useState(route.params.name);
    const [category, setCategory] = useState(route.params.category);
    const [brand, setBrand] = useState(route.params.brand);
    const [year_released, setYear_Released] = useState(route.params.year_released.toString());
    const [price, setPrice] = useState(route.params.price.toString());

    // // Update function
    // const updateData = () => {
    //     fetch(update_game + route.params.id, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json' 
    //         },
    //         body: JSON.stringify({
    //             id: route.params.id,     // Just only id cannot edit.
    //             name: name,
    //             category: category,
    //             brand: brand,
    //             year_released: year_released,
    //             price: price
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(game => {
    //         props.navigation.push('Tab');
    //     })
    //     .catch(() => {
    //         console.log("Server not found");    // For checking. Not alerting on mobile screen
    //     })
    // }

    // update function
    const updateData = () => {
        firebaseDB.child("games/g" + route.params.id).once("value", snapshot => {
            data.id = route.params.id;
            data.name = name;
            data.category = category;
            data.brand = brand;
            data.year_released = year_released;
            data.price = price;
        }).then(item => {
            firebaseDB.child("games/g" + data.id).set(data);
        }).catch(error => {
            console.log(error);     // Just for testing
        });

        props.navigation.push('Tab');
    };

    return (
        <ScrollView>
            <Card>
                <Card.Title >FORM EDITTING</Card.Title> 
                <Text>{/* empty */}</Text>
                <Text>{/* empty */}</Text>
                <Input
                    label="Name"
                    labelStyle={{
                        color: 'green',
                        fontWeight: 'normal'
                    }}
                    inputStyle={{
                        fontWeight: 'bold'
                    }}
                    value={name}
                    rightIcon={{
                        type: 'font-awesome-5',
                        name: 'chess-knight'
                    }}
                    onChangeText={text => setName(text)}
                />
                <Text>{/* empty */}</Text>
                <Input
                    label="Category"
                    labelStyle={{
                        color: 'green',
                        fontWeight: 'normal'
                    }}
                    inputStyle={{
                        fontWeight: 'bold'
                    }}
                    value={category}
                    rightIcon={{
                        type: 'font-awesome-5',
                        name: 'gamepad'
                    }}
                    onChangeText={text => setCategory(text)}
                />
                <Text>{/* empty */}</Text>
                <Input
                    label="Brand"
                    labelStyle={{
                        color: 'green',
                        fontWeight: 'normal'
                    }}
                    inputStyle={{
                        fontWeight: 'bold'
                    }}
                    value={brand}
                    rightIcon={{
                        type: 'font-awesome-5',
                        name: 'copyright'
                    }}
                    onChangeText={text => setBrand(text)}
                />
                <Text>{/* empty */}</Text>
                <Input
                    label="Year released"
                    labelStyle={{
                        color: 'green',
                        fontWeight: 'normal'
                    }}
                    inputStyle={{
                        fontWeight: 'bold'
                    }}
                    value={year_released}
                    rightIcon={{
                        type: 'font-awesome-5',
                        name: 'list-ol'
                    }}
                    onChangeText={text => setYear_Released(text)}
                />
                <Text>{/* empty */}</Text>
                <Input
                    label="Price"
                    value={price}
                    labelStyle={{
                        color: 'green',
                        fontWeight: 'normal'
                    }}
                    inputStyle={{
                        fontWeight: 'bold'
                    }}
                    rightIcon={{
                        type: 'font-awesome-5',
                        name: 'money-check'
                    }}
                    onChangeText={text => setPrice(text)}
                />
                <Button
                    title="Save"
                    buttonStyle={{
                        backgroundColor: "#32CD32"
                    }}
                    onPress={() => {
                        updateData()
                    }} 
                />
            </Card> 
        </ScrollView>
    );
};
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// End component

export default Edit;