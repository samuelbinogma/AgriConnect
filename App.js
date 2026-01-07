import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';

const fakeProducts = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: '$4',
    unit: 'kg',
    farmer: 'Sunrise Farm'
  },
  {
    id: '2',
    name: 'Organic Potatoes',
    price: '$5',
    unit: 'kg',
    farmer: 'Green Valley'
  },
  {
    id: '3',
    name: 'Red Onions',
    price: '$3.5',
    unit: 'kg',
    farmer: 'River Side Farm'
  },
  {
    id: '4',
    name: 'Fresh Carrots',
    price: '$2.5',
    unit: 'kg',
    farmer: 'Believe Fields'
  },

]

// --- Placeholder Screens (we'll fill them later) ---
function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Ionicons name="leaf" size={80} color="#4CAF50" style={styles.icon} />

      <Text style={styles.welcomeTitle}>Welcome to</Text>
      <Text style={styles.appName}>Agricultural Connect</Text>

      <Text style={styles.subtitle}>
        Fresh produce directly from local farmers
      </Text>

      <Text style={styles.sectionTitle}>Available Nearby</Text>

      <FlatList 
        data={fakeProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View style={styles.photoPlaceholder}>
              <Text style={styles.photoText}>{item.name}</Text>
            </View>

            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>
                {item.price} / {item.unit}
              </Text>
              <Text style={styles.productFarmer}>by {item.farmer}</Text>

              <TouchableOpacity
                style={styles.messageButton}
                onPress={() => alert(`Message sent to ${item.farmer}`)}
              >
                <Text style={styles.messageButtonText}>Message Farmer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 30}} 
      />

      {/* Floating action button for farmers only */}
      {isFarmer && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => alert("Add new Product")}
        >
          <Ionicons name="add" size={32} color="white" />
        </TouchableOpacity>
      )}

    </View>
  );
}

function ExploreScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Explore</Text>
    </View>
  );
}

function MessagesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Messages</Text>
    </View>
  );
}

function DashboardScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Farmer Dashboard</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>My Profile</Text>
    </View>
  );
}

// --- Bottom Tab Navigator ---
const Tab = createBottomTabNavigator();

// Fake user role (later we'll make this changeable)
const isFarmer = true; // change to false to see customer version

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'leaf' : 'leaf-outline';
            } else if (route.name === 'Explore') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',    // green
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f9f9f9' },
          headerShown: false, // hide top header
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />

        {isFarmer ? (
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
        ) : (
          <Tab.Screen name="Profile" component={ProfileScreen} />
        )}
      </Tab.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

