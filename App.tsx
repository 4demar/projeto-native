import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Titulo } from './src/components/Titulo';
import { Header } from './src/components/Header';
import { CalculoImc } from './src/components/CalculoIMC';
import { Footer } from './src/components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CalculoImc />
      <Footer />
      {/* <StatusBar style="auto" />  // com esse paga a tela toda!*/}
    </View>
  );
}

