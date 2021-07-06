import {
  firebaseAuth,
  googleProvider,
  githubProvider,
  facebookProvider,
  emailProvider,
} from "./firebase";

class AuthService {
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      case "Facebook":
        return facebookProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
  // async OauthLogin(providerName) {
  //   const provider = this.getProvider(providerName);
  //   try {
  //     return firebaseAuth.signInWithPopup(provider);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async OauthLogin(providerName) {
    const provider = this.getProvider(providerName);
    return firebaseAuth //
      .signInWithPopup(provider);
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
    return firebaseAuth
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
  emailLogin(email, password) {
    return firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("비밀번호가 틀렸습니다.");
        } else if (errorCode === "auth/user-not-found") {
          alert("등록되지 않은 계정입니다.");
        } else {
          alert(errorMessage);
        }
      });
  }
  updateProfile(fileURL, nickName) {
    const user = firebaseAuth.currentUser;
    if (fileURL !== undefined && nickName !== undefined) {
      // 프로필사진, 닉네임 둘다 있을 때
      user
        .updateProfile({
          displayName: nickName,
          photoURL: fileURL,
        })
        .then(() => {
          alert("프로필이 변경되었습니다.");
        })
        .catch((error) => {
          alert(error);
        });
    } else if (fileURL === undefined && nickName !== undefined) {
      // 프로필 사진만 없을 때
      user
        .updateProfile({
          displayName: nickName,
        })
        .then(() => {
          alert("프로필이 변경되었습니다.");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  sendPasswordResetEmail(email, sendSuccess, sendFail) {
    firebaseAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        sendSuccess();
      })
      .catch((error) => {
        sendFail(error);
      });
  }
  updatePassword(newPassword, successUpdatePassword, failUpdatePassword) {
    const user = firebaseAuth.currentUser;
    user //
      .updatePassword(newPassword) //
      .then(() => {
        // Update Successful.
        successUpdatePassword();
      })
      .catch((error) => {
        failUpdatePassword();
        console.log(error);
      });
  }
  reauthenticate(email, currentPassword) {
    const user = firebaseAuth.currentUser;
    const credential = emailProvider.credential(email, currentPassword);
    return user.reauthenticateWithCredential(credential);
  }
}

export default AuthService;
