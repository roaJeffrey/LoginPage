import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleSignup = () => {
    console.log('Signup with:', {
      firstName,
      lastName,
      email,
      password,
    });
    // Add signup logic here

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
        value={firstName}
        placeholder="First Name"
        placeholderTextColor="white"
        underlineColor="white"
        textColor="white"
        onChangeText={(text) => setFirstName(text)}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
      />

      <TextInput
        value={lastName}
        placeholder="Last Name"
        placeholderTextColor="white"
        underlineColor="white"
        textColor="white"
        onChangeText={(text) => setLastName(text)}
        style={{ marginBottom: 10, backgroundColor: '#1DA1F2' }}
        theme={{ colors: { primary: 'white', text: 'white', underlineColor: 'white' } }}
      />

      <TextInput
        value={email}
        placeholder="Email"
        placeholderTextColor="white"
        underlineColor="white"
        textColor="white"
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
        underlineColor="white"
        textColor="white"
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
        onPress={handleSignup}
        style={{ marginBottom: 10, backgroundColor: 'white' }}
        labelStyle={{ color: '#1DA1F2' }}
      >
        Signup
      </Button>

      <Button
        mode="text"
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
