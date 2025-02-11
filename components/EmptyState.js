import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://thumbs.dreamstime.com/b/hospital-logo-icon-hospital-logo-icon-135146804.jpg' }} style={styles.image} />
      <Text style={styles.text}>Tidak ada data rumah sakit tersedia.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default EmptyState;
