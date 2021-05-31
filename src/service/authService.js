import { firebase_Auth, googleProvider, githubProvider } from "./firebase";

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
  OauthLogin(providerName) {
    const provider = this.getProvider(providerName);
    firebase_Auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default AuthService;
