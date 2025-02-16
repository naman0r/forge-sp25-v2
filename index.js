import { registerRootComponent } from "expo";

import AppNavigator from "./navigation/Navigation.js";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppNavigator);
