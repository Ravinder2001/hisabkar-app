import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-paper';

type ParagraphProps = TextProps<React.ReactNode>;

export default function Paragraph(props: ParagraphProps) {
  return <Text style={styles.text} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
});
