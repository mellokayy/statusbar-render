import { createStackNavigator } from 'react-navigation-stack';
import HomePage from "./HomePage"
import ExamplePage from "./ExamplePage" 

const rotas = [
    { name: 'HomePage', component: HomePage },
    { name: 'ExamplePage', component: ExamplePage },
]

export default () => {
    const routeConfigMap = rotas.reduce((acc, rota) => {
        acc[rota.name] = rota.component;
        return acc;
    }, {});

    return createStackNavigator(routeConfigMap, {
        initialRouteName: 'HomePage',
        headerMode: 'none',
        defaultNavigationOptions: {
            animationEnabled: false
        }
    });
}