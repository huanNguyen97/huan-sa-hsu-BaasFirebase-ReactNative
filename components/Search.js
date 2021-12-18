// Import from react
import React, { useState, useEffect } from 'react';

import {
    View, 
    Text,
    FlatList,
    ScrollView
} from 'react-native'

import { 
    SearchBar, 
    Input,
    Button 
} from 'react-native-elements';

// Import owner
import { search_games } from '../api/api';
import firebaseDB from '../firebase/firebase';

import Card_UI from '../UI/Card/Card_UI';
import Loading from '../UI/Loading/Loading';

// Component part 
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Main content
const Search = (props) => {
    // Data at first
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState();
    // const [isLoading, setIsLoading] = useState();
    // Use this for deleting
    const [foundId, setFoundId] = useState();

    // // Fetching data 
    // const searchGameHandle = () => {
    //     fetch(search_games, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json' 
    //         },
    //         body: JSON.stringify({
    //             search_text: searchText
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(game => {
    //         setData(game);
    //         console.log(game);
    //     })
    //     .catch(() => {
    //         console.log("Server not found");    // For checking. Not alerting on mobile screen
    //     })
    // }

    // Fetching data 
    const searchGameHandle = () => {
        firebaseDB.child("games").once("value", snapshot => {
            console.log(searchText.toLowerCase());
            const games_list = [];

            snapshot.forEach(child => {
                const game = child.val().name;
                if (game.toLowerCase().includes(searchText.toLowerCase())) {
                    games_list.push(child.val())
                }
            })
            setData(games_list);
        })
    };

    // Show true
    const showModalHandle_True = (id) => {
        setShowModal(true);
        setFoundId(id);
    }

    // Render data
    const renderData = (game) => {
        return (
            <Card_UI
                game={game}
                showModalHandle_True={showModalHandle_True} 
                canShowing={true}
            />
        );
    };

    return (
        <ScrollView>
            <View>
                <Input
                    onChangeText={text => setSearchText(text)} 
                />
                <Button 
                    title="Search"
                    onPress={() => searchGameHandle()}
                />
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return renderData(item)
                }}
                keyExtractor={item => `{$item.id}`}     // Warning at here, but it isn't a bug
            />
        </ScrollView>
    )
};
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// End component

export default Search;