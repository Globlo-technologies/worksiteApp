import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import AddressScreen from './AddressScreen';
import CustomDate from './CustomDatePicker';
import EmployeeList from './EmployeeScreen';
import HomeScreen from './HomeScreen';
import SkillsScreen from './SkillsScreen';
import Summary from './Summary';
import Icon2 from "react-native-vector-icons/Feather";
import ProfileView from './ProfileView';
import Data from '../SRC/Data/EmployeeDetails.json'

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EmpList' screenOptions={{
        title: 'Add Employee',
        headerRight: () => (
          <Button
            onPress={() => console.log('This is a button!')}
            title="Draft"
            color="orange"
          />
        )
      }}>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={Data}/*options={{
          title: 'Add Employee',
          headerRight: () => (
            <Button
              onPress={() => console.log('This is a button!')}
              title="Draft"
              color="orange"
            />
          )
        }} *//>
        <Stack.Screen name='Summary' component={Summary} />
        <Stack.Screen name='Address' component={AddressScreen} initialParams={Data} />
        <Stack.Screen name='Skills' component={SkillsScreen} initialParams={Data}/>
        <Stack.Screen name='EmpList' component={EmployeeList} initialParams={Data}
          options={{
            title: 'My Employees',
            headerLeft: () => (
              <Icon2 name="align-left" color="black" size={30}
                style={{ alignSelf: 'center', marginHorizontal: 15, color: 'orange' }} />
            ),
            headerRight: () => (
              <Text
                style={{ marginRight: -100, width: 40, height: 40, borderRadius: 20, textAlign: 'center', paddingTop: 10, backgroundColor: 'grey', alignSelf: 'center', }}>
                JD
              </Text>
            )
          }} />
        <Stack.Screen name='Profile' component={ProfileView} options={{
          title:"View Employee",
          headerRight: () => (
            <Button
              onPress={() => console.log('This is a button!')}
              title="Active"
              color="green"
            />
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;