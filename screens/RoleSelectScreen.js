import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles} from '../allStyles/RoleSelectionStyle'

export default function RoleSelectionScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Ionicons name="leaf" size={80} color="#4CAF50" style={styles.icon} />

            <Text style={styles.title}>Welcome to Agricultural Connect</Text>
            <Text style={styles.subtitle}>Choose your role to get started</Text>

            <TouchableOpacity
                style={[styles.roleButton, styles.farmerButton]}
                onPress={() => navigation.navigate('SignUp', { role: 'farmer' })}
            >
                <Ionicons name="tractor" size={40} color="white" />
                <Text style={styles.roleButtonText}>I'm a Farmer</Text>
                <Text style={styles.roleDesc}>Sell your fresh produce directly</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.roleButton, styles.farmerButton]}
                onPress={() => navigation.navigate('SignUp', { role: 'farmer' })}
            >
                <Ionicons name="cart" size={40} color="#4CAF50" />
                <Text style={styles.roleButtonTextCustomer}>I'm a Customer</Text>
                <Text style={styles.roleDesc}>Buy fresh from local farmers</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Already have an account? Log In</Text>
            </TouchableOpacity>
        </View>
    )
}