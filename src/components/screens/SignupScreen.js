import React, { useState } from 'react';
import { View, Image, ToastAndroid } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import fetchServices from '../services/fetchServices';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleSignup = async () => {
    console.log('Signup with:', {
      name,
      email,
      password,
    });
    
    try{
      setLoading(true);

      if(name === "" || email === "" || password === "" || repassword === "") {
        showToast("Please input required data");
        setErrors(true);
        return false;
      }

      if(password !== repassword) {
        showToast("Password doesn't match");
        setErrors(true);
        return false;
      }

      const url = "http://192.168.137.1/api/v1/register";
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };

      const result = await fetchServices.postData(url, data);
      console.log("Response:", result);
      if (result?.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate('Home');
      }
    } catch (e) {
      showToast(e.toString());
    } finally {
      setLoading(false);
    }

    navigation.navigate('Login');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#1DA1F2',
      }}
    >

        <Image
          source={require('../PngImages/TwitterLogo.png')}
          style={{ 
            width: 100, 
            height: 100, 
            marginBottom: 20,
            alignSelf: 'center'
          }}
        />

      <Text 
        variant="headlineMedium" 
        style={{ 
          color: 'white', 
          textAlign: 'center',
          marginBottom: 10
        }}
      >
          Fill out the form
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
        placeholderTextColor="white"
        underlineColor="white"
        textColor="white"
        error={errors}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="white"
        underlineColor="white"
        textColor="white"
        error={errors}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisibility}
        placeholder="Password"
        placeholderTextColor="white"
        underlineColor="white"
        textColor="white"
        error={errors}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
        right={
          <TextInput.Icon
            icon={passwordVisibility ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisibility(!passwordVisibility)}
            color="white"
          />
        }
      />

      <TextInput
        value={repassword}
        onChangeText={setRepassword}
        secureTextEntry={!passwordVisibility}
        placeholder="Re-type Password"
        placeholderTextColor="white"
        underlineColor="white"
        textColor="white"
        error={errors}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
        right={
          <TextInput.Icon
            icon={passwordVisibility ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisibility(!passwordVisibility)}
            color="white"
          />
        }
      />

      <Button
        mode="contained"
        disabled={loading}
        loading={loading}
        onPress={handleSignup}
        style={{ marginBottom: 10, backgroundColor: 'white' }}
        labelStyle={{ color: '#1DA1F2' }}
      >
        Signup
      </Button>

      <Button
        mode="text"
        disabled={loading}
        onPress={() => navigation.navigate('Login')}
        style={{ alignSelf: 'center' }}
        labelStyle={{ color: 'white' }}
      >
        Go Back to Login
      </Button>
    </View>
  );
};

export default SignupScreen;
