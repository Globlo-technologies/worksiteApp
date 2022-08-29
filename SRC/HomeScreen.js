import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from './CustomButton';
import GenderSelect from './GenderScreen';
import ImageAdd from './ImageScreen';
import SiteSelect from './SiteScreen';
import CustomInput from './TextInputScreen';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {

    const route = useRoute()
    const navigation = useNavigation()

    const [image, setImage] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [site, setSite] = useState('')
    const [id, setId] = useState('')

    const onPress = () => {
        onHandle()
        onNavigate()
    }

    const updateDetails = () => {
        onHandle()
        onScreen()
    }

    const onScreen = () => {
        navigation.navigate('Address', { item: route.params })
    }

    const onNavigate = () => {
        navigation.navigate(('Address'), {
            screen: 'Summary',
            params: { fname, lname, gender, phone, site }
        })
    }

    const onHandle = async () => {
        const user = { fname: fname, lname: lname, phone: phone, gender: gender, site: site }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        console.log('saved')
        console.log(user)
    }

    const Gender = [
        {
            item: 'Male',
            id: '1'
        },
        {
            item: 'Female',
            id: '2'
        },
        {
            item: 'Others',
            id: '3'
        }
    ]
    const Site = [
        {
            item: 'SB001',
            id: '1'
        },
        {
            item: 'SB002',
            id: '2'
        },
        {
            item: 'SB003',
            id: '3'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Basic Details</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <>
                <ImageAdd />
                <CustomInput label='First Name' value={fname} onChangeText={setFname} />
                <CustomInput label='Last Name' value={lname} onChangeText={setLname} />
                <GenderSelect value={gender} onChange={setGender} options={Gender} />
                <CustomInput label='Phone No' value={phone} onChangeText={setPhone} />
                <SiteSelect value={site} onChange={setSite} options={Site} label='Site' />
                <CustomButton label='Save and Continue' onPress={onPress} />
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default HomeScreen

 //<GenderSelect //onSelect={gender} data={Gender} setSelected={setGender}/*value={gender} onChange={setGender}*/ />
 //data={Gender} setSelected={setGender} value={gender.value}/>
/*const getDetails = (type) => {
       if (route.params) {
           switch (type) {
               case "fname":
                   return route.params.item.firstName
               case "lname":
                   return route.params.item.lastName
               case "gender":
                   return route.params.item.gender
               case "phone":
                   return route.params.item.phoneNumber
               case "site":
                   return route.params.item.siteCode
               case "id":
                   return route.params.item.id

               default:
                   break;
           }


       }

       return ""
   }
*/
