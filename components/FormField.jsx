import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants';

export const FormField = ({label, value, handleChange, styles, keyboardType}) => {
const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${styles}`}>
      <Text
        className='text-base text-gray-100 font-pmedium'
      >
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        className='w-full h-12 px-4 bg-gray-800 rounded-2xl text-white focus:border-secondary border-2 border-gray-800 border-solid items-center'
        placeholder={label}
        placeholderTextColor={'#7b7b8b'}
        keyboardType={keyboardType}
        secureTextEntry={label === 'Password' && !showPassword}
      />

      {label === 'Password' && (
        <TouchableOpacity 
          className='absolute right-4 top-9'
          onPress={() => setshowPassword(!showPassword)}
        >
          <Image 
            source={showPassword ? icons.eye : icons.eyeHide}
            className='w-6 h-6'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  )
}
