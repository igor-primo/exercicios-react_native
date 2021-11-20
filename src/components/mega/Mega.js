import React, {setState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './numero'

export default class Mega extends React.Component {

    state = {
        qntdNumeros: this.props.qntdNumeros,
        numeros: []
    }

    alterarQntdeNumero = (qntde) => {
        this.setState({qntdNumeros: +qntde})
    }

    gerarSemRepetir = (nuns) => {
        const numero = parseInt(Math.random()*60)+1
        return nuns.includes(numero) ? this.gerarSemRepetir(nuns) : numero
    }

    gerarNumeros = () => {
        const arr = Array(this.state.qntdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarSemRepetir(n)], [])
        this.setState({numeros: arr})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num =>{
            return <MegaNumero key={num} num={num} />
        })
    }

    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerado de Mega-Sena {this.state.qntdNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="qntde de numeros"
                    value={this.state.qntdNumeros}
                    onChangeText={this.alterarQndtdeNumero}
                />
                <Button 
                    title='gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
                
            </>
        )
    }
}