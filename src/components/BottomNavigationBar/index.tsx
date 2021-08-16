import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function BottomNavigationBar(props: any) {
    return (
        <View style={styles.bottomNavigationBar}>
            <TouchableOpacity onPress={() => { }}>
                <Ionicons name="home" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
                <Ionicons name="search-outline" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
                <MaterialCommunityIcons name="play-box-outline" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
                <Ionicons name="cart-outline" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
                {/* <Ionicons name="md-person-circle-outline" size={25} color="white" /> */}
                <Image source={{ uri: props.data.image }} style={styles.imageProfile} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomNavigationBar: {
        height: 50,
        backgroundColor: '#000',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imageProfile: {
        height: 25,
        width: 25,
        borderRadius: 1000,
    }
});