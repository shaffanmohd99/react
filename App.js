import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import AuthProvider from './src/provider/AuthProvider';
import RegisterForm from './src/views/RegisterForm';

export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
      </AuthProvider>
  )
};
