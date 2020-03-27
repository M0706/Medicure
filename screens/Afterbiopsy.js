import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity, View
  } from 'react-native';

export default class Afterbiopsy extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>{"     "}</Text>
                <Text>{"     "}</Text>
               <Text style={styles.text}> 
                {('Er+ Pr+ Her2/neu+')}

               </Text>
               <View style={styles.container1}>
               <Text style={styles.text1}> 
                {('Pre-menopausal')}

               </Text>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:100,
        alignSelf:'center',
        height:10,
        paddingHorizontal:1,
        paddingRight:270

    },
    text:{
        color: 'white',
        flex: 0.1,
        flexDirection:'row',
        fontSize:30,
        backgroundColor: 'mediumblue',
        width:280,
        alignItems:'center',
        alignContent:'space-between',
        textAlign:'center',
        borderRadius:10,
        padding:30,

    },
    container1:{
        flex:1,
        width:10,
        alignSelf:'center',
        height:50,
        paddingHorizontal:12,
        paddingVertical:50,
        paddingRight:170
    },
    text1:{
        color: 'white',
        flex: 0.1,
        flexDirection:'row',
        fontSize:20,
        backgroundColor: 'mediumblue',
        width:280,
        alignItems:'center',
        alignContent:'space-between',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:10,
        borderTopColor:'white',
        padding:30,
        
    }
    
})
