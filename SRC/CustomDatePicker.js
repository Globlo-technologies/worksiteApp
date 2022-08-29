import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from "react-native-vector-icons/Ionicons";

const CustomDate = () => {
    const onPress = () => {
        onHandle()
        openDatePicker()
    }
    const onHandle = async () => {
        const userDate = { date: date }
        await AsyncStorage.setItem('userDate', JSON.stringify(userDate))
        console.log('saved')
    }

    const [showDatePicker, setShowDatePicker] = useState(false)
    const [date, setDate] = useState("")
    const openDatePicker = () => {
        setShowDatePicker(true)
    }

    const onCancel = () => {
        // You should close the modal in here
        setShowDatePicker(false)
    }

    const onConfirm = (output) => {
        // You should close the modal in here
        setShowDatePicker(false)
        setDate(output.dateString)

        // The parameter 'output' is an object containing date and dateString (for single mode).
        // For range mode, the output contains startDate, startDateString, endDate, and EndDateString
        console.log(output.date)
        console.log(output.dateString)

    }

    return (
        <View style={styles.container}>
            
            <View style={{ borderWidth:1,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 60,borderColor:'orange',borderRadius:5 }}>
                <TextInput
                    placeholder='Date of Joining'
                    value={date}
                    onChangeText={setDate}
                    style={{ padding: 10 }}

                />
                <Icon name="calendar" color="black" size={25} onPress={onPress} />

            </View>

            <DatePicker
                date={date}
                onDateChange={setDate}
                isVisible={showDatePicker}
                //value={dateOfJoin}
                mode={'single'}
                onCancel={onCancel}
                onConfirm={onConfirm}
                //initialDate={new Date()}
                dateStringFormat='dd/MM/yyyy'
            />

        </View>
    )
}

export default CustomDate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //justifyContent: 'center',
        alignItems: 'center'
    }
})
