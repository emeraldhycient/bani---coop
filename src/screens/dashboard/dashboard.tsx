import { View, Image, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../components/common/Header'
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../theme/colors';
import CategoryPills from '../../components/dashboard/CategoryPills';
import StreamCard from './streamCard';
import CustomText from '../../components/common/CustomText';
import { SafeAreaView } from 'react-native';
import Button from '../../components/common/button';

const Dashboard = ({ navigation }: any) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);


    return (
        <ScrollView>
            <SafeAreaView >
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: Platform.OS === "android" ? 40 : 20, paddingHorizontal: 20 }}>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                        <Image source={require("../../../assets/images/dashboard/user.png")} style={{ width: 38, height: 38 }} />
                        <View style={{ paddingLeft: 17 }}>
                            <CustomText style={styles.subtext}>Welcome back  👋</CustomText>
                            <CustomText style={styles.title}>@theezemmuo</CustomText>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                        <Image source={require("../../../assets/images/dashboard/MESSAGE.png")} style={{ width: 38, height: 38 }} />
                        <Image source={require("../../../assets/images/dashboard/NOTIFICATION.png")} style={{ width: 38, height: 38 }} />
                    </View>
                </View>
            </SafeAreaView>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <CustomText style={styles.subtext}>Account Balance</CustomText>
                    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Feather name={secureTextEntry ? "eye" : "eye-off"} color={Colors.primary} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>
                <CustomText style={styles.balance}>₦360,000.00</CustomText>
                <View style={{ width: "100%", marginHorizontal: "auto", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <View style={{ width: "45%" }}>
                        <Button onPress={() => { }} br={100} h={50} color={Colors.white} bg={Colors.primary} >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image source={require("../../../assets/images/dashboard/send.png")} style={{ height: 20, width: 20, marginRight: 5 }} />
                                <CustomText style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, textAlign: "center", color: Colors.white }}>Transfer Money</CustomText>
                            </View>
                        </Button>
                    </View>
                    <View style={{ width: "45%" }}>
                        <Button bg='#6922D105' br={100} onPress={() => navigation.navigate("Login")} style={{ backgroundColor: "#6922D11A", borderColor: "#6922D11A", borderWidth: 0.5, width: "100%", borderRadius: 6, height: 50, justifyContent: "center", alignItems: "center", alignSelf: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                                <Image source={require("../../../assets/images/dashboard/card-add.png")} style={{ height: 20, width: 20, marginRight: 5 }} />
                                <CustomText style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Receive Money</CustomText>
                            </View>
                        </Button>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ width: "70%" }}>
                        <CustomText style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, textAlign: "left", color: Colors.primary }}>Account Verification</CustomText>
                        <CustomText style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, textAlign: "left", color: Colors.grey, marginVertical: 10 }}>Verify your account and enjoy no limit on transactions.</CustomText>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <CustomText style={{ fontSize: 14, fontWeight: '400', lineHeight: 24, textAlign: "left", color: Colors.primary }}>Get Started</CustomText>
                            <Feather name={"arrow-right"} color={Colors.primary} style={{ marginLeft: 10 }} />
                        </View>
                    </View>
                    <Image source={require("../../../assets/images/dashboard/time.png")} style={{ height: 100, width: "30%", marginRight: 5 }} />
                </View>
                <View>
                    <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", marginTop: 20 }}>
                        <CustomText style={styles.title}>Quick Actions</CustomText>
                        <CustomText style={styles.subtext}>View All</CustomText>
                    </View>
                    <View style={styles.card2}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/images/dashboard/phone.png")} style={{ height: 40, width: 40, marginRight: 5 }} />
                            <CustomText style={styles.quickActionTitle}>Buy Airtime</CustomText>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/images/dashboard/bill.png")} style={{ height: 40, width: 40, marginRight: 5 }} />
                            <CustomText style={styles.quickActionTitle}>Bills & Utilities</CustomText>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/images/dashboard/savings.png")} style={{ height: 40, width: 40, marginRight: 5 }} />
                            <CustomText style={styles.quickActionTitle}>Easy Savings</CustomText>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", marginTop: 20 }}>
                        <CustomText style={styles.title}>Recent Transaction</CustomText>
                        <CustomText style={styles.subtext}>View All</CustomText>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 32,
        textAlign: "center",
    },
    subtext: {
        fontSize: 11,
        fontWeight: "300",
        lineHeight: 14,
        textAlign: "left",
        color: "#1D2329"
    },
    balance: {
        fontSize: 30,
        fontWeight: "700",
        lineHeight: 36,
        marginVertical: 17
    },
    card: {
        backgroundColor: "#6922D105",
        width: "100%",
        height: 144,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    card2: {
        backgroundColor: "#6922D105",
        width: "100%",
        height: 104,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#6922D11A",
        paddingHorizontal: 10
    },
    quickActionTitle: {
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 20,
        textAlign: "center",
        marginTop: 5
    }
})

export default Dashboard