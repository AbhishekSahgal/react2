import { registerRootComponent } from 'expo';
import App from './App';

// The following line is unnecessary in Expo
// import { AppRegistry } from 'react-native';
// import { name as target } from './app.json';

// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
