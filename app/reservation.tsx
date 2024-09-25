import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Navigue from './navigue'

const Reservation = () => {
    const params = useLocalSearchParams();  
    console.log(params);

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Reservation</Text>
            <Navigue/>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f8f8f8',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 18,
        color: '#333',
    },
});

export default Reservation;