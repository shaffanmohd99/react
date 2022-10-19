import { useEffect } from "react"
import { useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { getUser } from "../api/api"
import {  GetUser } from "../api/UserApi"

const User=()=>{

    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUser = async () => {
    try {
     const response = await fetch('https://5080-49-124-200-218.ap.ngrok.io/api/lookup/user');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
    getUser();
 }, []);
//  console.log(data[0])


    
    return (
        <SafeAreaView >
            
            <View style={styles.container}>
        
                <View style={styles.userContainer}>
                    <Text style={{width:"10%",color:"white"}}>ID </Text>
                    <Text style={{width:"30%",color:"white"}}>Name </Text>
                    <Text style={{width:"45%",color:"white"}}>Email </Text>
                    <Text style={{width:"90%",color:"white"}}>Role </Text>
                </View>
                <FlatList data={data} renderItem={({item})=>{
                    return(
                    <View style={styles.textContainer}>
                        <Text style={{width:"7%"}}>{item.id} </Text>
                        <Text style={{width:"20%"}}>{item.name} </Text>
                        <Text style={{width:"30%"}}>{item.email}</Text>
                        <Text style={{width:"90%"}}>{item.role} </Text>
                    </View>
                    )
                }}/>
               
            </View>
        </SafeAreaView>
    )
}
export default User
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#ecf0f3',
         alignItems: 'center',
        width:"100%",
        height:"100%"
      
    },
    userContainer:{
        flexDirection:"row",
        backgroundColor: '#1DA1F2',
        width:"100%",
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        marginTop:15,
    },
    textContainer:{
        flexDirection:"row",
        backgroundColor: '#cbced1',
        width:"100%",
        paddingLeft:5,
        paddingRight:5,
        marginTop:5,
        borderRadius:15,
        alignItems: 'center',
        
    }

})