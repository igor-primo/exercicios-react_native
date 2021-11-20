import React from 'react'
import {View, StyleSheet} from 'react-native'

import Quadrado from './Quadrado'

export default props =>{
    return (
       <View style={style.FlexV3}>
            <Quadrado cor='#8312ed' lado={20} />
            <Quadrado cor='#F00' lado={40} />
       </View>
    )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})