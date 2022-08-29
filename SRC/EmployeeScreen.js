import React from "react";
import { View, Text, TextInput, FlatList } from 'react-native'
import { Card, FAB, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/AntDesign";
import Data from '../SRC/Data/EmployeeDetails.json'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const EmployeeList = () => {
    const navigation = useNavigation()
   // const [Data,setData] = useState(Data)
    const [isRender,setIsRender] = useState(false)
    const renderList = (item) => {
        return (
            <Card style={{ margin: 5 }} onPress={() => navigation.navigate('Profile', { item: item })}>
                <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ width: 40, height: 40, borderRadius: 20, textAlign: 'center', paddingTop: 7, backgroundColor: 'grey', alignSelf: 'flex-start', fontSize: 18, fontWeight: 'bold' }}>
                        {`${item.firstName}`.charAt(0).toUpperCase()}{`${item.lastName}`.charAt(0).toUpperCase()}
                    </Text>
                    <View style={{ paddingLeft: 1, marginLeft: 5, alignSelf: 'flex-start', flex: 1, justifyContent: 'flex-start' }}>
                        <Text> {item.firstName} {item.lastName}</Text>
                        <Text> {item.siteName}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', overflow: 'hidden' }}>
                        <Text style={{ maxWidth: 70, flex: 1, color: 'white', fontWeight: '200', backgroundColor: 'green', textAlign: 'center', padding: 8 }}>{item.status}</Text>
                        <Button
                            theme={{ colors: { primary: 'orange' } }}
                            style={{ marginLeft: 3, flex: 1, borderRadius: "20%" }}
                            //icon='account-edit'
                            mode='contained'
                            onPress={() => navigation.navigate('Home', { item: item })}
                        ><Icon name="account-edit" color="black" size={15} /></Button>
                    </View>
                </View>
            </Card>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Card style={{ marginBottom: 40 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        borderRadius: 5, marginHorizontal: 5,
                        height: 40,
                    }}>
                    <Icon name="magnify" color="black" size={30} style={{ alignSelf: 'center', marginHorizontal: 15 }} />
                    <TextInput placeholder="search" style={{ flex: 1, fontSize: 18 }} />
                    <Icon1 name="profile" color="black" size={30} style={{ alignSelf: 'center', marginHorizontal: 15, color: 'orange' }} />
                </View>
            </Card>
            <FlatList

                keyExtractor={data => `${data.id}`}
                data={Data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                extraData={isRender}
            />
            <FAB
                icon="plus"
                style={{
                    position: 'absolute',
                    margin: 16, backgroundColor: 'orange',
                    right: 0,
                    bottom: 0,
                }}
                color="white"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
export default EmployeeList

/*const EmployeeList = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [site, setSite] = useState('')


    const findUser = async () => {
        const result = await AsyncStorage.getItem('user').then(val => {
            let user = JSON.parse(val)
            setFname(user.fname)
            setLname(user.lname)
            setSite(user.site)
            console.log(user)
        })
    }
    useEffect(() => { findUser() }, [])


    return (
        <View style={{ flex: 1, }}>
            <Card style={{ marginHorizontal: 5 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        borderRadius: 5, marginHorizontal: 5,
                        //backgroundColor: '#f0eeee', 
                        height: 40,
                        //borderWidth: 1
                    }}>
                    <Icon name="magnify" color="black" size={30} style={{ alignSelf: 'center', marginHorizontal: 15 }} />
                    <TextInput placeholder="search"
                        style={{
                            //borderWidth: 1, 
                            flex: 1,
                            fontSize: 18
                        }} />
                    <Icon1 name="profile" color="black" size={30}
                        style={{ alignSelf: 'center', marginHorizontal: 15, color: 'orange' }} />
                </View>
            </Card>


            <Card style={{ marginTop: 15, marginHorizontal: 5, marginTop: 35 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ width: 40, height: 40, borderRadius: 20, textAlign: 'center', paddingTop: 7, backgroundColor: 'grey', alignSelf: 'center',fontSize:18,fontWeight:'bold' }}>
                            {`${fname}`.charAt(0).toUpperCase()}{`${lname}`.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                    <View style={{ padding:2,marginLeft:-40 }}>
                        <Text> {fname} {lname}</Text>
                        <Text> {site.item}</Text>
                    </View>
                    <View style={{ padding: 8 }}>
                        <Text style={{ width: 100, padding: 8, color: 'white', fontWeight: '200', backgroundColor: 'green', alignItems: 'center', textAlign: 'center' }}>ACTIVE</Text>
                    </View>
                </View>
            </Card>
            <FAB
                icon="plus"
                style={{
                    position: 'absolute',
                    margin: 16, backgroundColor: 'orange',
                    right: 0,
                    bottom: 0,
                   
                }}
                color="white"
                
                onPress={() => console.log('Pressed')}
            />
        </View>

    )
}

export default EmployeeList*/

