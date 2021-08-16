import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PostCard(props: any) {
    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.postHeaderProfile}>
                        <Image key={props.data.id} source={{ uri: props.data.user.image }} style={styles.postHeaderProfileImage} />
                        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.postHeaderProfileTitle}>{props.data.user.name}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="ellipsis-vertical" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.postContent}>
                <Image
                    source={{ uri: props.data.content }}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>

            <View style={styles.postBottom}>
                <View style={styles.postBottomActions}>
                    <TouchableOpacity onPress={() => { }}>
                        {
                            props.data.isLiked ?
                                <Ionicons name="heart" size={25} color="red" style={styles.postBottomActionsIcon} /> :
                                <Ionicons name="heart-outline" size={25} color="white" style={styles.postBottomActionsIcon} />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="chatbubble-outline" size={25} color="white" style={styles.postBottomActionsIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="paper-plane-outline" size={25} color="white" style={styles.postBottomActionsIcon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => {

                }}>

                    {
                        props.data.isSaved ?
                            <Ionicons name="bookmark" size={25} color="white" style={styles.postBottomActionsIcon} /> :
                            <Ionicons name="bookmark-outline" size={25} color="white" style={styles.postBottomActionsIcon} />
                    }

                </TouchableOpacity>

            </View>

            <View style={styles.postComments}>
                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.postComment}>
                    <Text style={styles.postCommentUser}>{props.data.user.name} </Text>
                    {props.data.description}
                </Text>

                <TouchableOpacity onPress={() => { }}>
                    <Text style={{ color: '#555', fontSize: 13, marginVertical: 2, }}>Ver todos os {props.data.comments} comentários</Text>
                </TouchableOpacity>

                <Text style={{ color: '#555', fontSize: 12 }}>{props.data.postedTime}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        height: "auto",
        width: '100%',
    },

    postHeader: {
        height: 50,
        width: 'auto',
        backgroundColor: '#000',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    postHeaderProfile: {
        flexDirection: 'row',
    },

    postHeaderProfileImage: {
        height: 30,
        width: 30,
        borderRadius: 100,
    },

    postHeaderProfileTitle: {
        marginLeft: 10,
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },

    postContent: {
        height: 400,
        width: 'auto',
        backgroundColor: '#333',
    },

    postBottom: {
        height: 40,
        backgroundColor: '#000',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    postBottomActions: {
        flexDirection: 'row',
    },

    postBottomActionsIcon: {
        marginHorizontal: 7,
    },

    postComments: {
        height: 'auto',
        width: 'auto',
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingBottom: 5,
    },

    postComment: {
        color: '#fff',
    },

    postCommentUser: {
        fontWeight: 'bold',
        color: '#fff',
    },
});
