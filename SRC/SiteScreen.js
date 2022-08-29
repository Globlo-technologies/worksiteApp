import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { Card } from 'react-native-paper'
//import Select from 'react-select';
//import SelectList from 'react-native-dropdown-select-list'



const SiteSelect = ({ options, value, onChange,label }) => {


    return (
       
            <Card style={{ marginVertical: 10 }}>
                <SelectBox
                    label={label}
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

export default SiteSelect


