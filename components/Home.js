// Import from react
import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    ScrollView,
    FlatList,
    Modal,
    StyleSheet
} from 'react-native';

import { Button } from 'react-native-elements';

// Import from owner project
import { 
    read_all_games,
    delete_game
} from '../api/api';

import Card_UI from '../UI/Card/Card_UI';
import Loading from '../UI/Loading/Loading';

// Component part 
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Main content
const Home = (props) => {
    // Take all value from api
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Use this for deleting
    const [foundId, setFoundId] = useState();

    // Show modal function
    // Show true
    const showModalHandle_True = (id) => {
        setShowModal(true);
        setFoundId(id);
    }

    // Show false
    const showModalHandle_False = () => {
        setShowModal(false);
    }

    // Delete function 
    const deleteGame = (id) => {
        fetch(delete_game + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(game => {
            props.navigation.push('Tab');
            setShowModal(false);
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    };
    
    // Fetching data 
    useEffect(() => {
        fetch(read_all_games, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(game => {
            setData(game);
            setIsLoading(true);
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    }, []);

    // Render data
    const renderData = (game) => {
        return (
            <Card_UI
                game={game}
                showModalHandle_True={showModalHandle_True}
                canShowing={false} 
            />
        );
    };
    
    // Result of component
    return (
        <ScrollView style={{ flex: 1 }}>
            {/* Modal for deleting */}
            <View>
                <Modal 
                    visible={showModal}
                    animationType='fade'
                    transparent={true}
                >
                    <View style={{ backgroundColor: '#C0C0C0', flex: 1 }}>
                        <View style={styles.modal_view}>
                            <View style={styles.modal_main}>
                            <Text style={styles.modal_text}>Are you sure?</Text>
                            <View style={styles.modal_button}>
                                <Button
                                    title="Yes"
                                    buttonStyle={{ 
                                        backgroundColor: 'green',
                                        marginTop: 90,
                                        width: 80,
                                    }}
                                    onPress={() => deleteGame(foundId)}
                                />
                                <Button
                                    title="No"
                                    buttonStyle={{ 
                                        backgroundColor: 'red',
                                        marginLeft: 100,
                                        marginTop: 90,
                                        width: 80,
                                    }}
                                    onPress={() => showModalHandle_False()}
                                />
                            </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            {/* End modal */}

            {
                isLoading ?
                <FlatList
                    data={data}
                    renderItem={({item}) => {
                        return renderData(item)
                    }}
                    keyExtractor={item => `{$item.id}`}     // Warning at here, but it isn't a bug
                /> : <Loading />
            }
        </ScrollView>
    )
};
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// End component

export default Home;

const styles = StyleSheet.create({
    modal_view: {
        flex: 1,
        marginTop: 200,
        marginBottom: 200,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    modal_text: {
        color: 'blue',
        fontSize: 30
    },
    modal_main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_button: {
        flexDirection: 'row',
        margin: 20,
    }
})