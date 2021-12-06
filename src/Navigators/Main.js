import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'fa-home'
              : 'fa-home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          iconName="home"
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}

    >
      <Tab.Screen name="Home" component={ExampleContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
