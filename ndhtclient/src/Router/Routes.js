import About from "../Pages/About";
import Main from "../Pages/Main";
import NormalDestribution from "../Pages/NormalDestribution";

export const publicRoutes = [
    {path: '/', component : <Main/>, exact: true},
    {path: '/about', component : <About/>, exact: true},
    {path: '/normalDestribution', component : <NormalDestribution/>, exact: true}
];