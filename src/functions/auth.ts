import firebase from "firebase/app";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const getJWT = async () => {
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) {
    throw new Error('No ha iniciado sesión');
  }
  const token = await currentUser.getIdToken();
  return `Bearer ${token}`
}

export const loginWithGoogle = async () => {
  return await firebase.auth().signInWithPopup(googleProvider);
}

export const logout = async () => {
  return await firebase.auth().signOut();
}
