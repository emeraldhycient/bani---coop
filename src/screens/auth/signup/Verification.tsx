import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../theme/colors';
import CustomText from '../../../components/common/CustomText';
import Button from '../../../components/common/button';
import { useEffect, useState } from 'react';
import OTPInput from 'react-native-otp';


const Verification = ({ navigation, route }: any) => {
    const params = route.params
    const [value, setValue] = useState("");

    useEffect(() => {
        value.length === 6 && navigation.navigate("UserDetails")
    }, [value])


    return (
        <>
            <CustomHeader title=' ' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
            <View style={styles.container}>
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
        </>
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: Colors.white,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 32,
        textAlign: "left",
        marginBottom: 5
    },
    subheader: {
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 24,
        textAlign: "left",
        marginBottom: 30
    }
})