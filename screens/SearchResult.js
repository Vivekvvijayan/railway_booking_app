import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

const SearchResult = () => {
  return (
    <View style={styles.container}>
     <ScrollView style={{marginTop:50,width:'100%'}} showsVerticalScrollIndicator={false}>


      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      
     </ScrollView>
        
    </View>
  );
};

export default SearchResult;

const ResultCard = () =>{
    

    return(

<View style={styles.card}>

            <View style={styles.train_name}>

                <View style={styles.train_name_left}>
                   <View>
                    <Text style={{ fontSize:20,
                    
                    fontFamily:'Poppins_500Medium'
                     }}>PANJAB MAIL</Text>
                        <Text style={{fontSize:18,fontFamily:'Poppins_400Regular'}}>(129922)</Text>
                   </View>
                    <Text style={{color:'gray',
                fontSize:17, fontFamily:'Poppins_500Medium'}}>NDLS ---CSTM</Text>

                    
                    
                </View>
                <View style={styles.train_name_right}>

                    <Text style={styles.train_name_right_text}>Depature : 05:15</Text>
                    <Text style={styles.train_name_right_text}>Arrive : 05:15</Text>
                    <Text style={styles.train_name_right_text}>Duration : 05:15</Text>

                  

                </View>
            </View>


            <View style={styles.book_row}>
                <View style={styles.book_row_left}>
                    <TouchableOpacity style={styles.book_row_left_btn_normal}
                    
                    >
                        <Text style={styles.black_letter}>1A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book_row_left_btn_normal}>
                    <Text style={styles.black_letter}>1A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book_row_left_btn}>
                    <Text style={styles.white_letter}>1A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.book_row_left_btn_normal}>
                    <Text style={styles.black_letter}>1A</Text>
                    </TouchableOpacity>
                </View>
               
                <TouchableOpacity style={styles.book_row_right_btn}>
                <Text style={styles.book_row_right_btn_text}>Book</Text>
                </TouchableOpacity>
             </View>


             <View style={styles.seat_availability_row}>
                 <View style={styles.seat_availability_row_left}>
                      <Text style={{fontSize:17,color:'#147bff', fontFamily:'Poppins_500Medium',marginLeft:15}}>Availability:80</Text>
                 <Text style={{ fontFamily:'Poppins_500Medium',fontSize:17,marginLeft:20}}>Fare: $200</Text>
                 </View>
                 
                 
                 <View style={{width:20,height:20,borderColor:'#147bff',borderRadius:50,borderWidth:1,justifyContent:'center',alignItems:'center',marginRight:20}}>
                <Icon name="train"color="#147bff"/>

                 </View>
             </View>
             
             
</View>


    )
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#f0f1f5',
        justifyContent:'center',
        paddingLeft:12,
        paddingRight:12,
        
        
       
    
    },
    card:{
        width:'100%',
        height:250,
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
       

    },
    train_name:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:110,
        borderBottomColor:'lightgray',
        borderBottomWidth:1,
        
        
    },
    train_name_left:{
        width:'50%',
        height:100,
        justifyContent:'space-around',
        marginLeft:10
        
    },
    train_name_right:{
        width:'40%',
        height:100,
        justifyContent:'space-around',
        alignItems:'flex-start'
    },
    train_name_right_text:{
        fontSize:16,
        fontFamily:'Poppins_500Medium',
        marginLeft:15
        

    },
    book_row:{
        width:'100%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    book_row_left:{
        width:'50%',
        flexDirection:'row',
        justifyContent:'space-around'
        
    },
    book_row_left_btn:{
        width:35,
        height:35,
        borderRadius:4,
        backgroundColor:'#147bff',
        justifyContent:'center',
        alignItems:'center',
        elevation:7
    },
    book_row_left_btn_normal:{

        width:35,
        height:35,
        borderRadius:4,
        backgroundColor:'#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        elevation:3

    },
    book_row_right_btn:{
        width:100,
        height:35,
        backgroundColor:'#147bff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        elevation:7
        
    },
    book_row_right_btn_text:{
        color:'#fff',
        fontFamily:'Poppins_500Medium'
    },
    white_letter:{
        color:'#fff',
        fontFamily:'Poppins_500Medium'
    },
    black_letter:{
        color:"#000",
        fontFamily:'Poppins_500Medium'
    },
    seat_availability_row:{
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    seat_availability_row_left:{
        width:'50%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }

    

});
