import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./Screens/RecentExpenses";
import AllExpenses from "./Screens/AllExpenses";
import ManageExpense from "./Screens/ManageExpense";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "./Constants/Styles";
import IconButton from "./Util/IconButton";
import ExpenseContextProvider from "./Store/ExpenseContext";
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
function BottomTab({ navigation }) {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name="md-add"
            size={35}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
        headerRightContainerStyle: { marginRight: 14 },
      }}
    >
      <Bottom.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContextProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={BottomTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpense}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}
