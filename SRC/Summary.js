import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Card } from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons";
import CustomButton from './CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Summary = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const [image, setImage] = useState(null)
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [site, setSite] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [town, setTown] = useState('')
    const [state, setState] = useState('')
    const [aadharno, setAadharno] = useState('')
    const [occupation, setOccupation] = useState('')
    const [date, setDate] = useState("")
    const [salaryStructure, setSalaryStructure] = useState("")
    const [certification, setCertification] = useState('')
    const [image1, setImage1] = useState(null)
    const [certificateImage, setCertificateImage] = useState(null)
    const [address_1, setAddress_1] = useState('')
    const [address_2, setAddress_2] = useState("")
    const [town_1, setTown_1] = useState("")
    const [state_1, setState_1] = useState('')
    const [isSelected, setSelection] = useState(false);

    const findUser = async () => {
        const result = await AsyncStorage.getItem('user').then(val => {
            let user = JSON.parse(val)
            setFname(user.fname)
            setLname(user.lname)
            setPhone(user.phone)
            setGender(user.gender)
            setSite(user.site)
            console.log(user)

        })
    }
    const findImage = async () => {
        const result = await AsyncStorage.getItem('userImage').then(val => {
            let userImage = JSON.parse(val)
            setImage(userImage)
            console.log(userImage)
        })
    }
    /*  const findImage = async () => {
          const result = await AsyncStorage.getItem('userImage')
          //.then((res)=> {res.json()})
          //.then(image=>setImage(image))
          console.log(result.uri)
      }*/

    const findImage1 = async () => {
        const result = await AsyncStorage.getItem('userImage1').then(val => {
            let userImage1 = JSON.parse(val)
            setImage1(userImage1)
            console.log(userImage1)
        })
    }
    const findImage2 = async () => {
        const result = await AsyncStorage.getItem('userImage2').then(val => {
            let userImage2 = JSON.parse(val)
            setCertificateImage(userImage2)
            console.log(userImage2)
        })
    }
    const findAddress = async () => {
        const result = await AsyncStorage.getItem('userAddress').then(val => {
            let userAddress = JSON.parse(val)
            setAddress1(userAddress.address1)
            setAddress2(userAddress.address2)
            setTown(userAddress.town)
            setState(userAddress.state)
            setAadharno(userAddress.aadharno)
            console.log(userAddress)
        })
        //console.log(result)
    }
    const findAddress_1 = async () => {
        const result = await AsyncStorage.getItem('userAddress_1').then(val => {
            let userAddress_1 = JSON.parse(val)
            setAddress_1(userAddress_1.address_1)
            setAddress_2(userAddress_1.address_2)
            setTown_1(userAddress_1.town_1)
            setState_1(userAddress_1.state_1)
            console.log(userAddress_1)
        })
        //console.log(result)
    }
    const findJob = async () => {
        const result = await AsyncStorage.getItem('userJob').then(val => {
            let userJob = JSON.parse(val)
            setOccupation(userJob.occupation)
            setSalaryStructure(userJob.salaryStructure)
            setCertification(userJob.certification)
            console.log(userJob)
        })
        //console.log(result)
    }

    useEffect(() => { findUser() }, [])
    useEffect(() => { findImage() }, [])
    useEffect(() => { findAddress() }, [])
    useEffect(() => { findAddress_1() }, [])
    useEffect(() => { findJob() }, [])
    useEffect(() => { findImage1() }, [])
    useEffect(() => { findImage2() }, [])

    const postUser = () => {
        const requestOptions = {
            method: 'POST',
            //method:'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
            },
            //'Authorization':'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
            body: JSON.stringify({
                //"id": 84,
                employeeCode: "STTECH00028",
                siteCode: "STTECH002",
                companyCode: "STTECH",
                aadharNumber: "12345",
                dateOfJoining: "2021-05-15T00:00:00.000+00:00",
                firstName: "Manikandan",
                gender: "Male",
                isCurrentAddressSame: "n",
                lastName: "Manikandan",
                occupation: "Plumber",
                phoneNumber: "9789066952",
                salaryStructure: "Weekly",
                siteName: "Tenkasi",
                status: "Active",
                certificateIds: "1,2",
                salary: 1000.0,
                addresses: [
                    {
                        //"addressId": 81,
                        addressLine1: "test",
                        addressLine2: "test",
                        addressLine3: "test",
                        employeeCode: "STTECH00022",
                        country: "India",
                        createdBy: "Mani",
                        createdDate: "2021-05-15T00:00:00.000+00:00",
                        pinCode: "600044",
                        state: "Tamilnadu",
                        town: "chennai",
                        updatedBy: "Mani",
                        updatedDate: "2021-05-15T00:00:00.000+00:00",
                        addressType: null
                    },
                    {
                        //"addressId": 82,
                        addressLine1: "test",
                        addressLine2: "test",
                        addressLine3: "test",
                        employeeCode: "STTECH00022",
                        country: "India",
                        createdBy: "Mani",
                        createdDate: "2021-05-15T00:00:00.000+00:00",
                        pinCode: "600044",
                        state: "Tamilnadu",
                        town: "chennai",
                        updatedBy: "Mani",
                        updatedDate: "2021-05-15T00:00:00.000+00:00",
                        addressType: null
                    }
                ],
                firtName: "Manikandan"
            })
        }
        // fetch('http://ec2-13-234-199-27.ap-south-1.compute.amazonaws.com:8082/wfm-employee/employee-management/v1/employeesByStatus/STTECH/Active ', requestOptions)
        //fetch('http://ec2-13-234-199-27.ap-south-1.compute.amazonaws.com:8086/wfm-products/products/v1/allproducts', requestOptions)
        fetch('http://ec2-13-234-199-27.ap-south-1.compute.amazonaws.com:8082/wfm-employee/employee-management/v1/employeeForACompany', requestOptions)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(response => { console.log(response) })
            .catch((error) => { console.log(error) })
    }

    return (
        <View style={{ backgroundColor: 'white' }}>
            <Text style={{ alignSelf: 'center' }}>Basic Details</Text>
            <Card style={{ padding: 10 }}>

                <View style={{ flexDirection: 'row', width: '80%' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Image style={{ height: 90, borderRadius: 5, width: 100, backgroundColor: '#ccc' }} source={{ uri: image }} alt="image" />
                    </View>
                    <View style={{ margin: 20 }}>
                        <View>
                            <Text style={{ marginRight: 20, fontSize: 16, paddingVertical: 5 }}>Name:{fname} {lname}</Text>
                            <Text style={{ marginRight: 20, fontSize: 16, paddingVertical: 5 }}>Gender:{gender.item} </Text>
                            <Text style={{ marginRight: 20, fontSize: 16, paddingVertical: 5 }}>Site:{site.item}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 16, paddingVertical: 5 }}>Phone:{phone}</Text>
                            <Icon name="call" color="black" size={25} />
                        </View>
                    </View>
                </View>
            </Card>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Permanent Address</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange' }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Address 1:{address1}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Address 2:{address2}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Town:{town}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>State:{state}</Text>
            </Card>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Current Address</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>

            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange' }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Address 1:{address1}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Address 2:{address2}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Town:{town}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>State:{state}</Text>
            </Card>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Aadhar Details</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange' }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Aadhar ID:{aadharno}</Text>
                <View>
                    <Image style={{ width: 190, height: 90, alignSelf: 'center', backgroundColor: '#ccc' }} source={{ uri: image1 }} />
                </View>
            </Card>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Job Details</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange' }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Occupation:{occupation}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Salary Structure:{salaryStructure.item}</Text>
            </Card>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginStart: 15 }} />
                <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15, color: 'orange' }}>Certifications</Text>
                <View style={{ backgroundColor: 'grey', height: 1, flex: 1, alignSelf: 'center', marginEnd: 15 }} />
            </View>
            <Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange', padding: 8 }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Certificate:{certification}</Text>
                <View>
                    <Image style={{ width: 100, height: 90, alignSelf: 'center', backgroundColor: '#ccc' }} source={{ uri: certificateImage }} />
                </View>
            </Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <CustomButton label='Save' onPress={() => navigation.navigate("EmpList")} />
                <CustomButton label='Submit' onPress={postUser} />
            </View>

        </View>
    )
}

export default Summary

//http://ec2-13-234-199-27.ap-south-1.compute.amazonaws.com:8082/wfm-employee/employee-management/v1/employeeForACompany
/*<Card style={{ borderLeftWidth: 2, borderLeftColor: 'orange' }}>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Address 1:{address1}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Address 2:{address2}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>Town:{town}</Text>
                <Text style={{ padding: 5, marginBottom: 5, fontSize: 18 }}>State:{state}</Text>
            </Card>
 */