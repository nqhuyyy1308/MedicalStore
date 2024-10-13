import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
const ProductDetailScreen = ({route, navigation}: any) => {
  const {itemProduct} = route.params;
  console.log(itemProduct);

  return (
    <SafeAreaView>
      <View style={styles.NavigationContain}>
        <TouchableOpacity>
          <AntdesignIcon name="arrowleft" style={styles.iconNav} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <IoniconsIcon name="notifications-outline" style={styles.iconNav} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcon name="shopping-bag" style={styles.iconNav} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.productTitle}>{itemProduct.nameProducts}</Text>
        <Text style={styles.productDesc}>Etiam mollis metus non purus</Text>
        <View style={styles.productImg}>
          <Image source={itemProduct.imageProducts} />
        </View>
        <View style={styles.wrapIndexSelect}>
          <View style={styles.indexSelected} />
          <View style={styles.indexSelect} />
          <View style={styles.indexSelect} />
        </View>
        <View>
          <Text>
            Rs.166
            <Text> {itemProduct.prices}</Text>
          </Text>
          <Text>Etiam mollis</Text>
        </View>
        <TouchableOpacity>
          <OcticonsIcon name="diff-added"></OcticonsIcon>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  NavigationContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconNav: {
    fontSize: 30,
    color: '#090F47',
    marginHorizontal: 16,
  },

  productTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#090F47',
    marginLeft: 16,
  },

  productDesc: {
    fontSize: 16,
    fontWeight: '400',
    color: '#090F4773',
    marginLeft: 16,
  },

  productImg: {
    backgroundColor: '#fff',
    width: 330,
    height: 160,
    marginVertical: 16,
    marginHorizontal: 16,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.64,

    elevation: 5,
    borderRadius: 12,
  },

  wrapIndexSelect: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  indexSelected: {
    backgroundColor: '#4157FF',
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 4,
  },

  indexSelect: {
    backgroundColor: '#090F4726',
    width: 5,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 4,
  },
});
export default ProductDetailScreen;
