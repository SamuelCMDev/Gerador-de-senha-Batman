import React from 'react';
import { View,Image,Text} from 'react-native';
import batlogo from '../../../assets/bat-logo.png'
import { styles } from '././Batlogostyle';

export function Batlogo() {
  return (
   <>
        <Text style={styles.title}>BOT PASS GENERATION</Text>
        <Image source={batlogo}
                style={{
                    resizeMode: 'contain',
                    height: 180

                }}
        >

        </Image>
        </>
  );
}