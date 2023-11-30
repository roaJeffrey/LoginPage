import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';

const AccountRecoveryScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleRecoverEmail = () => {
    // Add logic for email recovery here
    console.log('Recover email for:', email);
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

        <Text variant="headlineMedium" style={{ color: 'white', textAlign: 'center', marginBottom: 30 }}>Email Recovery</Text>

        <TextInput
        value={email}
        placeholder="Email"
        placeholderTextColor="white"
        onChangeText={(text) => setEmail(text)}
        style={{
            marginBottom: 10,
            backgroundColor: '#1DA1F2',
            color: 'white',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
        }}
        theme={{ colors: { primary: 'white', text: 'white' } }}
/>

        <Button
            mode="contained"
            onPress={() => {
            handleRecoverEmail();
            navigation.navigate('Login');
            }}
            style={{ marginBottom: 3, marginTop: 10, backgroundColor: 'white' }}
            labelStyle={{ color: '#1DA1F2' }}
        >
            Recover Email
        </Button>

        <Button
            mode="text"
            onPress={() => navigation.navigate('Login')}
            style={{ marginTop: 3, backgroundColor: 'transparent' }} // Set background to transparent
            labelStyle={{ color: 'white' }}
        >
            Go Back to Login
        </Button>

    </View>
  );
};

export default AccountRecoveryScreen;
