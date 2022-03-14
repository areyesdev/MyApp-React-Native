import React from 'react';
import { TextInput, Button } from 'react-native';

export default function LoginForm(props) {
  return (
    <>
      <TextInput
        placeholder='Email'
        onChangeText={props.onChangeText}
        value={props.email}
      />
      <TextInput
        placeholder='Password'
        onChangeText={props.onChangeText}
        value={props.password}
      />
      <Button title='Login' onPress={props.onPress} />
    </>
  );
}
