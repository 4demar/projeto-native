import { View, Text } from "react-native"
import { styles } from "./styles"

export const Header = () => {

  return (
    <View style={styles.boxTexto}>
      <Text style={styles.textoHeader}>Calculadora IMC</Text>
    </View>
  )
}