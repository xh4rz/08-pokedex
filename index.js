/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { PokedexApp } from './src/presentation/PokedexApp';

AppRegistry.registerComponent(appName, () => PokedexApp);
