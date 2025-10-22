// frontend/styles/GlobalStyles.js
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#e63946', // red
  secondary: '#1d3557', // dark blue
  background: '#fff',
  textDark: '#1d3557',
  textLight: '#fff',
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
