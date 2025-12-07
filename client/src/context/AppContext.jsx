import { createContext, useState } from "react";
import { courses, paymentMethods } from "../../Data"

export const AppContext = createContext();

const AppContextProvider = (props) => {

    // const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
    const [token, setToken] = useState('');
    


    const backendUrl = 'http://localhost:4000'
    const currencySymbol = '$';

    const value = {
        currencySymbol,
        token, setToken,
        backendUrl,
        courses,
        paymentMethods,

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;