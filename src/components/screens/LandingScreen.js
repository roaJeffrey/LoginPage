import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={{ 
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30, 
        backgroundColor: '#1DA1F2' }}>

        <Image
          source={require('../PngImages/TwitterLogo.png')}
          style={{ 
            width: 100, 
            height: 100, 
            marginBottom: 20,
            alignSelf: 'center'
          }}
        />

        <Button 
            mode="contained" 
            onPress={handleLogin}
            style={{ marginBottom: 10, backgroundColor: 'white' }}
            labelStyle={{ color: '#1DA1F2' }}
        >
            Login
        </Button>

        <Button
        mode="contained"
        onPress={handleSignup}
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
    </View>
  );
};

export default LandingScreen;
