import { Text, StyleProp, TextStyle, View } from "react-native"
import { styles } from '../../styles/stylesGlobal'

type props = {
  texto: string,
  style: StyleProp<TextStyle>
}

export const Titulo = ({ texto, style }: props) => {
  return (
    <View style={styles.boxTexto}>
      <Text style={style}>{texto}</Text>
    </View>
  )
}