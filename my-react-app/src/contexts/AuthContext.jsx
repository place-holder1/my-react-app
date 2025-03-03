import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    //Variable to store the isLogin state
    const [isLogin, setIsLogin] = useState(false);
    //function to update the isLogin state
    const login = () => {
        setIsLogin(true);
    };
    const logout = () => {
        fetch("https://web.ics.purdue.edu/~zong6/profile-app/logout.php")
        // i don't have a database
        .then((response) => response.json())
        .then(data => {
            if (data.message){
                setIsLogin(false);
            }else{
                console.log(data);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <AuthContext.Provider value={ isLogin, login, logout }>
            {children}
        </AuthContext.Provider>
    )
}