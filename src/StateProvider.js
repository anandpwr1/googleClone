import React, { createContext, useContext, useReducer } from 'react';

// preparing the data layer 
export const StateContext = createContext();

// StateProvider here is Higher Order component
// initialState is what data layer looked like when app is loaded 
// reducer looks for changes. 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* chilren is here referring to App */}
        {children}
    </StateContext.Provider>
)

// this is a hook which allows us to pull information from data layer. 
export const useStateValue = () => useContext(StateContext);