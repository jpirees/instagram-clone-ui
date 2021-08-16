import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StoryCard(props: any) {
    return (
        <View style={styles.storyCard}>
            <TouchableOpacity
                style={styles.buttonStory}
                onPress={() => { }}
            >
                <Image source={{ uri: props.data.image }} style={styles.story} />
            </TouchableOpacity>
            <Text ellipsizeMode='tail' numberOfLines={1} style={styles.storyName}>{props.data.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    storyCard: {
        width: 85,
    },

    buttonStory: {
        height: 80,
        width: 80,
        marginLeft: 10,
        borderRadius: 100,
        borderWidth: 2,
        backgroundColor: '#444',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    story: {
        alignSelf: 'center',
        height: 70,
        width: 70,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#000',
    },

    storyName: {
        marginLeft: 10,
        alignSelf: 'center',
        color: '#fff'
    }

});