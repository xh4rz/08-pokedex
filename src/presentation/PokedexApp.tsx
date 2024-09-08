import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigator/StackNavigator';

export const PokedexApp = () => {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
};
