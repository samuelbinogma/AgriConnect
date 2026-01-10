import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>

            <TextInput 
                style={styles.input}
                placeholder="Email or Phone"
                placeholderTextColor='#aaa'
            />

            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor='#aaa'
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
                <Text style={styles.link}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}
