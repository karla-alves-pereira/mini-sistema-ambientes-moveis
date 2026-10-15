
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6faf5',
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  header: {
    alignItems: 'center',
    marginBottom: 45,
  },

  headerIcon: {
    color: '#0e3f70',
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0e3f70',
  },

  form: {
    width: '100%',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 58,
    marginBottom: 18,
    paddingHorizontal: 15,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  icon: {
    color: '#2F5D8C',
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },

  button: {
    height: 58,
    backgroundColor: '#2F5D8C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

