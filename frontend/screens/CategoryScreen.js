import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../styles/GlobalStyles';

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', title: 'Burgers', image: require('../../assets/burgers.jpg') },
  { id: '2', title: 'Fries', image: require('../../assets/fries.jpg') },
  { id: '3', title: 'Drinks', image: require('../../assets/drinks.jpg') },
  { id: '4', title: 'Wraps', image: require('../../assets/wraps.jpg') },
  { id: '5', title: 'Pizza', image: require('../../assets/pizza12.jpg') },
];

const featured = [
  { id: 'f1', name: 'Crispy Chicken Burger', price: 'Rs. 799', image: require('../../assets/burger1.jpg') },
  { id: 'f2', name: 'Loaded Fries', price: 'Rs. 499', image: require('../../assets/fries1.jpg') },
  { id: 'f3', name: 'Cheesy Pizza Slice', price: 'Rs. 599', image: require('../../assets/pizza1.jpg') },
];

// 👇 banner images for the swiper
const bannerImages = [
  require('../../assets/banner1.jpg'),
  require('../../assets/banner2.jpg'),
  require('../../assets/banner3.jpg'),
];

const HomeScreen = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('Category', { category: item.title })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderFeatured = ({ item }) => (
    <TouchableOpacity
      style={styles.featuredItem}
      onPress={() => navigation.navigate('ItemDetail', { item })}
    >
      <Image source={item.image} style={styles.featuredImage} />
      <Text style={styles.featuredName}>{item.name}</Text>
      <Text style={styles.featuredPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🌀 Swiper Banner Section */}
        <View style={{ height: 200 }}>
          <Swiper
            autoplay
            autoplayTimeout={3}
            dotStyle={{ backgroundColor: '#ccc', width: 8, height: 8, borderRadius: 4 }}
            activeDotStyle={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4 }}
            paginationStyle={{ bottom: 10 }}
          >
            {bannerImages.map((img, index) => (
              <Image
                key={index}
                source={img}
                style={{ width: width, height: 200, resizeMode: 'cover' }}
              />
            ))}
          </Swiper>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesList}
        />

        <Text style={styles.sectionTitle}>Popular This Week</Text>
        <FlatList
          data={featured}
          renderItem={renderFeatured}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuredList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
