import React from 'react';
import { View, Text, Image } from 'react-native';

const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Image source={item.image} style={{ width: 200, height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 22, marginTop: 20 }}>{item.name}</Text>
      <Text style={{ fontSize: 18, color: '#777', marginTop: 10 }}>{item.price}</Text>
    </View>
  );
};

export default ItemDetailScreen;
