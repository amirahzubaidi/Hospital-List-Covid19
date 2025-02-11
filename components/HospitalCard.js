import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const HospitalCard = ({ hospital }) => {
  const openMap = () => {
    const encodedAddress = encodeURIComponent(hospital.address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(googleMapsUrl);
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://thumbs.dreamstime.com/b/hospital-logo-icon-hospital-logo-icon-135146804.jpg` }} // Gambar dari google
        style={styles.thumbnail}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{hospital.name}</Text>
        <Text style={styles.address}>{hospital.address}</Text>
        <Text style={styles.phone}>☎ {hospital.phone}</Text>
        <TouchableOpacity onPress={openMap}>
          <Text style={styles.region}>📍 {hospital.region}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  region: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default HospitalCard;
