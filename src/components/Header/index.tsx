import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { logo } from '../../images';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={logo}
                style={styles.logo}
            />

            <View style={styles.icons}>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="add-circle-outline" size={28} color="white" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="heart-outline" size={28} color="white" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="chatbubble-ellipses-outline" size={28} color="white" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#000',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    logo: {
        top: 45,
        tintColor: '#fff',
        alignSelf: 'flex-start'
    },

    icons: {
        top: 15,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },

    icon: {
        marginLeft: 15,
    },
});