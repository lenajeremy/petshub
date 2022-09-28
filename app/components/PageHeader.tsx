import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

function PageHeader(props: { title: string }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 16
  },
  title: {
    color: '#212227',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default PageHeader;
