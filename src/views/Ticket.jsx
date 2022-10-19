import { SafeAreaView, StyleSheet, Text, View } from "react-native"

const Ticket=()=>{
    return(
        <SafeAreaView>
           <View style={styles.container}>
                <Text>Ticket</Text>
                <View style={styles.TicketContainer}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Ticket ID:</Text>
                        <Text>1</Text>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Title:</Text>
                        <Text>New ticker</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Description: </Text>
                        <Text style={{maxWidth:250}}>asdadsdsdsdsdasdasdasdasdasd</Text>  
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Category:</Text>
                        <Text>Decoris</Text>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Status:</Text>
                        <Text>In-progress</Text>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <Text style={{color:"#1DA1F2",fontWeight:"bold"}}>Priority level:</Text>
                        <Text>high</Text>
                    </View>
                    
                </View>
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
        width:200,
        height:250,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:15,
        marginTop:15,
        padding:10,
        justifyContent:"center"
        
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