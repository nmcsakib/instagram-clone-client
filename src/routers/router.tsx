import { createBrowserRouter } from "react-router";
import App from "../App";
import Profile from "../pages/Profile/Profile";
import RightSide from "../Components/RightSide/RightSide";
import MainContent from "../Components/MainContent/MainContent";
import AuthForm from "../pages/Login/AuthForm";
import ProfileEdit from "../pages/ProfileEdit/ProfileEdit";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <div className="grid grid-cols-[3fr_1fr]">
                    <MainContent />
                    <RightSide />
                </div>
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/accounts/edit',
                element: <ProfileEdit />
            }
        ]
    },
    {
        path: '/accounts/authentication',
        element: <AuthForm />
    }
])