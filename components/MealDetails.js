import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDetails = ( {duration, complexity, affordability, style, textSyle } ) => {
  return (
    <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textSyle]}> {duration}m </Text>
        <Text style={[styles.detailItem, textSyle]}> {complexity.toUpperCase()} </Text>
        <Text style={[styles.detailItem, textSyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 8,
        fontSize: 12,
    }
})