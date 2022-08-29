import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const CustomCheckBox = ({value,onValueChange}) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={value}
          onValueChange={onValueChange}
          style={styles.checkbox}
          //tintColors={{true:'grey',false:'white'}}
         // onCheckColor={'black'}
        />
        <Text style={styles.label}>Same as Permanent Address</Text>
     </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    //padding:8
  },
  checkbox: {
    //alignSelf: "flex-start",
    height:20,
    width:20,
    marginTop:9
    //borderWidth:1,
   // backgroundColor:'white'
    
    
  },
  label: {
    margin: 8,
    marginRight:10

  },
});

export default CustomCheckBox;