import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import AuthProvider from '../provider/AuthProvider';
import UseAuth from '../hooks/UseAuth'
import { useState } from 'react';

export default (props) => {
  const {login,sucessLogin}=UseAuth()
 
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = async (data) => {
    
    login(data)
    
    

  };
  if(sucessLogin===true){
    props.navigation.navigate('Ticketing System')
  }
  

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    
      <KeyboardAvoidingView 
       behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({field: { onChange, onBlur, value }}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({field: { onChange, onBlur, value }}) => (
            <TextInput
            secureTextEntry={true}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
          {sucessLogin===false? <Text style={{color:"red"}}>Password and email do not match</Text>:null}
        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#1DA1F2',
    borderRadius: 4,
  },
  container: {
    
    width:"100%",
    height:"100%",
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#ecf0f3',
    marginTop:-60
  },
  input: {
    backgroundColor: '#cbced1',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
