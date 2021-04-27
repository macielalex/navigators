import React from 'react'


import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { Alert } from 'react-native';

  export default props =>{


    return(
    <DrawerContentScrollView {...props}>
        
        <DrawerItem
          label="Help"
          onPress={() => console.warn('Teste')}
        />
     </DrawerContentScrollView>)
  }