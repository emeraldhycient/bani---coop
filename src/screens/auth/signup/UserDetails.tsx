import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import CountryPicker from 'react-native-country-picker-modal'


const UserDetails = ({ navigation }: any) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <CustomHeader title='User Details' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{
                    backgroundColor: "#6922D10A", paddingHorizontal: 20, borderRadius: 20, paddingVertical: 10, width: 90, marginBottom: 10
                }}>
                    <CustomText style={{ fontSize: 14, color: Colors.primary, textAlign: 'left' }}>Step 2/3</CustomText>
                </View>
                <CustomText style={styles.header}>Add Personal Information 📖</CustomText>
                
                <CustomText style={{ marginVertical: 10 }}>Full Name</CustomText>
                <CustomTextInput placeholder="First Name" />
                <CustomText style={{ marginVertical: 10 }}>Full Name</CustomText>
                <CustomTextInput placeholder="Last Name" />
                <CustomText style={{ marginVertical: 10 }}>Full Name</CustomText>
                <CustomTextInput placeholder="Username" />
                <Button title='Create Account' onPress={() => navigation.navigate("Login")} br={6} h={50} color={Colors.white} bg={Colors.primary} mt={20} />
            </View>
        </View>
    )
}

export default UserDetails

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 32,
        textAlign: "left",
        marginBottom: 30
    }
})