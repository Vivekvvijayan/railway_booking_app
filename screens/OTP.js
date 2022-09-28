import { View, Text } from 'react-native';
import React from 'react';
import { TextInput,Button } from 'react-native-paper'


const OTP = () => {

   
  return (
    <View style={{
        flex:1,
        backgroundColor:'#f0f1f5',
        justifyContent:'center',
        padding:20,
        alignItems:'center'
    }}>
      
        <Text style={{
            fontSize:25,
            fontFamily:'Poppins_700Bold',
            textAlign:'center',
            marginTop:20,
            color:'#147bff',
            justifyContent:'center',
            alignItems:'center'
            
        }}>Enter Code</Text>
    <View style={{
        width:'80%',
        height:600,
        justifyContent:'space-evenly',
        flexDirection:'row',
        alignItems:'center'

    }}>


<TextInput
mode='outlined'
keyboardType='number-pad'
style={{
    width:50,
    textAlign:'center'
}}
maxLength={1}


activeOutlineColor="#147bff"

onChange={numbers=>setNumber(number)}


/>
<TextInput
mode='outlined'
keyboardType='number-pad'
style={{
    width:50
}}
maxLength={1}
activeOutlineColor="#147bff"
/>
<TextInput
mode='outlined'
keyboardType='number-pad'
style={{
    width:50
}}
maxLength={1}
activeOutlineColor="#147bff"
/>
<TextInput
mode='outlined'
keyboardType='number-pad'
style={{
    width:50
}}
maxLength={1}
activeOutlineColor="#147bff"
/>
  
    </View>


    <Button 
                      
                      mode="contained"
                      color='#147bff'
                      style={{
                          marginTop:30,
                          
                          
                      }}
                 

                      
                  

                      contentStyle={{
                          justifyContent:'center',
                          height:50,
                          elevation:4
                      }}
                      labelStyle={{
                          fontFamily:'Poppins_400Regular'
                      }}

                      onPress={handleNumberSubmission}
                      >Verify</Button>
    </View>
  );
};

export default OTP;
