import React from "react";
import { View,StyleSheet } from 'react-native'
import { Card, TextInput } from "react-native-paper";

const CustomInput = ({label,onChangeText,value}) => {
    return (
        
            <Card style={{marginVertical:10}}>
                <TextInput
                style={styles.container}
                    label={label}
                    value={value}
                    onChangeText={onChangeText}
                    theme={{colors:{primary:'grey',placeholder:'orange'}}}
                    mode='outlined'
                    //defaultValue={defaultValue}
                    editable={true}
                />
            </Card>

       
    )
}

const styles = StyleSheet.create({
    container:{
     

    }
})

export default CustomInput