import React, { Component,createContext } from 'react';

export const AppContext = createContext();

class AppContextProvider extends Component {
    state = { 
        isLightTheme: true ,
        isLoggedIn: false
     }

    toggleAuth = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});

    }
    render() { 
        return ( 
            <AppContext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}>
                {this.props.children}
            </AppContext.Provider>
         );
    }
}
 
export default AppContextProvider;