import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://image.freepik.com/vetores-gratis/macaco-com-um-computador_59690-193.jpg' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Allan Pereira</Text>
      <Text style={styles.description}>
        Desenvolvedor de software apaixonado por tecnologia e inovação.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 10,
  },
});

