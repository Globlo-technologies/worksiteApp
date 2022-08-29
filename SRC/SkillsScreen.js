import { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './TextInputScreen';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SiteSelect from './SiteScreen';
import CertificateImageAdd from './CertificateImage';
import CustomDate from './CustomDatePicker';

const SkillsScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const onPress = () => {
        onHandle()
        onNavigate()
    }

    const onNavigate = () => {
        navigation.navigate('Summary')
    }

    const onHandle = async () => {
        const userJob = { occupation: occupation, certification: certification, salaryStructure: salaryStructure }
        await AsyncStorage.setItem('userJob', JSON.stringify(userJob))
        console.log('saved')
    }

    const [occupation, setOccupation] = useState('')
    const [date, setDate] = useState("")
    const [salaryStructure, setSalaryStructure] = useState("")
    const [certification, setCertification] = useState('')

    const Sal_Str = [
        {
            item: 'Per Day',
            id: '1'
        },
        {
            item: 'Per week',
            id: '2'
        },
        {
            item: 'Per Month',
            id: '3'
        }
    ]

    return (
        <View style={{ backgroundColor: 'white', justifyContent: 'center', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Job Details</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <>
                <CustomInput label='Occupation' value={occupation} onChangeText={setOccupation} />
                <CustomDate />
                <SiteSelect options={Sal_Str} value={salaryStructure} onChange={setSalaryStructure} label='Salary Structure' />

                <View style={{ marginBottom: 5 }}>
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Certifications</Text>
                </View>

                <CustomInput label='Certification Name' value={certification} onChangeText={setCertification} />

                <CertificateImageAdd />
                <View style={{ marginTop: 20 }}>
                    <Pressable
                        style={{ height: 75, alignItems: 'center', borderStyle: 'dashed', borderColor: 'grey', borderWidth: 1, justifyContent: 'center' }}
                        onPress={() => console.log("Image")}
                    >
                        <Text style={{ alignSelf: 'center', color: 'orange' }}>+ Add New Certification</Text>
                    </Pressable>
                </View>

                <CustomButton label='Save and Preview' onPress={onPress} />
            </>
        </View >

    )
}

export default SkillsScreen

//address1: route.params.address1, address2: route.params.address2, town: route.params.town, state: route.params.state, aadharno: route.params.aadharno,
                    //fname:fname,lname:route.params.lname,phone:route.params.phone })} /><SiteSelect value={salaryStructure} onChange={setSalaryStructure} options={Salary} label='Salary Structure'/>
