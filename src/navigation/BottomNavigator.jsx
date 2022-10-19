import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ticket from '../views/Ticket';
import User from '../views/User';

const BottomNavigator=()=>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name='user' component={User}/>
            <Tab.Screen name='ticker' component={Ticket}/>
        </Tab.Navigator>

    )
}
export default BottomNavigator