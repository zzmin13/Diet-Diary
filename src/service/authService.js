import { firebaseAuth, googleProvider, githubProvider } from "./firebase";

class AuthService {
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
  async OauthLogin(providerName) {
    const provider = this.getProvider(providerName);
    try {
      return firebaseAuth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  }
  onAuthStateChanged(callback) {
    firebaseAuth.onAuthStateChanged((user) => {
      callback(user);
    });
  }
  logout() {
    firebaseAuth
      .signOut()
      .then(() => {
        console.log(`로그아웃 되었습니다.`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  createAccount(email, password) {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          alert("이미 사용중인 이메일 입니다.");
        } else if (errorCode === "auth/invalid-email") {
          alert("유효하지 않은 이메일 형식입니다.");
        } else {
          alert(errorMessage);
        }
      });
  }
  async emailLogin(email, password) {
    try {
      return firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthService;
