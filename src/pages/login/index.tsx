import React, { useState } from "react";

import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
export default function Login(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[loading,setLoading] = useState(false)

    async function getLogin() {
        try {
            setLoading(true);
    
            if (!email || !password) {
                setLoading(false); // Para parar o loader se faltar algum campo
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }
    
            setTimeout(() => {
                Alert.alert('Logado com sucesso');
                setLoading(false); // Para parar o loader após o login simulado
            }, 3000);
    
        } catch (error) {
            console.log(error);
            setLoading(false); // Garantir que o loader pare em caso de erro
        }
    }
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                     source={Logo}
                     style={style.logo}
                     resizeMode="contain"
                />
                <Text style={style.text}>Bem Vindo ao App do Timão</Text>
            </View>
            <View style={style.boxMid}>
                 <Text style={style.titleInput}>EMAIL</Text>
                 <View style={style.boxEmail}>
                 <TextInput 
                       style={style.inputEmail}
                       value={email}
                       onChangeText={setEmail}
                 />
                 <MaterialIcons
                      name="email"
                      size={20}
                      color={themas.Colors.gray}              
                 />
                 </View>
                 <Text style={style.titleInput}>SENHA</Text>
                 <View style={style.boxEmail}>
                 <TextInput 
                       style={style.inputEmail}
                       value={password}
                       onChangeText={setPassword}
                 />
                 <MaterialIcons
                      name="remove-red-eye"
                      size={20}
                      color={themas.Colors.gray}              
                 />
                 </View>
            </View>
            <View style={style.boxBottom}>
                <View>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                        {
                             loading?
                                  <ActivityIndicator color={'#FFFF'} size={"small"} />
                             :
                                  <Text style={style.textButton}>Entrar</Text>
                        }
                    </TouchableOpacity>
                </View>
                <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.Colors.primary}}>Crie agora!</Text></Text>
            </View>
        </View>
    )
}   