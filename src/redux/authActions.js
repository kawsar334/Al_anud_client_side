

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { setUser, setLoading, setError } from './authSlice';
import axios from 'axios';
import { auth } from '../firebase';
import Swal from 'sweetalert2';

export const register = (email, password, photoURL, name, navigate, toast) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
    const userInfo = {
      email: user.email,
      name: user.displayName,
      photoURL: user?.photoURL,
      password,
    };
    const response = await axios.post("http://localhost:5000/api/auth/register", userInfo);
    if (response) {
      dispatch(setUser(response.data.user));
      toast.success("Registration successful!");
      localStorage.setItem("user", response.data?.user?._id);
      navigate("/");
      setTimeout(() => {
        window.location.reload()
      }, 500);
    }
    dispatch(setLoading(false));
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch(setError(errorMessage));
    toast.error(errorMessage || "Registration failed. Please try again.");
    console.log(error)
  }
}
export const login = (email, password, navigate, toast) => async (dispatch) => {

  dispatch(setLoading(true));
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login",
      { email, password },
      { withCredentials: true }
    );
    if (response.data?.user) {
      dispatch(setUser(response.data?.user));
      toast.success("Login successful!");
      navigate("/");
      localStorage.setItem("user", response.data?.user?._id);
    }

  } catch (error) {
    toast.error(error.response?.data?.error || "Login failed. Please try again.");
    dispatch(setError(error.response?.data?.error || "Login failed. Please try again."));
    dispatch(setLoading(false))
  } finally {
    setLoading(false);
  }
}





// login  with google 
export const loginGoogle = (navigate, toast) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const userInfo = {
      name: result?.user?.displayName,
      email: result?.user?.email,
      photoURL: result?.user?.photoURL,
      password: ""
    }
    const res = await axios.post("http://localhost:5000/api/auth/google", userInfo, {
      withCredentials: true
    })
    console.log(res.data?.data?.user?._id)
    if (res.data?.data) {
      dispatch(setUser(res.data?.data));
      toast.success(res?.data?.message);
      dispatch(setLoading(false));
      localStorage.setItem("user", res.data?.data?.user?._id);
      navigate("/");
      setTimeout(() => {
        window.location.reload()
      }, 600);
    } else {
      navigate("/login");
      dispatch(setLoading(false));
    }
  } catch (err) {
    console.log(err)
    toast.error("Login failed. Please try again.");
    navigate("/login")
    dispatch(setLoading(false));
  }
}
// 



// logut user 
export const signOutUser = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You will be signed out from your account!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, sign me out!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        await signOut(auth);
        setUser(null);
        Swal.fire("Signed Out!", "You have been signed out successfully.", "success");

        setTimeout(() => {
          window.location.reload();
          window.location.href = "/";
          localStorage.removeItem("user")

        }, 600);
      } else {
        console.error(data.msg);
        Swal.fire("Error!", data.msg || "Failed to sign out.", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error!", "Failed to sign out. Please try again later.", "error");
    }
  }
};
