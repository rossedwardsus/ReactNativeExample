import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MessagingScreen() {

  var messages = [{id: 1, id: 2}];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messaging!</Text>
      {
        messages.map(message => <>message.id</>)

      }

    </View>
  );
}

function AddsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add photo!</Text>
      <Text>Add message!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  //load app and add data to redux


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Photos" component={HomeScreen} />
        <Tab.Screen name="Messages" component={SettingsScreen} />
        <Tab.Screen name="Add - plus button" component={SettingsScreen} />
        <Tab.Screen name="Create Group" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}