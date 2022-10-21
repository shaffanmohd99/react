import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterForm from '../views/RegisterForm';
import Ticket from '../views/Ticket';
import User from '../views/User';
import BottomNavigator from './BottomNavigator';
import { Entypo } from '@expo/vector-icons'; 

const ticketingStack=createNativeStackNavigator()
const Navigation=()=>{
    return(
        <NavigationContainer>
            <ticketingStack.Navigator initialRouteName='Login'>
                <ticketingStack.Screen name={'Login'} component={RegisterForm}/>
                <ticketingStack.Screen name={'User'} component={User}/>
                <ticketingStack.Screen name={'Ticket'} component={Ticket}/>
                <ticketingStack.Screen   name={'Ticketing System'} component={BottomNavigator}/>
            </ticketingStack.Navigator>
        </NavigationContainer>

    )
}
export default Navigation
// options={()=>({
//     headerRight:()=>(
//         <Entypo name="chevron-left" size={24} color="black"/>
//     ),
    
// })}