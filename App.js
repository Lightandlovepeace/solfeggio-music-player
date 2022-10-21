import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, ScrollView} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { AudioProvider } from './app/context/AudioProvider';
import AppNavigator from './app/navigation/AppNavigator';
import color from './app/misc/color';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    background:"#123",
    primary:"#222",
    card:'#369',
    text:'#770',
    border:"#369",
    notification:"#000",
    //...DefaultTheme.colors,
    background: color.APP_BG,
  }
}


const Tab = createBottomTabNavigator();

function AudioList () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Player</Text>
    </View>
  );
}

function Player() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Player</Text>
    </View>
  );
}

function Playlist() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Player</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AudioProvider>
        
        <AppNavigator />
        
      </AudioProvider>
    </NavigationContainer>
  );

}