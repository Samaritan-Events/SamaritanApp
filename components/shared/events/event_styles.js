import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
  },
  title: {
    fontSize: 20,
  },
  leftCol: {
    flexGrow: 1,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  rightCol: {
    flexGrow: 0,
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  gravatar: {
    width: 48,
    height: 48,
    borderRadius: 25,
    borderColor: '#009900',
    borderWidth: 1,
  },
})

export default styles
