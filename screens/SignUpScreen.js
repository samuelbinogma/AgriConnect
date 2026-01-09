import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../allStyles/signUpStyle";

export default function SignUpScreen({ route, navigation }) {
    const { role } = route.params || { role: 'customer' };

    const roleTitle = role === 'farmer' ? 'farmer Sign Up' : 'Customer Sign Up';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{roleTitle}</Text>

            <TextInput 
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor='#aaa'
            />

            <TextInput 
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor='#aaa'
                keyboardType="phone-pad"
            />

            <TextInput 
                style={styles.input}
                placeholder="Email"
                placeholderTextColor='#aaa'
                keyboardType="email-address"
            />

            <TextInput 
                style={styles.input}
                placeholder="Password"
                placeholderTextColor='#aaa'
                secureTextEntry
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backLink}>Back to role selection</Text>
            </TouchableOpacity>
            
        </View>
    );
}