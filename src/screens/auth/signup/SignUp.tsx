import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';

const SignUp = ({ navigation }: any) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <CustomHeader title=' ' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{
          backgroundColor: "#6922D10A", paddingHorizontal: 20, borderRadius: 20, paddingVertical: 10,width:90,marginBottom:10
        }}>
          <CustomText style={{ fontSize: 14, color: Colors.primary, textAlign: 'left' }}>Step 1/3</CustomText>
        </View>
        <CustomText style={styles.header}>Create Account ☺️</CustomText>
        <CustomText style={{ marginVertical: 10 }}>Phone Number</CustomText>
        <CustomTextInput placeholder="000 000 0000" />
        <CustomText style={{ marginVertical: 10 }}>Create Password </CustomText>
        <CustomTextInput placeholder="Password" right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye" : "eye-off"}
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
              return false;
            }}
            color={Colors.gray}
          />
        } />
        <View style={{ width: "100%", marginHorizontal: "auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 }}>
          <Switch
            value={checked}
            onValueChange={() => {
              setChecked(!checked);
            }}
            color={Colors.accent}
          />
          <View style={{ width: "90%" }}>
            <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>By continuing, you agree to our  <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Terms of Service , Broadcaster Agreement & Privacy Policy</CustomText></CustomText>
          </View>
        </View>
        <Button title='Create an Account' onPress={() => navigation.navigate("Verification")} br={6} h={50} color={Colors.white} bg={Colors.primary} mb={15} />
        <Button bg='white' onPress={() => navigation.navigate("Login")} style={{ backgroundColor: "white", borderColor: Colors.primary, borderWidth: 0.5, width: "100%", borderRadius: 6, height: 50, justifyContent: "center", alignItems: "center", alignSelf: "center" }} >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Got an Account? Sign In</CustomText>
          </View>
        </Button>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 32,
    textAlign: "left",
    marginBottom: 30
  }
})