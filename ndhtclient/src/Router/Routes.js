import UserManual from "../Pages/UserManual";
import Main from "../Pages/Main";
import NormalDestribution from "../Pages/NormalDestribution";
import About from "../Pages/About";

export const publicRoutes = [
    {path: '/', component : <Main/>, exact: true},
    {path: '/userManual', component : <UserManual/>, exact: true},
    {path: '/normalDestribution', component : <NormalDestribution/>, exact: true},
    {path: '/about', component : <About/>, exact: true}
];