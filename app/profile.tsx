import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Navigue from './navigue';

const Profile = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Profile</Text>
            <Navigue/>
        </View>
    );
}

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
    
});

export default Profile;