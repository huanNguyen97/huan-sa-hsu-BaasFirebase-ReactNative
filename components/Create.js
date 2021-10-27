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
import { create_game } from '../api/api';

// Component part 
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Main content
const Create = (props) => {
    // Set data default values
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [year_released, setYear_Released] = useState();
    const [price, setPrice] = useState();

    // Create game function
    const createGame = () => {
        fetch(create_game, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                id: null,     // Just only id cannot edit.
                name: name,
                category: category,
                brand: brand,
                year_released: year_released,
                price: price
            })
        })
        .then(resp => resp.json())
        .then(game => {
            props.navigation.push('Tab');
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }

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