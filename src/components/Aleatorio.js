import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default (props) => {

    let {min, max} = props;

    let delta = max - min;
    let aleatorio = parseInt(Math.random() * delta) + min;

    return(
        <Text style={Estilo.txtG}>
            Um número aleatório: {aleatorio}
        </Text>
    )
}