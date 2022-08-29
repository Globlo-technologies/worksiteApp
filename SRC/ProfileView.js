import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
//import Data from '../SRC/Data/EmployeeDetails.json'
import Icon from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";

const ProfileView = () => {
    const route = useRoute()

    const renderList = (item) => {
        return (
            <View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>{item.address}</Text>
                    <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
                </View>
                <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange', marginVertical: 20 }}>
                    <Text style={{ padding: 5, marginBottom: 1, fontSize: 18 }}>{item.addressLine1}</Text>
                    <Text style={{ padding: 5, marginBottom: 1, fontSize: 18 }}>{item.addressLine2}</Text>
                    <Text style={{ padding: 5, marginBottom: 1, fontSize: 18 }}>{item.town}</Text>
                    <Text style={{ padding: 5, marginBottom: 1, fontSize: 18 }}>{item.state}</Text>
                </Card>
            </View>
        )
    }

    return (
        <View>
            <Text style={{ alignSelf: 'center' }}>Basic Details</Text>
            <View style={{ flexDirection: 'row', width: '80%' }}>
                <View style={{ justifyContent: 'center' }}>
                    <Image style={{ height: 90, borderRadius: 45, width: 90, backgroundColor: '#ccc' }} source={{}} alt="image" />
                </View>
                <View style={{ margin: 20 }}>
                    <View>
                        <Text style={{ marginRight: 20, fontSize: 16, paddingVertical: 2 }}>{route.params.item.firstName} {route.params.item.lastName}</Text>
                        <Text style={{ marginRight: 20, fontSize: 16, paddingVertical: 2 }}>{route.params.item.gender} </Text>
                        <Text style={{ marginRight: 20, fontSize: 16, paddingVertical: 2 }}>{route.params.item.siteName}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 16, paddingVertical: 5 }}>{route.params.item.phoneNumber}</Text>
                        <Icon name="call" color="black" size={25} />
                    </View>
                </View>
            </View>
            <FlatList keyExtractor={data => `${data.addressId}`}
                data={route.params.item.addresses}
                renderItem={({ item }) => {
                    return renderList(item)
                }} />

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Aadhar Details</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange', marginVertical: 25 }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Aadhar ID : {route.params.item.aadharNumber}</Text>
            </Card>
            <View>
                <Image style={{ width: "100%", height: 70, alignSelf: 'center', backgroundColor: '#ccc', borderRadius: 5 }} source={{}} />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Job Details</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange', marginTop: 25 }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Occupation:{route.params.item.occupation}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Salary Structure:{route.params.item.salaryStructure}</Text>
            </Card>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Certification</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange', padding: 8, marginVertical: 25 }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Certificate:{route.params.item.certificateIds}</Text>
            </Card>
            <View>
                <Image style={{ width: '100%', height: 90, alignSelf: 'center', borderRadius: 5, backgroundColor: '#ccc' }} source={{}} />
            </View>

        </View>
    )
}

export default ProfileView