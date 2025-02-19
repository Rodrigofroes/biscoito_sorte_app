import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [image, setImage] = useState(require('./assets/biscoito.png'));
  const [frase, setFrase] = useState('');
  const frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'A juventude não é uma época da vida, é um estado de espírito.',
  ]

  const quebrarBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    let fraseEscolhida = frases[numeroAleatorio];
    setFrase(fraseEscolhida);
    setImage(require('./assets/biscoitoQuebrado.png'));
  }

  const resetar = () => {
    setFrase('');
    setImage(require('./assets/biscoito.png'));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biscoito da sorte</Text>
      <Text style={styles.subtitle}>Clique no biscoito para abrir</Text>
      <Image style={styles.img} source={image} />
      <View style={frase ? styles.frase : null}>
        {frase ? <Text>{frase}</Text> : null}
      </View>
      <TouchableOpacity style={styles.buttonPrimary} onPress={quebrarBiscoito}>
        <Text style={styles.text}>Quebrar biscoito</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!frase} style={styles.buttonSegundary} onPress={resetar}>
        <Text>Resetar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  frase: {
    margin: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#333',
  },
  buttonPrimary: {
    backgroundColor: '#0074f9',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'semibold',
  },
  buttonSegundary: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    borderColor: '#0074f9',
    borderWidth: 1,
  },
  img: {
    width: 200,
    height: 200,
  }
});
