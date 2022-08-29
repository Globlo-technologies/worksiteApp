import React, { useEffect, useState } from 'react'
import { Pressable, View, Text, Image, Button } from 'react-native'
//import { Card } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
//import * as Permissions from 'expo-permissions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ImageAdd = () => {
    const [image, setImage] = useState('')

    const onPress = () => {
        onHandle()
        pickImage()
    }
    const onHandle = async () => {
        const userImage = { image: image }
        await AsyncStorage.setItem('userImage', JSON.stringify(userImage))
        //await AsyncStorage.setItem('userImage', userImage)
        console.log('saved')
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1,1],
            quality:0.5,
        });

        console.log(result);

        if (!result.cancelled) {
            //let newFile={uri:result.uri}
            //handleUpload()
            setImage(result.uri);
        }
    };

    /*const handleUpload=(image)=>{
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeApp')
        data.append('cloud_name','vasanthaprabha81')
    
        fetch('https://api.cloudinary.com/v1_1/vasanthaprabha81/image/upload',{
            method:'POST',
            body:data
        }).then(res=>res.json()).then(data=>{console.log(data)})
    }*/
    //const uri = image?.assets && image.assets[0].uri;
    return (
        <View style={{ flex: 1 }}>
            <Pressable
                style={{ height: 150, alignItems: 'center', borderStyle: 'dashed', borderColor: 'grey', borderWidth: 1, justifyContent: 'center' }}
                //onPress={() => console.log("Image")}
                onPress={onPress}
            >
                <View style={{ width: '80%', height: 90 }}>
                    <Text style={{ alignSelf: 'center', color: 'orange' }}>
                        {image == '' ? '+Add Profile Image' : 'Image Uploaded'}</Text>
                    <Image source={{ uri: image }} style={{ width: "100%", height: 120, resizeMode: 'cover' }} />
                </View>
            </Pressable>
        </View>
    )
}
export default ImageAdd

/* <Pressable
               style={{ height: 150, alignItems: 'center', borderStyle: 'dashed', borderColor: 'grey', borderWidth: 1, justifyContent: 'center' }}
               //onPress={() => console.log("Image")}
               onPress={pickImage}
           >
               <Text style={{ alignSelf: 'center', color: 'orange' }}>+ Add Profile Image</Text>
               {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
           </Pressable>*/
/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',width:"100%" }}>
     <Button title="Pick an image from camera roll" onPress={pickImage} />
     {image && <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:100 }} />}
 </View>*/
