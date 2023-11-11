import { View, Image, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/common/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../theme/colors';
import CategoryPills from '../../components/dashboard/CategoryPills';
import StreamCard from './streamCard';
import CustomText from '../../components/common/CustomText';
import { SafeAreaView } from 'react-native';

const Dashboard = ({ navigation }: any) => {

    const categories = ['Books', 'Electronics', 'Clothing', 'Games', 'Music', 'Sports'];

    // State to hold the selected category
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    return (
        <ScrollView>
            <SafeAreaView >
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: Platform.OS === "android" ? 40 :20, paddingHorizontal: 20 }}>
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
})

export default Dashboard