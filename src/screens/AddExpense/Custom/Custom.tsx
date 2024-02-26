import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native'
import styles from './style';
import { selectedFriendType } from '../../../utils/types';
type Props={
  users:selectedFriendType[]
}
function Custom({users}:Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
              
              </View>
            </View>
            <TextInput placeholder='₹0.00' keyboardType='numeric' maxLength={6} style={styles.input}/>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.box}
      />
      <Pressable style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Split Custom</Text>
        </Pressable>
    </View>
  );
}

export default Custom