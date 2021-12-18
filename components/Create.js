// Import from react
import React, { useState } from 'react';

import {
    Text,
    View,
    ScrollView
} from 'react-native';

import {
    Card,
    Button,
    Input
} from 'react-native-elements';

// Import owner
import firebaseDB from '../firebase/firebase';

const initialState = {
    id: "",
    name: "",
    category: "",
    brand: "",
    year_released: "",
    price: ""
};

// Component part 
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Main content
const Create = (props) => {
    // Set data default values
    const [state, setState] = useState(initialState);

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [year_released, setYear_Released] = useState();
    const [price, setPrice] = useState();

    // Create game function
    const createGame = () => {
        if (!name || !category || !brand || !year_released || !price) {
            console.log("Some things was nil");     // Just for testing
        } else {
            // Add new data
            state.name = name;
            state.category = category;
            state.brand = brand;
            state.year_released = year_released;
            state.price = price;

            // Push in firebase
            firebaseDB.child("games").once("value", snapshot => {
                // Take length of child "games"
                let length = parseInt(snapshot.numChildren(), 10);

                if (length === 0) {
                    state.id = 1;
                } else {
                    state.id = length + 1;
                }
                
            }).then(item => {
                firebaseDB.child("games/g" + state.id).set(state);
            }).catch(error => {
                console.log(error);     // Just for testing
            })
        }

        props.navigation.push('Tab');
    };

    // Render template
    return (
        <ScrollView>
            <Card>
                <Card.Title >CREATE NEW GAME</Card.Title> 
                <Text>{/* empty */}</Text>
                <Text>{/* empty */}</Text>
                <Input
                    label="Name"
                    labelStyle={{
                        color: '#B22222',
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
                        color: '#B22222',
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
                        color: '#B22222',
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
                        color: '#B22222',
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
                        color: '#B22222',
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
                    title="Create"
                    buttonStyle={{
                        backgroundColor: "#DC143C"
                    }}
                    onPress={() => {
                        createGame()
                    }} 
                />
            </Card> 
        </ScrollView>
    );
};
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// End component

export default Create;