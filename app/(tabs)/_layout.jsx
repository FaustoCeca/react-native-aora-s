import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View
      className='flex gap-2 items-center justify-center'
    >
      <Image 
        source={ icon }
        resizeMode='contain'
        tintColor={color}
        className='w-5 h-5'
      />
      <Text
        className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular'}`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  )
} 

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffa001',
          tabBarInactiveTintColor: '#cdcde0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 80
          }
        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name='Home'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.bookmark}
                color={color}
                name='Bookmark'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.plus}
                color={color}
                name='Create'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name='Profile'
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout;