import { useState } from 'react';
import { Text, View } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './TextInputScreen';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomCheckBox from './CheckBox';
import AadharImageAdd from './AadharImage';

const AddressScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const onPress = () => {
        onHandle()
        onNavigate()
    }

    const onNavigate = () => {
        navigation.navigate('Skills')
    }

    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [town, setTown] = useState("")
    const [state, setState] = useState("")
    const [aadharno, setAadharno] = useState("")
    const [isSelected, setSelection] = useState(false);

    const onHandle = async () => {
        const userAddress = { address1: address1, address2: address2, town: town, state: state, aadharno: aadharno }
        await AsyncStorage.setItem('userAddress', JSON.stringify(userAddress))
        console.log('saved')
    }

    const onValueChange = () => {
        setSelection(!isSelected)
    }

    return (

        <View style={{ backgroundColor: 'white', justifyContent: 'center', marginBottom: 10 }}>
            <View style={{ marginBottom: 5 }}>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Permanent Address</Text>
            </View>
            <>
                <CustomInput label='Address Line 1' value={address1} onChangeText={setAddress1} />
                <CustomInput label='Address Line 2' value={address2} onChangeText={setAddress2} />
                <CustomInput label='Town' value={town} onChangeText={setTown} />
                <CustomInput label='state' value={state} onChangeText={setState} />

                <View style={{ marginBottom: 5 }}>
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Current Address</Text>
                </View>

                <CustomCheckBox value={isSelected} onValueChange={onValueChange} />

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Aadhar Details</Text>
                    <CustomInput label='Aadhar Number' value={aadharno} onChangeText={setAadharno} />

                    <View style={{ marginTop: 10 }}>
                        <AadharImageAdd />
                    </View>

                    <CustomButton label='Save and Continue' onPress={onPress} />
                </View>
            </>
        </View>
    )
}

export default AddressScreen

/*const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case "address1":
                    return route.params.item.item.addresses.addressLine1
                case "address2":
                    return route.params.item.item.addresses.addressLine2
                
                case "town":
                    return route.params.item.item.addresses.town
                case "state":
                    return route.params.item.item.addresses.state
                case "aadharno":
                    return route.params.item.item.aadharNumber

                default:
                    break;
            }
            console.log(route.params)
        }
        return ""
    } */