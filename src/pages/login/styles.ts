 import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


 export const  style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:0

    },
    boxTop:{
        height:Dimensions.get('window').height/2,
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'

    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        backgroundColor:'white',
        paddingHorizontal:37
    
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'blue',
        alignItems:'center',
        //justifyContent:'center'
    },
    logo:{
        //transform:scale(1:1)]
        
        width:240,
        height:240,
        marginTop:30,
        
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:22
    },
    titleInput:{
        marginTop:20,
        marginLeft:5,
        color:themas.Colors.gray
        
    },
    boxEmail:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:0,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:themas.Colors.ligthGray,
        borderColor:themas.Colors.ligthGray
    },
    inputEmail:{
        width:'90%',
        height:'100%',
        //backgroundColor:'red',
        borderRadius:40

    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.Colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
    textButton: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold',
    },
    textBottom:{
        fontSize:16,
        color:themas.Colors.gray
    },
    //textBottomCreate:{
      //  fontSize:16,
        //color:themas.Colors.gray
    //}
    

 });