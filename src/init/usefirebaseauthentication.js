import { useEffect, useState } from "react";

const useFirebaseAuthentication = (firebase) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = firebase.firebaseAuth.onAuthStateChanged((authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  }, [firebase]); //only once

  return authUser;
};

export default useFirebaseAuthentication;
