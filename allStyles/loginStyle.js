import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        backgroundColor: '#f5f9f5',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1b5e20',
        marginBottom: 40,
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 24,
        textAlign: 'center',
        color: '#4CAF50',
        fontSize: 16,
    }
})