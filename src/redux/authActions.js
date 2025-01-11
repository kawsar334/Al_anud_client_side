// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { setUser, setLoading, setError } from './authSlice';
// import { auth } from '../firebase';

// export const login = (email, password) => async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         dispatch(setUser(userCredential.user));
//     } catch (error) {
//         dispatch(setError(error.message));
//     } finally {
//         dispatch(setLoading(false));
//     }
// }

// export const signup = (email, password) => async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         dispatch(setUser(userCredential.user));
//     } catch (error) {
//         dispatch(setError(error.message));
//     } finally {
//         dispatch(setLoading(false));
//     }
// };


// export const logout =()=>async(dispatch)=>{
//     dispatch(setLoading(true));
//     try {
//         await signOut(auth);
//         dispatch(setUser(null));
//     } catch (error) {
//         dispatch(setError(error.message));
//     } finally {
//         dispatch(setLoading(false));
//     }
// }


// export const googleLogin = ()=>async(dispatch)=>{
//     dispatch(setLoading(true));
//     try {
//         const provider = new GoogleAuthProvider();
//         const result = await signInWithPopup(provider);
//         dispatch(setUser(result.user));
//     } catch (error) {
//         dispatch(setError(error.message));
//     } finally {
//         dispatch(setLoading(false));
//     }   
// }


import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { setUser, setLoading, setError } from './authSlice';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        // Send login credentials to the backend
        const { data } = await axios.post('/api/auth/login', { email, password });
        dispatch(setUser(data.user));
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const signup = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        // Send signup data to the backend
        const { data } = await axios.post('/api/auth/signup', { email, password });
        dispatch(setUser(data.user));
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const logout = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        // Inform the backend about logout
        await axios.post('/api/auth/logout');
        dispatch(setUser(null));
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const googleLogin = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const idToken = await result.user.getIdToken(); // Generate Google ID Token

        // Send Google ID token to the backend
        const { data } = await axios.post('/api/auth/google', { idToken });
        dispatch(setUser(data.user));
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message));
    } finally {
        dispatch(setLoading(false));
    }
};
