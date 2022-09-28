
import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts,
         Poppins_400Regular,
         Poppins_700Bold,
         Poppins_500Medium         
  } from '@expo-google-fonts/poppins'

  import { NavigationContainer } from '@react-navigation/native'
  import { createStackNavigator } from '@react-navigation/stack'


import Root from './screens/Root';
import SearchResult from './screens/SearchResult';
import Book from './screens/Book'
import Login from './screens/Login';
import OTP from './screens/OTP';
import Customheader from './screens/Customheader';

const Stack = createStackNavigator();


export default function App() {

  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,Poppins_500Medium
  })

  if(!fontLoaded){
    return <AppLoading/>
  }else{

  return (
  
<NavigationContainer>
<View style={styles.app_container}>

  <Navigation/>


</View>
</NavigationContainer>
      
     
  );
}

}

const Navigation = () => {
  return(
    <Stack.Navigator
    screenOptions={{
    
     headerTitleAlign:'center',
     
     headerTitleStyle:{
       fontFamily:'Poppins_700Bold'
     }
    }}
    >


        <Stack.Screen name="Root" component={Root}
        options={{
          headerTransparent:true,
          headerTintColor:'#fff',
          headerTitle:'Ticket Reservation',

        }}
        />
        <Stack.Screen name="Book" component={Book}

     
        
        />
        <Stack.Screen name="OTP" component={OTP}/>
        <Stack.Screen name="SearchResult" component={SearchResult}
         options={{
         
          header:()=><Customheader/>
        }}
        />
        <Stack.Screen name="Login" component={Login}/>


    </Stack.Navigator>
  )
}





const styles = StyleSheet.create({
app_container:{
  flex:1
}
});
