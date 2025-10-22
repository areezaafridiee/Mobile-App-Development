import React, { useRef, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const banners = [
  require('../../assets/banner_burgers.jpg'),
  require('../../assets/banner_fries.jpg'),
  require('../../assets/banner_pizza.jpg'),
  require('../../assets/banner_drinks.jpg'),
];

const categories = [
  { id: '1', title: 'Burgers', image: require('../../assets/burger1.jpg') },
  { id: '2', title: 'Fries', image: require('../../assets/fries1.jpg') },
  { id: '3', title: 'Pizza', image: require('../../assets/pizza1.jpg') },
  { id: '4', title: 'Drinks', image: require('../../assets/drinks.jpg') },
  { id: '5', title: 'Wraps', image: require('../../assets/wrap1.jpg') },
  { id: '6', title: 'Loaded Fries', image: require('../../assets/loadedpizzafries.jpg') },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper autoplay autoplayTimeout={2.5} showsPagination dotColor="#ccc" activeDotColor="#e63946">
          {banners.map((img, index) => (
            <Image key={index} source={img} style={styles.banner} />
          ))}
        </Swiper>
      </View>

      <Text style={styles.heading}>Categories</Text>
      <View style={styles.categoryContainer}>
        {categories.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Category', { category: item.title })}
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  swiperContainer: { height: 180, marginVertical: 10 },
  banner: { width, height: 180, resizeMode: 'cover' },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#e63946', marginLeft: 15, marginVertical: 10 },
  categoryContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' },
  categoryCard: { alignItems: 'center', margin: 10 },
  categoryImage: { width: 120, height: 120, borderRadius: 15 },
  categoryText: { marginTop: 8, fontSize: 16, color: '#1d3557', fontWeight: '500' },
});
