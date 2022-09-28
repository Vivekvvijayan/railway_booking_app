import { StyleSheet, Text, View } from 'react-native';
import React,{ useState } from 'react';
import { TextInput,Button } from 'react-native-paper'



const Login = () => {

    const [number,setNumber] = useState(null)

    

    // const handleNumberSubmission = () => {
        
    //    fetch('http://192.168.1.4:3001/api/send_otp',{
    //        method:'POST',
    //        headers:{
    //            'Content-type':'application/json'
    //        },
    //        body:JSON.stringify({
    //            number
    //        })
    //    }).then(data=>{

        

    //    }).catch(err=>console.log(err))

    // }


    const [loader,setLoader] = useState(false)

  return (
    <View style={styles.container}>
    
                <Text style={styles.loginHeading}>OTP Varification</Text>
            <View style={styles.inputContainer}>

                <TextInput 
                     mode='outlined'
                    label="Mobile"
                    outlineColor='#147bff'
                    activeOutlineColor='#147bff'
                    style={{
                        fontSize:20,
                        fontFamily:'Poppins_400Regular'

                    }}
                    keyboardType="number-pad"
                    onChangeText={text=>setNumber(text)}
                          />
               

                        <Button 
                      
                        mode="contained"
                        color='#147bff'
                        style={{
                            marginTop:30,
                            
                            
                        }}
                        loading={loader}

                        // onPress={()=>{
                        //     setLoader(false)
                        // }}
                    

                        contentStyle={{
                            justifyContent:'center',
                            height:50,
                            elevation:4
                        }}
                        labelStyle={{
                            fontFamily:'Poppins_400Regular'
                        }}
                        // onPress={handleNumberSubmission}
                        >

                            Send Otp

                        </Button>


            </View>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        backgroundColor:'#f0f1f5',
        justifyContent:'center',

       
        padding:20
    },
    inputContainer:{
        width:'100%',
        height:400,
        
        justifyContent:'center'
    },
    loginHeading:{
        fontFamily:'Poppins_700Bold',
        fontSize:25,
        textAlign:'center',
        marginTop:30,
        color:'#147bff'
    }
});
