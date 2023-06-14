import * as React from 'react';
//import { Text, View } from 'react-native';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from "./src/RTKStore";
import { Provider } from "react-redux";
//import { HomeScreen } from './src/HomeScreen';

import TabScreen from './src/TabScreen';
import CameraScreen from './src/CameraScreen';
import MessagingScreen from './src/RTKMessagingScreen';
import ReactHookFormScreen from './src/ReactHookFormScreen';

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

function MessagingScreen1() {

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
      <Text>ReactHookForm!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

/*export default function App() {

  //load app and add data to redux


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Photos" component={HomeScreen} />
        <Tab.Screen name="Messages" component={SettingsScreen} />
        <Tab.Screen name="Map" component={SettingsScreen} />
        <Tab.Screen name="Add - plus button" component={SettingsScreen} />
        <Tab.Screen name="Create Group" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/



function HomeScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to tab screen"
        onPress={() => navigation.navigate('TabScreen')}
      />
      <Button
        title="Go to camera screen"
        onPress={() => navigation.navigate('CameraScreen')}
      />
      <Button
        title="Go to messaging screen"
        onPress={() => navigation.navigate('MessagingScreen')}
      />
       <Button
        title="Go to react hook form screen"
        onPress={() => navigation.navigate('ReactHookFormScreen')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen1} />
            <Stack.Screen name="TabScreen" component={TabScreen} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            <Stack.Screen name="MessagingScreen" component={MessagingScreen} />
            <Stack.Screen name="ReactHookFormScreen" component={ReactHookFormScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}