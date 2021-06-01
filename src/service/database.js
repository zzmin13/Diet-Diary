import { firebaseDatabase } from "./firebase";

class Database {
  registerUser(uid, email, photoURL) {
    firebaseDatabase.ref(`users/${uid}/information/basic`).set({
      userName: "",
      email: email,
      avatar:
        photoURL ||
        "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg",
    });
  }
  getRequiredInformation(uid) {
    return firebaseDatabase
      .ref(`users/${uid}/information/required`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
export default Database;
