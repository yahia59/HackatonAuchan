import { ConsoPage } from './conso/conso';
import { SportPage } from './sport/sport';
import { TabsPage } from './tabs/tabs';
import {MenusPage} from "./menus/menus";
import {TutorialPage} from "./tutorial/tutorial";

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs²
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ConsoPage;
export const Tab2Root = SportPage;
export const Tab3Root = MenusPage;
