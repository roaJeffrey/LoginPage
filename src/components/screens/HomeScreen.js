import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {

    navigation.navigate('Login');
  };

  return (
    <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
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
      <Text variant="headlineMedium" style={{ color: 'white' }}>Welcome User!</Text>
      <Button
        mode="contained"
        onPress={handleLogout}
        style={{ marginTop: 20, backgroundColor: 'white' }}
        labelStyle={{ color: '#1DA1F2' }}
      >
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;
