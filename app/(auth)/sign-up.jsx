import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormField } from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { useState } from 'react';
import { images } from '../../constants';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    createUser();
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
            Create an account
          </Text>

          <FormField 
            label='Username'
            value={form.username}
            handleChange={(e) => setForm({...form, username: e})}
            styles='mt-6'
          />

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
            title={'Sign Up'}
            handlePress={handleSubmit}
            containerStyles={'mt-7'}
            isLoading={loading}
          />

          <View className='flex-row justify-center mt-4'>
            <Text className='text-white font-pmedium'>
              Already have an account?
            </Text>
            <Link 
              className='text-secondary font-pmedium ml-1'
              href={'/sign-in'}
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp;