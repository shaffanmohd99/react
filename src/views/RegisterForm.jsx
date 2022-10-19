import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import AuthProvider from '../provider/AuthProvider';
import UseAuth from '../hooks/UseAuth'

export default (props) => {
  const {login}=UseAuth()
  const onPress=()=>{
    props.navigation.navigate('test')
  }
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = data => {
  
    // login(data)
    props.navigation.navigate('test')
    console.log("meow")

  };

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
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        {/* <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Reset"
            onPress={() => {
              reset({
                email: 'Bill',
                password: 'Luo'
              })
            }}
          />
        </View> */}
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
