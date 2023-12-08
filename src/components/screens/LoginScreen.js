import React, { useState } from 'react';
import { View, Image, ToastAndroid } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import fetchServices from '../services/fetchServices';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleLogin = async () => {
    try{
      setLoading(true);
      if(email === ""){
        setErrors({ email: true });
        return false;
      }

      if(password === ""){
        setErrors({ password: true });
        return false;
      }

      const url = "http://192.168.137.1/api/v1/login";
      const data = {
        email,
        password,
      };

      const result = await fetchServices.postData(url, data);
      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate('Home');
      }
    } catch (e) {
      showToast(e.toString());
    } finally {
      setLoading(false);
    }

    setEmail("");
    setPassword("");
  };

  const handleSignUp = () => {
    console.log('Sign up with email:', email, 'and password:', password);


    setEmail("");
    setPassword("");

    // Navigate to the Signup screen
    navigation.navigate('Signup');
  };

  const handleAccountRecovery = () => {
    console.log('Recover account for email:', email);


    setEmail("");
    setPassword("");

    // Navigate to the Account Recovery Screen
    navigation.navigate('AccountRecovery');
  };

  return (
    <View style={{ 
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 30, 
      backgroundColor: '#1DA1F2'
    }}>

        <Image
          source={require('../PngImages/TwitterLogo.png')}
          style={{ 
            width: 100, 
            height: 100, 
            marginBottom: 20,
            alignSelf: 'center'
          }}
        />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="white"
        underlineColor='white'
        textColor='white'
        error={errors?.email}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisibility}
        placeholder="Password"
        placeholderTextColor="white"
        underlineColor='white'
        textColor='white'
        error={errors?.password}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
        right={
          <TextInput.Icon
            icon={passwordVisibility ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisibility(!passwordVisibility)}
            color='white'
          />
        }
      />

      <Button
        mode="contained"
        disabled={loading}
        loading={loading}
        onPress={handleLogin}
        style={{ marginBottom: 5, backgroundColor: 'white' }}
        labelStyle={{ color: '#1DA1F2' }}
      >
        Login
      </Button>

      <Button
        mode="contained"
        disabled={loading}
        onPress={handleSignUp}
        style={{
          marginBottom: 20,
          marginTop: 3,
          backgroundColor: '#1DA1F2',
          borderColor: 'white',
          borderWidth: 1
        }}
        labelStyle={{ color: 'white' }}
      >
        Sign Up
      </Button>

      <Button
        mode="text"
        disabled={loading}
        onPress={handleAccountRecovery}
        labelStyle={{ color: 'white' }}
      >
        Forgot Password? Recover Account
      </Button>
    </View>
  );
};

export default LoginScreen;
