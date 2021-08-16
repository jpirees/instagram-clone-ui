import React, { useState } from 'react';
import { View } from 'react-native';
import { feedMock } from '../../mocks';
import PostCard from '../PostCard';


export default function Feed() {
    const [posts, setPosts] = useState(feedMock);

    return (
        <View style={{ flex: 1, marginTop: 5 }}>
            {posts.map(item => <PostCard data={item} key={item.id} />)}
        </View>
    );
}