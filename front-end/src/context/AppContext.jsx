import { AppContext } from "./context";
import { doctors } from "../assets/assets";

const AppContextProvider = (props) => {

    const value = {
        doctors
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;