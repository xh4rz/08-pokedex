import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { PokemonScreen } from '../screens/pokemon/PokemonScreen';

export type RootStackParams = {
	HomeScreen: undefined;
	PokemonScreen: { pokemonId: number };
	SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="PokemonScreen" component={PokemonScreen} />
			<Stack.Screen name="SearchScreen" component={SearchScreen} />
		</Stack.Navigator>
	);
};
