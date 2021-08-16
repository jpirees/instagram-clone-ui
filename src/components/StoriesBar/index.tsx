import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { usersMock } from '../../mocks';
import StoryCard from '../StoryCard';
import UserStoryCard from '../UserStoryCard';

export default function StoriesBar(props: any) {
    const [users, setUsers] = useState(usersMock);

    return (
        <View style={styles.stories}>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <UserStoryCard data={props.data} />
                {users.map(item => <StoryCard data={item} key={item.id} />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    stories: {
        maxHeight: '20%',
        marginTop: 5,
        backgroundColor: '#000',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingRight: 15
    },
});