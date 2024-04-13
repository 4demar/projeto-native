import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Titulo } from './src/components/Titulo';
import { Header } from './src/components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo texto="Projetos em Native" />
      <Header />
      {/* <StatusBar style="auto" />  // com esse paga a tela toda!*/}
    </View>
  );
}

