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
}

export default AuthService;
