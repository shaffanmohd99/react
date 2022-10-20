import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"

const Ticket=()=>{

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getTicket = async () => {
      try {
       const response = await fetch('https://925e-14-192-212-236.ap.ngrok.io/api/lookup/ticket');
       const json = await response.json();
       setData(json);
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
  
   useEffect(() => {
    getTicket();
   }, []);

    return(
        <SafeAreaView>
           <View style={styles.container}>
                <FlatList numColumns={2} data={data} renderItem={({item})=>{
                    return(
                        <View style={styles.TicketContainer}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Ticket ID:</Text>
                            <Text>{item.ticket_id}</Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Title:</Text>
                            <Text>{item.title}</Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Assign to:</Text>
                            <Text>{item.assigned_to}</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Description: </Text>
                            <Text style={{maxWidth:250}}>{item.description}</Text>  
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Category:</Text>
                            <Text>Decoris</Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Status:</Text>
                            <Text>{item.status_type}</Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Priority Level:</Text>
                            <Text>{item.priority_level}</Text>
                        </View>
                        
                    </View>
                    )
                }} 
                />
               
               
            </View> 
        </SafeAreaView>
    )
}
export default Ticket

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#ecf0f3',
         alignItems: 'center',
        width:"100%",
        height:"100%"
      
    },
    TicketContainer:{
       
        backgroundColor: '#cbced1',
        width:160,
        height:250,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:15,
        marginTop:15,
        padding:10,
        justifyContent:"center",
        marginLeft:7
        
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