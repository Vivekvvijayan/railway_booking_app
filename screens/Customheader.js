import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'




const Customheader = () => {
  return (
    <View style={styles.header_container}>

        <View style={styles.header_container_top}>
            <Icon name="chevron-left"size={20}/>
            <Text>Train List</Text>
           
            <Icon name="search"size={20}/>
        </View>


        <View style={styles.header_container_middle}>
            <TouchableOpacity style={styles.arrow_btn}>
                <Icon name="chevron-left"size={20}/>
            </TouchableOpacity>
            <Text>Tue 15 Jan 2020</Text>
            <TouchableOpacity>
                <Icon name="chevron-right"size={20}/>

            </TouchableOpacity>
        </View>


        <ScrollView style={styles.header_container_buttom} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header_top_btn}>
                <Text style={styles.btn_color}>General</Text>
            </TouchableOpacity>
            
        </ScrollView>
    
    </View>
  )
}

export default Customheader

const styles = StyleSheet.create({
    header_container:{
        width:'100%',
        height:200,
        
        
       
    },
    header_container_top:{
        width:'100%',
        height:90,
        backgroundColor:'#147bff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    header_container_middle:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    header_container_buttom:{
        flexDirection:'row',
        width:'100%',

        

    },
    header_top_btn:{
        width:70,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#147bff',
        borderRadius:7,
        elevation:7,
        marginLeft:20
    },
    btn_color:{
        color:'#fff',
        fontFamily:'Poppins_400Regular'
    },
    arrow_btn:{
        width:30,
        height:30,
        
    }
})