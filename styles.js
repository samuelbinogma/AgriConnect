import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f7f0',
    },

    homeContainer: {
        flex: 1,
        backgroundColor: '#f5f9f5',
        padding: 20,
    },

    icon: {
        marginBottom: 20,
    },

    welcomeTitle: {
        fontSize: 28,
        color: '#4CAF50',
        fontWeight: '500',
    },

    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: '10',
    },

    subtitle: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginTop: 10,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginTop: 30,
        marginBottom: 10,
        alignSelf: 'flex-start',
        paddingHorizontal: 20
    }
})