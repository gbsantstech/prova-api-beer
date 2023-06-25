import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const BeerApp = () => {
  const [beerData, setBeerData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://random-data-api.com/api/beer/random_beer');
      setBeerData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderBeerItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <Text>Brand: {item.brand}</Text>
      <Text>Name: {item.name}</Text>
      <Text>Style: {item.style}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Captura cerveja" onPress={fetchData} />
      {beerData && (
        <FlatList
          data={[beerData]}
          keyExtractor={() => beerData.id.toString()}
          renderItem={renderBeerItem}
        />
      )}
    </View>
  );
};

export default BeerApp;

