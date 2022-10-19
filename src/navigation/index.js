import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterForm from '../views/RegisterForm';
import Ticket from '../views/Ticket';
import User from '../views/User';
import BottomNavigator from './BottomNavigator';


const ticketingStack=createNativeStackNavigator()
const Navigation=()=>{
    return(
        <NavigationContainer>
            <ticketingStack.Navigator initialRouteName='form'>
                <ticketingStack.Screen name={'form'} component={RegisterForm}/>
                <ticketingStack.Screen name={'user'} component={User}/>
                <ticketingStack.Screen name={'ticket'} component={Ticket}/>
                <ticketingStack.Screen name={'test'} component={BottomNavigator}/>
            </ticketingStack.Navigator>
        </NavigationContainer>

    )
}
export default Navigation