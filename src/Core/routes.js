import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {flatten } from "./utils";
import ContactPage from "../Views/simple/contact";
import FeaturesPage from "../Views/simple/features";
import HomePage from "../Views/simple/home";
import LoginPage from "../Views/auth/login";
import LogoutPage from "../Views/auth/logout";
import RegisterPage from "../Views/auth/register";
import ProfilePage from "../Views/account/profile";

import LogoutFailedNotice from "../Views/auth/notices/logout-failed";


const notice_route_group = []

const auth_route_group = [
    {path: '/login', component: LoginPage},
    {path: '/logout', component: LogoutPage},
    {path: '/register', component: RegisterPage},
    {path: '/n/logout-failed', component: LogoutFailedNotice}
]

const simple_route_group = [
    {path: '/contact', component: ContactPage},
    {path: '/features', component: FeaturesPage},
    {path: '/home', component: HomePage},
]

const account_route_group = [
    {path: ['/user', '/user/profile'], component: ProfilePage},
]

const admin_route_group = []




const guest_routes = [
    ...simple_route_group,
    ...auth_route_group,
    ...notice_route_group,
]

const account_routes = [
    ...account_route_group,
    ...guest_routes
]

const admin_routes = [
    ...admin_route_group,
    ...account_routes,
]

const GuestRoutes = () => (
    <Switch>
        {flatten(guest_routes).map((data, idx) => (
            <Route key={idx} {...data} />
        ))}
    </Switch>
)

const AccountRoutes = () => (
    <Switch>
        {flatten(account_routes).map((data, idx) => (
            <Route key={idx} {...data} />
        ))}
    </Switch>
)

const AdminRoutes = () => (
    <Switch>
        {flatten(admin_routes).map((data, idx) => (
            <Route key={idx} {...data} />
        ))}
    </Switch>
)

const RouteList = ({role}) => {
    if(role === 'guest') {
        return <GuestRoutes />
    }
    else if(role === 'account') {
        return <AccountRoutes />
    }
    else if(role === 'admin') {
        return <AdminRoutes />
    }
}

export default RouteList