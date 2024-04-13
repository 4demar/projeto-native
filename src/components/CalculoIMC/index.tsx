import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { Titulo } from "../Titulo"

export function CalculoImc() {
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [mensagem, setMensagem] = useState("Resultado Imc")
  const [imc, setImc] = useState("")
  const [textoBotao, setTextoBotao] = useState("Calcular IMC")


  const ValidarDados = () => {
    if (parseFloat(altura) <= 0) {
      setMensagem("informe uma altura que seja maior que zero(0)")
    }
    else if (parseFloat(peso) <= 0) {
      setMensagem("informe um peso que seja maior que zero(0)")
    }
    else {
      setTextoBotao("Calcular IMC")
      return true
    }
    setTextoBotao("Calcular Novamente")
    setAltura("")
    setPeso("")
    return false
  }

  const CalcularImc = () => {
    if (ValidarDados()) {
      const resultadoImc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
      setMensagem("Sua massa corporal é de: ")
      setImc(resultadoImc.toFixed(2))
    }
    else
      setMensagem("Dados com valores errados, favor verificar!")
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Digite sua altura: Ex. 1.80"
          keyboardType="numeric"
          onChangeText={setAltura}
          value={altura}
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Digite seu peso: Ex. 78:"
          keyboardType="numeric"
          onChangeText={setPeso}
          value={peso}
        />
        <Button
          title={textoBotao}
          onPress={CalcularImc}
        />
      </View>
      <Titulo texto={mensagem} />
      <Titulo texto={imc} />
    </View>
  )
}