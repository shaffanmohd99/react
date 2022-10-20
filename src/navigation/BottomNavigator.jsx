import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ticket from '../views/Ticket';
import User from '../views/User';

const BottomNavigator=()=>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarIconStyle: { display: "none" 
            },
            tabBarLabelStyle: {
                fontWeight: "700",
                fontSize: 15,
                marginBottom:15,
            
              },
            }}>
            <Tab.Screen name='User' component={User}/>
            <Tab.Screen name='Ticket' component={Ticket}/>
        </Tab.Navigator>

    )
}
export default BottomNavigator