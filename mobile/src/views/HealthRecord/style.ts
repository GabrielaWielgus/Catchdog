import { StyleSheet } from 'react-native';
import { Colors } from '../../config/Colors';

export const style = StyleSheet.create({
  rightIcon: {
    position: 'absolute',
    top: '5%',
    right: 1,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  healthRecordViewStyle: {
    flex: 1,
    backgroundColor: Colors.beige,
    paddingBottom: '17%',
  },
  healthRecordTitlePage: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.logo_me,
    marginBottom: 10,
    paddingTop: '2%',
  },
  healthRecordListContainer: {
    flex: 1,
    marginTop: 10,
  },
  healthRecordGoBack: {
    top: '-90%',
    left: '5%'
  },
  healthRecordCategoryText: {
    color: Colors.beige,
    fontSize: 18,
    padding: 2,
  },
  healthRecordCategoryContainer: {
    backgroundColor: Colors.dark_blue,
    borderRadius: 15,
    padding: 15,
    marginVertical: '2%',
    marginHorizontal: '2%',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 }
  },
  healthRecordBlurredView: {
    backgroundColor: Colors.beige,
    borderRadius: 20,
    padding: 15,
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
    zIndex: 1,
    opacity: 0.9,
    margin: '2%',
  },
  healthRecordBlurredViewCategory: {
    backgroundColor: Colors.beige,
    borderRadius: 20,
    padding: 15,
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    zIndex: 1,
    opacity: 0.9,
    margin: '2%',
  },
  myFlatList: {
    flex: 1,
  },
  healthRecordContainer: {
    backgroundColor: Colors.dark_blue,
    borderRadius: 15,
    padding: 15,
    marginTop: '2%',
    marginBottom: '2%',
    marginHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 }
  },
  healthRecordTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.beige,
    textAlign: 'center',
    flex: 1,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.beige,
    marginHorizontal: 10,
  },
  healthRecordText: {
    color: Colors.beige,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  healthRecordImage: {
    width: '100%',
    height: 500,
    borderRadius: 20,
    marginBottom: 0,
    marginHorizontal: 0,
  },
  healthRecordImageCategory: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    marginBottom: 0,
    marginHorizontal: 0,
  },
  bluredView: {
    backgroundColor: Colors.beige,
    borderRadius: 20,
    padding: 15,
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
    zIndex: 1,
    opacity: 0.9,
    margin: '2%',
  },
  subListItemContainer: {
    backgroundColor: Colors.dark_blue,
    borderRadius: 15,
    padding: 15,
    marginTop: '20%', 
    marginBottom: '-15%', 
    marginHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 }
  },
  subListItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.beige,
  },
  subListItemText: {
    color: Colors.beige,
    fontSize: 16,
    marginTop: 5,
  },
  subListItemDivider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.beige,
    marginVertical: 10,
  },
  subListItemContent: {
    flex: 1, 
    marginRight: 10, 
  },
  subListItemTextContainer: {
    marginTop: 5,
  },
});
