import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [contexto, setContexto] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [carregando, setCarregando] = useState(false);

  const enviarPergunta = async () => {
    if (!contexto || !pergunta) {
      alert('Preencha o contexto e a pergunta.');
      return;
    }

    setCarregando(true);
    setResposta('');

    try {
      const res = await axios.post('http://192.168.0.188:3000/api/perguntar', {
        contexto,
        pergunta
      });
      setResposta(res.data.resposta);
    } catch (erro) {
      console.error(erro);
      setResposta('Erro ao obter resposta do servidor.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Consulta Contextual LLM</Text>

      <Text style={styles.label}>Contexto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Jurídico, técnico, educacional..."
        value={contexto}
        onChangeText={setContexto}
      />

      <Text style={styles.label}>Pergunta:</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Digite sua pergunta"
        value={pergunta}
        onChangeText={setPergunta}
        multiline
      />

      <Button title={carregando ? 'Consultando...' : 'Perguntar'} onPress={enviarPergunta} disabled={carregando} />

      {carregando && <ActivityIndicator size="large" color="#0066cc" style={{ marginTop: 20 }} />}

      {resposta ? (
        <View style={styles.respostaContainer}>
          <Text style={styles.label}>Resposta:</Text>
          <Text>{resposta}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  respostaContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
  },
});
