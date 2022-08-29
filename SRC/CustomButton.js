import React from "react";
import { View, StyleSheet } from 'react-native'
import { Card, Button } from "react-native-paper";

const CustomButton = ({ label, onPress }) => {
    return (
       
            <Card style={{marginTop:25}}>
                <Button
                    style={{ marginHorizontal: 15, width: '80%', alignSelf: 'center', height: 45, borderRadius: 10,justifyContent:'center',elevation:4 }}
                    theme={{ colors: { primary: 'orange' } }}
                    //icon='content-save'

                    mode='contained'
                    onPress={onPress}>{label}
                </Button>
            </Card>

       
    )
}

export default CustomButton


