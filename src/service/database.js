import { firebaseDatabase } from "./firebase";

class Database {
  registerUser(userId, email, photoURL) {
    firebaseDatabase.ref(`users/${userId}/information/basic`).set({
      userName: "",
      email: email,
      avatar:
        photoURL ||
        "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg",
    });
  }
}
export default Database;
