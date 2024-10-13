import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';

const CartNavigator = () => {
  const CartStack = createNativeStackNavigator();
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  );
};
export default CartNavigator;
