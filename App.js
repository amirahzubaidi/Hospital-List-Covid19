import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import HospitalCard from './components/HospitalCard';
import Header from './components/Header';
import EmptyState from './components/EmptyState';


const fetchHospitals = async () => {
  try {
    const response = await fetch('https://dekontaminasi.com/api/id/covid19/hospitals');
    return await response.json();
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return [];
  }
};

export default function App() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHospitals().then(data => {
      setHospitals(data);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      ) : hospitals.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={hospitals}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <HospitalCard hospital={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
