import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { BottomNavigationBar, Feed, Header, StoriesBar } from './src/components';
import { userMock } from './src/mocks';

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUser();
  }, [])

  async function loadUser() {
    await userMock.then(({ id, name, avatar_url }) => setUser({ id, name, image: avatar_url }))
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar style="light" />

      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <StoriesBar data={user} />
        <Feed />
      </ScrollView>

      <BottomNavigationBar data={user} />
    </SafeAreaView >
  );
}