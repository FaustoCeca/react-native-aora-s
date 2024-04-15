import { View, Text, ScrollView, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { FormField } from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log(form);
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image 
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white font-psemibold mt-10'>
            Welcome Back! Log in to your account
          </Text>

          <FormField 
            label='Email Address'
            value={form.email}
            handleChange={(e) => setForm({...form, email: e})}
            styles='mt-6'
            keyboardType='email-address'
          />

          <FormField 
            label='Password'
            value={form.password}
            handleChange={(e) => setForm({...form, password: e})}
            styles='mt-6'
          />

          <CustomButton 
            title={'Sign In'}
            handlePress={handleSubmit}
            containerStyles={'mt-7'}
            isLoading={loading}
          />

          <View className='flex-row justify-center mt-4'>
            <Text className='text-white font-pmedium'>
              Don't have an account?
            </Text>
            <Link 
              className='text-secondary font-pmedium ml-1'
              href={'/sign-up'}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;