import { ImageBackground, StatusBar, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React,{ useEffect,useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
;


const Book = () => {


  return (
    <View style={styles.container}>
      
       
        <View style={styles.inner_container}>



            <TrainDetails/>
            <RootContainer/>
            <Passenger/>
            <Pnr/>
            <Qrbtn/>

          


        </View>
       



      <StatusBar backgroundColor={"#147bff"}/>
    </View>
  );
};



const TrainDetails = () => {

    return(

        <View style={styles.tarin_datails_top}>
            <View>

                <ImageBackground source={require('../assets/train.jpg')} style={styles.bg_img}
                resizeMode="cover"
                >

                    <View style={styles.tarin_datails_top_img_box}>
                        <View style={styles.tarin_datails_top_img_box_left}>
                            <Text style={styles.text_style_top}>15 JAN 2022   </Text>

                            
                            <Text  style={styles.text_style_top}>   05 :15 </Text>
                        </View>

                        <View  style={styles.tarin_datails_top_img_box_right}>
                            <Text  style={styles.text_style_top}>$48000</Text>
                        </View>
                    </View>

               </ImageBackground>


            </View>

            <View style={styles.tarin_datails_bottom}>
                <Text  style={styles.text_style_bottom}>PUNJAB MAIL (12008)</Text>
            </View>
        </View>

    )

}

const RootContainer = () => {
    return(


        <View style={styles.root_data_container}>
            <View style={styles.root_data_container_name}>
                <Text style={styles.text_style_bold}>New Delhi</Text>
                <Text style={styles.text_style_bold}> Mumbai Central</Text>
            </View>


            <View style={styles.root_data_container_path}>
                <Icon name="circle" size={17} color="gray"/>
                <Icon name="multiple-stop"size={17} color="gray"/>
                <Icon name="multiple-stop"size={17} color="gray"/>
                <Icon name="multiple-stop"size={17} color="gray"/>
                <Icon name="multiple-stop"size={17} color="gray"/>
                
                <Icon name="multiple-stop"size={17} color="gray"/>
                <Icon name="multiple-stop"size={17} color="gray"/>
               
           
                <Icon name="play-arrow"color="gray" size={17}/>
            </View>

            <View style={styles.root_data_container_timings}>
                <View style={styles.root_data_container_timings_data}>

                <Icon name="location-on"size={17} color="gray"/>
                <Text style={styles.normal_text}>1670kms</Text>
                </View>

                <View style={styles.root_data_container_timings_data}>
                    <Icon name="history-toggle-off"size={17} color="gray"/>
                    <Text style={styles.normal_text}>23.7min</Text>
                </View>

            </View>



        </View>

    )
}

const Passenger = ()=>{
    return(
        <View style={styles.passenger}>
            <View style={styles.passenger_left}>
                <View>
                    <Text style={styles.passenger_text_small}>Passenger</Text>
                    <Text style={styles.passenger_text_large}>Arun Kumar</Text>
                </View>
                <View>
                 
                    <Text style={styles.passenger_text_small} >Class</Text>
                    <Text  style={styles.passenger_text_large}>Second AC</Text>
                </View>
            </View>
            <View style={styles.passenger_right}>
                <View>
                <Text style={styles.passenger_text_small}>Age</Text>
                    <Text style={styles.passenger_text_large}>32</Text>
                    
                </View>
                <View>
                    <Text style={styles.passenger_text_small}>Seat</Text>
                    <Text style={styles.passenger_text_large}>S2/SU44</Text>

                </View>
            </View>
        </View>


    )
}

const Pnr = () =>{
    return(

        <View style={styles.PnrContainer}>
            <Text style={styles.Pnr_text}>PNR: 12221122</Text>
            <Text style={styles.Pnr_text}>Bokking ID: 000110011</Text>
        </View>


    )
}

const Qrbtn = () =>{
    return(
        <View style={styles.btn_container}>

        <TouchableOpacity style={styles.qrbtn} activeOpacity={0.8}>
            <Text style={styles.btn_text}>SHOW QR CODE</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Book;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f1f5',
        justifyContent:'center',
        padding:20
    },
    inner_container:{
        width:'100%',
        height:800,
        borderRadius:10,
        alignItems:'center'
        
    }
    ,
    bg_img:{
        width:'100%',
        height:200,
        
        
    },
    tarin_datails_top:{
        width:'100%',
        height:280,
        
       
       
    },
    tarin_datails_top_img_box:{
        width:'100%',
        height:60,
        position:'absolute',
        bottom:0,
        flexDirection:'row'
    },
    tarin_datails_top_img_box_left:{
        width:'70%',
        backgroundColor:'#0099ff',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    tarin_datails_top_img_box_right:{
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#147bff'
    },
    tarin_datails_bottom:{
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    text_style_top:{
        fontFamily:'Poppins_500Medium',
        color:'#fff',
        fontSize:17
    },
    text_style_bottom:{
        fontFamily:'Poppins_500Medium',
        color:'#000',
        fontSize:18
    },

    // root container styels 
    
    root_data_container:{
        width:'100%',
        height:120,
        justifyContent:'space-around',
       alignItems:'center',
       backgroundColor:'#fff',
       
     
       

    },
    root_data_container_name:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%'
    },
    root_data_container_path:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'80%'       
    },
    root_data_container_timings:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },
    root_data_container_timings_data:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
    },
    text_style_bold:{
        fontFamily:'Poppins_500Medium',
        fontSize:18
    },
    normal_text:{
        fontFamily:'Poppins_400Regular',
        color:'gray'
    },


    // pASSENGER

    passenger:{
        width:'100%',
        height:130,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:2
    },
    passenger_left:{

        width:'30%',
        height:130,
        justifyContent:'space-around',
        marginLeft:20
  
    },
    passenger_right:{
        width:'20%',
        height:130,
        justifyContent:'space-around',
        marginRight:20,
        

    },
    passenger_text_small:{
        fontFamily:'Poppins_400Regular',
        color:'gray'
   
    },
    passenger_text_large:{
        fontFamily:'Poppins_700Bold',
        fontSize:15
        
    },

    // pnr data


    PnrContainer:{
        width:'100%',
        height:100,
        backgroundColor:'#fff',
        marginTop:2,
        justifyContent:'center'

    },
    Pnr_text:{
        fontFamily:'Poppins_700Bold',
        fontSize:20,
        textAlign:'left',
        marginLeft:15

    },

    // qr btn styles

    btn_container:{
        width:'100%',
        height:90,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:3
    },

    qrbtn:{
        width:'90%',
        height:55,
        backgroundColor:'#147bff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        elevation:4
    },
    btn_text:{
        color:'#fff',
        fontFamily:'Poppins_500Medium'
    }
    });
