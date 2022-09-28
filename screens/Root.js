import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import React,{ useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Ionicons'
import AppLoading from 'expo-app-loading';

import { Checkbox } from 'react-native-paper'



const Root = ({ navigation }) => {
const [swap,setSwap] = useState(false)

const [from,setFrom] = useState(null)
const [to,setTo] = useState(null)

const [checked_one,setCheckOne] = useState(false)
const [checked_two,setCheckTwo] = useState(false)



const swapRoot = ()=>{

   
  const temp = from;
  setFrom(to);
  setTo(temp)
   
}


 
  return (
 

    <KeyboardAvoidingView  style={styles.container}>


      <Image source={require('../assets/map.png')}
      resizeMode={'stretch'}
      style={{
        width:'100%',
        height:300,
        position:'absolute',
        top:0
      }}
      />



        <View style={{
          width:'100%',
          height:400,
          alignItems:'center',
          justifyContent:'space-around'
         
         
        }}>

          <View style={{
            width:'100%',
            height:100,
            flexDirection:'row',
            justifyContent:'center',
            justifyContent:'space-evenly',
            position:'relative'
           
          
          }}>


            <View style={styles.textInputStyle}>

              <Text style={styles.text_area_text}>From</Text>

              <TextInput
              placeholder='Mumbai'
              style={styles.text_area}
              onChangeText={text=>setFrom(text)}
              value={from}
              />
            </View>

          <TouchableOpacity style={{
            width:40,
            height:40,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#0099ff',
            borderRadius:50,
            position:'absolute',
            right:'45%',
            top:30,
            zIndex:1,
            elevation:10
          }}
        onPress={swapRoot}
          >
            <Icon name="swap-horiz"size={27} color="#fff"/>
          </TouchableOpacity>

            <View style={styles.textInputStyle}>

            <Text style={styles.text_area_text}>To</Text>

<TextInput
placeholder='New Delhi'
style={styles.text_area}
onChangeText={text=>setTo(text)}
value={to}

/>
            </View>



          </View>



{/* date and month selection area */}


<View style={{
  width:'85%',
  height:90,
  backgroundColor:'#147bff',
  borderRadius:10,
  elevation:14,
  flexDirection:'row',
 

}}>


<KeyboardAvoidingView style={{
  width:'30%',
  height:'100%',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#fff',
  
}}>

  <Text style={{color:'#000',
fontSize:17,fontFamily:'Poppins_500Medium'}}>TODAY</Text>

  <Text style={{
  
    fontSize:23,
    color:'#000',
    fontFamily:'Poppins_700Bold'
  }}> 17 DEC </Text>

  <Text style={{color:'gray'}}>Monday 2018</Text>
  
</KeyboardAvoidingView>
<View style={{
  width:'30%',
  height:'100%',
  justifyContent:'center',
  alignItems:'center'
}}>

<Text style={styles.text}>TOMORROW</Text>

<Text style={styles.bold_text}> 17 DEC </Text>

<Text style={{color:'#fff',fontFamily:'Poppins_400Regular'}}>Monday 2018</Text>

</View>
<View style={{
  width:'30%',
  height:'100%',
  justifyContent:'center',
  alignItems:'center',
 
}}>


  <Text style={{ fontSize:17,
  color:'#fff',marginBottom:20,fontFamily:'Poppins_500Medium'}}>JURNEY DATE</Text>
  <Text style={{fontSize:14,color:'#fff',fontFamily:'Poppins_400Regular'}}> Select Date 
  <Icons name="calendar-outline" size={18} />
  </Text>

</View>


      

</View>



{/* date and month selection area */}

{/* check box */}


    <View style={{
      width:'65%',
      height:'30%',

      marginTop:20,
      alignItems:'flex-start',
      justifyContent:'center'
    }}>
    <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
       
      }}>
   <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>

        <Checkbox status={ checked_one?'checked':'unchecked' } color='#fff' 
        uncheckedColor="#fff"
        onPress={()=>setCheckOne(!checked_one)} />
        <Text style={{
          color:'#fff',
          fontSize:17,
          fontFamily:'Poppins_400Regular',
        
        }}>Flexible with Date</Text>
      </View>
      </View>
      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>

        <Checkbox status={ checked_two ? 'checked': 'unchecked' } 
        color='#fff'
         onPress={()=>setCheckTwo(!checked_two)} 
         uncheckedColor="#fff"
         />
        <Text style={{
          color:'#fff',
          fontSize:17,
          fontFamily:'Poppins_400Regular'
        }}>I'll book in special concesion </Text>
        </View>
      </View>
    </View>



{/* check box */}



<TouchableOpacity style={{
  width:'80%',
  height:50,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#4193fc',
  borderRadius:6,
  elevation:7
}}
onPress={()=>navigation.navigate('SearchResult')}
>

        <Text style={{
          color:'#fff',
          fontSize:18,
          fontFamily:'Poppins_500Medium'
        }}>SEARCH TRAIN</Text>

</TouchableOpacity>
        </View>


{/* button */}



{/* button */}



    </KeyboardAvoidingView>



  );
};

export default Root;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#147bff',
    position:'relative',
    justifyContent:'center',
    alignContent:'center'
  
   
  },
  textInputStyle:{
    width:'40%',
   
  },
  text_area:{
    width:'100%',
    height:50,
    backgroundColor:'#fff',
    borderRadius:6,
    padding:14,
    fontSize:17,
    
    fontFamily:'Poppins_500Medium'
    
    
  },
  text_area_text:{
    color:'#fff',
    fontWeight:'bold',
    marginBottom:10
  },
  bold_text:{
    fontFamily:'Poppins_700Bold',
    fontSize:22,
    color:'#fff',
    

  },
  text:{
    fontSize:16,
    color:'#fff',
    fontFamily:'Poppins_500Medium'
  }
});
