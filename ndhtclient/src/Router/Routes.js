import UserManual from "../Pages/UserManual";
import Main from "../Pages/Main";
import NormalDestribution from "../Pages/NormalDestribution";
import Other from "../Pages/Other";

export const publicRoutes = [
    {path: '/', component : <Main/>, exact: true},
    {path: '/userManual', component : <UserManual/>, exact: true},
    {path: '/normalDestribution', component : <NormalDestribution/>, exact: true},
    {path: '/other', component : <Other/>, exact: true}
];