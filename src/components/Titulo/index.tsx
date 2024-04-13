import { View, Text } from "react-native"

type props = {
  texto: string
}

export const Titulo = ({texto}:props) => {
  return (
    <View>
      <Text>{texto}</Text>
    </View>
  )
}