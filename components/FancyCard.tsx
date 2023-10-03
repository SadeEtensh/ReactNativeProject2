import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLable}>Pink City, Addis Ababa</Text>
          <Text style={styles.cardDescription}>
            Hawa Mahal is a a place at Addis Ababa
          </Text>
          <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    // width: 100,
    height: 180,
  },
  cardBody: {},
  cardTitle: {},
  cardLable: {},
  cardDescription: {},
  cardFooter: {},
});
