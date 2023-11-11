import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dashboard from "../screens/dashboard/dashboard";
import MapScreen from "../screens/map/mapview";
import Colors from "../theme/colors";
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install this package
import Trending from "../screens/trending/trending";



const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  let { Navigator, Screen } = Tab;
  return (
    <Navigator
      activeColor={Colors.primary}
      inactiveColor={Colors.gray}
      barStyle={{ backgroundColor: Colors.white }}
    >
      <Screen
        name="home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color,focused }: any) => (
            focused ?
              <Image source={require("../../assets/images/bottombar/ICON.png")} style={{ height: 30, width: 30 }} />
              :
              <Image source={require("../../assets/images/bottombar/home-in.png")} style={{ height: 20, width: 20 }} />
          ),
        } as never}
      />
      <Screen
        name="cards"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Cards",
          tabBarIcon: ({ color, focused }: any) => (
            focused ?
              <Image source={require("../../assets/images/bottombar/card.png")} style={{ height: 30, width: 30 }} />
              :
              <Image source={require("../../assets/images/bottombar/card.png")} style={{ height: 30, width: 30 }} />
          ),
        } as never}
      />
     
      <Screen
        name="loans"
        component={Trending}
        options={{
          headerShown: false,
          tabBarLabel: "Loans",
          tabBarIcon: ({ color, focused }: any) => (
            focused ?
              <Image source={require("../../assets/images/bottombar/loans.png")} style={{ height: 30, width: 30 }} />
              :
              <Image source={require("../../assets/images/bottombar/loans.png")} style={{ height: 30, width: 30 }} />
          ),
        } as never}
      />
     
      <Screen
        name="cells"
        component={Trending}
        options={{
          headerShown: false,
          tabBarLabel: "Cells",
          tabBarIcon: ({ color, focused }: any) => (
            focused ?
              <Image source={require("../../assets/images/bottombar/cells.png")} style={{ height: 30, width: 30 }} />
              :
              <Image source={require("../../assets/images/bottombar/cells.png")} style={{ height: 30, width: 30 }} />
          ),
        } as never}
      />
      <Screen
        name="profile"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color, focused }: any) => (
              <Image source={require("../../assets/images/bottombar/profile.png")} style={{ height: 30, width: 30 }} />
          ),
        } as never}
      />
     
    </Navigator>
  );
}


export default BottomTab;
