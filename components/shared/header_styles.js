import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#888',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
  },
  headerIcon: {
    fontSize: 32,
    color: '#080',
  }
})

export default styles
