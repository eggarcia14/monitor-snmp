import React from 'react';
import Firebase from './firebase';

export const FirebaseContext = React.createContext(); 
export const FirebaseProvider = (props) => ( 
<FirebaseContext.Provider value={new Firebase()}> 
{props.children} 
</FirebaseContext.Provider> 
);