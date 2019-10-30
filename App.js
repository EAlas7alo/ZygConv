import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components'

const Container = styled.View`
  flex: 1
  justify-content: center
  align-items: center
`

const Header = styled.Text`
  font-size: 20
  margin-bottom: 50px
`

const InputHeader = styled.Text`
  font-size: 15
  justify-content: center
`

const NumberInput = styled.TextInput`
  border-color: black
  border-width: 1px
  padding-left: 5px
  margin-left: 5px
  margin-bottom: 10px
  width: ${Dimensions.get('window').width * 0.75}
`

const InputRow = styled.View`
  flex-direction: row
`

const ConvertButton = styled.TouchableOpacity`
  border-color: black
  border-width: 1px
  padding: 5px
  border-radius: 10
`

const ButtonText = styled.Text`
  font-weight: bold
`

export default function App() {
  const [binaryInput, setBinaryInput] = useState('0')
  const [decimalInput, setDecimalInput] = useState('0')
  const [lastModified, setLastModified] = useState(0)

  const handleConvert = () => {
    if (lastModified === 1) {
      setBinaryInput(parseInt(decimalInput, 10).toString(2))
    } else {
      setDecimalInput(parseInt(binaryInput, 2))
    }
  }

  console.log(binaryInput)
  console.log(decimalInput)

  return (
    <Container>
      <Header>
        Binary-decimal converter
      </Header>
      <InputRow>
      <InputHeader>
        Binary:
      </InputHeader>
      <NumberInput
        keyboardType="number-pad"
        onChangeText={text => {
          setBinaryInput(text)
          setLastModified(0)
        }}
        value={binaryInput.toString()}
      />
      </InputRow>
      <InputRow>
      <InputHeader>
        Decimal:
      </InputHeader>
      <NumberInput
        keyboardType="number-pad"
        onChangeText={text => {
          setDecimalInput(text)
          setLastModified(1)
        }}
        value={decimalInput.toString()}
      />
      </InputRow>
      <ConvertButton
        onPress={handleConvert}
      >
        <ButtonText>
          Convert
        </ButtonText>
      </ConvertButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
