import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleLogin = () => {
    console.log('Login with email:', email, 'and password:', password);
    // Add login logic here

    // Clear email and password fields after login
    setEmail("");
    setPassword("");

    // Navigate to the HomeScreen
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    console.log('Sign up with email:', email, 'and password:', password);
    // Add sign-up logic here

    // Clear email and password fields after sign up
    setEmail("");
    setPassword("");

    // Navigate to the Signup screen
    navigation.navigate('Signup');
  };

  const handleAccountRecovery = () => {
    console.log('Recover account for email:', email);
    // Add recover account logic here

    // Clear email field after recovering account
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
        placeholder="Email"
        placeholderTextColor="white"
        underlineColor='white'
        textColor='white'
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
      />

      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!passwordVisibility}
        placeholder="Password"
        placeholderTextColor="white"
        underlineColor='white'
        textColor='white'
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
        onPress={handleLogin}
        style={{ marginBottom: 5, backgroundColor: 'white' }}
        labelStyle={{ color: '#1DA1F2' }}
      >
        Login
      </Button>

      <Button
        mode="contained"
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
        onPress={handleAccountRecovery}
        labelStyle={{ color: 'white' }}
      >
        Forgot Password? Recover Account
      </Button>
    </View>
  );
};

export default LoginScreen;
