import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  // eslint-disable-next-line prettier/prettier
  return <Image source={require('../assets/asn-luminous-no-bg.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
