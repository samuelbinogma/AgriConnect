import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f9f5',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: { marginBottom: 20 },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1b5e20',
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 40,
        textAlign: 'center'
    },
    roleButton: {
        width: '100%',
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    farmerButton: {
        backgroundColor: '#4CAF50',
    },
    customerButton: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#4CAF50',
    },
    roleButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CAF50'
    },
    roleButtonTextCustomer: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginTop: 12,
    },
    roleDesc: {
        fontSize: 14,
        color: '#eee',
        marginTop: 8,
        textAlign: 'center',
    },
    loginLink: {
        marginTop: 20,
        color: '#4CAF50',
        fontSize: 16,
        fontWeight: '500',
    },
});