import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native-paper';
import { theme } from '../../core/theme';

type HeaderProps = TextProps<React.ReactNode>;

export default function Header(props: HeaderProps) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});
