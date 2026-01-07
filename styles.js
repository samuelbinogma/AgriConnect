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
        marginTop: 20,
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
    },

    // Product Card Styles
    productCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#e8f5e9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    photoPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#e0f2e9',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    photoText: {
        fontSize: 12,
        color: '#4CAF50',
        textAlign: 'center',
    },
    productInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1b5e20',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        color: '#2e7d32',
        marginTop: 4,
    },
    productFarmer: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },

    messageButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    messageButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },

    // floating action button
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#4CAF50',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    }
});