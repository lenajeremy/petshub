import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function PageHeader(props: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 25
  },
  title: {
    color: '#212227',
    fontWeight: 'bold',
    fontSize: 20,
  }
});


export default PageHeader;