import * as React from 'react';
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


import HomeScreen from './screens/home';
import travelScreen from './screens/travel';
import SosScreen from './screens/sos';
import videosScreen from './screens/videos';
import accountScreen from './screens/account'

/*function accountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}*/

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />             
   </HomeStack.Navigator>
  );
}

const SosStack = createStackNavigator();
function SosStackScreen() {
 return (
   <SosStack.Navigator>
    <SosStack.Screen name="SOS" component={SosScreen} />             
   </SosStack.Navigator>
  );
}
const VideosStack = createStackNavigator();
function videosStackScreen() {
 return (
   <VideosStack.Navigator>
    <VideosStack.Screen name="Videos" component={videosScreen} />             
   </VideosStack.Navigator>
  );
}
const TravelStack = createStackNavigator();
function travelStackScreen() {
 return (
   <TravelStack.Navigator>
    <TravelStack.Screen name="Travel" component={travelScreen} />             
   </TravelStack.Navigator>
  );
}
const AccountStack = createStackNavigator();
function accountStackScreen() {
 return (
   <AccountStack.Navigator>
    <AccountStack.Screen name="Account" component={accountScreen} />             
   </AccountStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons name="md-home-outline" size={24} color="tintColor" />
              ); }
              else if (route.name === 'SOS') {
                return (
                  <FontAwesome5 name="user-friends" size={24} color="tintColor" />
              );}
              else if (route.name === 'Videos') {
                return (
                  <Ionicons name="videocam-outline"  size={24} color="tintColor"/>
              );}
              else if (route.name === 'Travel') {
                return (
                  <Ionicons name="airplane-outline" size={24} color="tintColor" />
              );}
              else if (route.name === 'Account') {
                return (
                  <FontAwesome5 name="user" size={24} color="tintColor" />
              );}

        }})}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="SOS" component={SosStackScreen} />
        <Tab.Screen name="Videos" component={videosStackScreen} />
        <Tab.Screen name="Travel" component={travelStackScreen} />
        <Tab.Screen name="Account" component={accountStackScreen} />
      </Tab.Navigator>
      <StatusBar style="dark"/>
    </NavigationContainer> 
  );
}