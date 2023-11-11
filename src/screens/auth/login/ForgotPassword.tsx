import { StyleSheet, Image, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Switch, TextInput, TouchableRipple } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import OTPInput from 'react-native-otp';

const ForgotPassword = ({ navigation }: any) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = React.useState(false);
    const [steps, setsteps] = useState(1)
    const [value, setValue] = useState("");

    useEffect(() => {
        value.length === 6 && setsteps(3)
    }, [value])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <CustomHeader title={" "} leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
            {
                steps === 1 ?
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <CustomText style={styles.header}>Reset Your Password</CustomText>
                        <CustomText style={{ marginBottom: 10 }}>Email Address</CustomText>
                        <CustomTextInput placeholder="Enter your email address" />
                        <View style={{ width: "100%", marginHorizontal: "auto", height: 100, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
                            <Button title='Reset Password' onPress={() => setsteps(2)} br={6} h={50} color={Colors.white} bg={Colors.primary} />

                        </View>
                    </View>
                    : null
            }
            {
                steps === 2 ?
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <CustomText style={styles.header}>Verify your account</CustomText>
                        <CustomText style={styles.subheader}>A 6 digit OTP was shared to hi.dominic@gmail.com. Input here to continue.</CustomText>
                        <View style={{ width: "100%", marginHorizontal: "auto", height: 115, flexDirection: "column", justifyContent: "space-between" }}>
                            <OTPInput
                                value={value}
                                onChange={(text: string) => {
                                    setValue(text)
                                    console.log(text)
                                }}
                                tintColor="#FB6C6A"
                                offTintColor="#BBBCBE"
                                otpLength={6}
                                cellStyle={{ borderRadius: 12, height: 50, width: 50, borderColor: Colors.grey, borderWidth: 0.6 }}
                            />
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                                <CustomText style={{ fontSize: 14, color: Colors.grey, textAlign: 'left', marginVertical: 20, marginLeft: 10 }}>Didn't get code?</CustomText>
                                <View style={{
                                    backgroundColor: "#6922D10A", paddingHorizontal: 20, borderRadius: 20, paddingVertical: 10
                                }}>
                                    <CustomText style={{ fontSize: 14, color: Colors.primary, textAlign: 'left' }}>Resend Code</CustomText>
                                </View>
                            </View>
                            {/* <Button title='Confirm' onPress={() => navigation.navigate("UserDetails")} br={12} h={50} color={Colors.white} bg={Colors.primary} /> */}
                        </View>
                    </View>
                    : null
            }
            {
                steps === 3 ?
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <CustomText style={{ marginVertical: 10 }}>New Password </CustomText>
                        <CustomTextInput placeholder="Password" right={
                            <TextInput.Icon
                                icon={secureTextEntry ? "eye" : "eye-off"}
                                onPress={() => {
                                    setSecureTextEntry(!secureTextEntry);
                                    return false;
                                }}
                                color={Colors.gray}
                            />
                        }
                            style={{ marginBottom: 10 }}
                        />
                        <CustomText style={{ marginVertical: 10 }}>Confirm Password</CustomText>
                        <CustomTextInput placeholder="Update Password" right={
                            <TextInput.Icon
                                icon={secureTextEntry ? "eye" : "eye-off"}
                                onPress={() => {
                                    setSecureTextEntry(!secureTextEntry);
                                    return false;
                                }}
                                color={Colors.gray}
                            />
                        } />

                        <View style={{ width: "100%", marginHorizontal: "auto", height: 100, flexDirection: "column", justifyContent: "space-between", marginTop: 20 }}>
                            <Button title='Update Now' onPress={() => navigation.navigate("Login")} br={6} h={50} color={Colors.white} bg={Colors.primary} />
                        </View>
                        <View style={{ width: "90%" }}>
                            <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>By continuing, you agree to our  <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Terms of Service , Broadcaster Agreement & Privacy Policy</CustomText></CustomText>
                        </View>
                    </View>
                    : null
            }
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 32,
        textAlign: "left",
        marginBottom: 10,
    },
    subheader: {
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: "left",
        marginBottom: 30
    }
})