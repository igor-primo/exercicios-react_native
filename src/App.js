import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'


import Mega from './components/mega/Mega'
//import FlexboxV4 from './components/layout/FlexboxV4'
//import FlexboxV3 from './components/layout/FlexboxV3'
//import FlexboxV2 from './components/layout/FlexboxV2'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import UsuarioLogado from './components/UsuarioLogado'
//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/Membro'
//import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Titulo from './components/Titulo'
//import MinMax from './components/MinMax'
//import Botao from './components/Botao'
//import Aleatorio from './components/Aleatorio'
//import ComPadrao, {Comp1, Comp2} from './components/Multi'

export default () => (
    <SafeAreaView style={style.App}>
        
        <Mega qntdNumeros={8} />

        {/*
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/>
        <UsuarioLogado usuario={{nome: 'Ana', email: 'ana@seila.com'}}/>
        <UsuarioLogado usuario={{nome: '', email: 'ninguem@eita.com'}}/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
            <Membro nome="Igor" sobrenome="Souza"/>
            <Membro nome="Mairon" sobrenome="Neto"/>
        </Familia>
        <ParImpar num={2}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Botao />
        <Contador inicial={20} passo={3}/>
        <Contador inicial={100} passo={10}/>
        <Aleatorio min={3} max={20} />
        <Aleatorio min={3} max={20} />
        <Aleatorio min={3} max={20} />
        <Aleatorio min={3} max={20} />
        <Aleatorio min={3} max={20} />
        <Titulo principal="Cadastro Produto" secundario="Tela de cadastro do produto" />
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/>
        <ComPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})