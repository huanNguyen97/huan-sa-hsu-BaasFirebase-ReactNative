// Import from react
import React from 'react';
import { 
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native';

const Loading = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator 
                size="large"
                color="#0000ff"
            />
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        justifyContent: 'space-around',
        padding: 10
    }
})