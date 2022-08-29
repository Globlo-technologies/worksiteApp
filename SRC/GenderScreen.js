import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { Card } from 'react-native-paper'
import SelectList from 'react-native-dropdown-select-list'



/*const GenderSelect = ({data,setSelected,value}) => {
    return (
        <Card style={{}}>
            <SelectList 
            data={data}
            //onSelect={onSelect}
            value={value}
            setSelected={setSelected}
            boxStyles={{borderColor:'orange',height:50}}
            inputStyles={{fontSize:15,color:'grey'}}
            dropdownStyles={{borderColor:'orange'}}
            dropdownItemStyles={{color:'orange'}}
            dropdownTextStyles={{color:'orange'}}
            placeholder='Gender'
            placeholderColor='orange'
            //arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />}
           // maxHeight={50}
            />
        </Card>

    )
}



export default GenderSelect*/

const GenderSelect = ({ value, onChange ,options}) => {

    return (
        
            <Card style={{ marginVertical: 10 }}>
                <SelectBox
                    label='Gender'
                    options={options}
                    value={value}
                    onChange={onChange}
                    hideInputFilter={true}
                    labelStyle={{ color: 'red', }}
                    containerStyle={{ borderColor: 'orange', borderRadius: 10 }}
                    isMulti={false}
                    viewMargin='100%'
                    //inputFilterContainerStyle	={{color:'orange'}}
                    //inputFilterStyle	={{backgroundColor:'red'}}
                    optionsLabelStyle={{ color: 'orange' }}
                    optionContainerStyle={{ borderRadius: 10 }}
                    arrowIconColor='orange'
                    searchIconColor='orange'
                    listOptionProps={{
                        borderColor: 'red'
                    }}
                    selectedItemStyle={{ color: 'grey' }}
                />


            </Card>

       
    )
}

export default GenderSelect