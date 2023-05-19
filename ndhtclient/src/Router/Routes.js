import About from "../Pages/About";
import Main from "../Pages/Main";

export const publicRoutes = [
    {path: '/', component : <Main/>, exact: true},
    {path: '/about', component : <About/>, exact: true}
];