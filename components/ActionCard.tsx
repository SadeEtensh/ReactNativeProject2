import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headiingContainer}>
          <Text style={styles.headiingText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            ECMAScript 2021 is the version of ECMAScript corresponding to this
            year. There are some useful and awesome features that have been
            incorporated and could be used in our javascript projects
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm',
              )
            }>
            <Text>Read More ...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm',
              )
            }>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headiingContainer: {},
  headiingText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLinks: {},
});
