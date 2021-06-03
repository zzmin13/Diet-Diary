import { firebaseDatabase } from "./firebase";

class Database {
  // 유저 데이터베이스에 등록하기
  registerUser(uid, email, photoURL, currentDate) {
    firebaseDatabase.ref(`users/${uid}`).set({
      information: {
        basic: {
          userName: "",
          email: email,
          avatar:
            photoURL ||
            "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg",
        },
      },
      userDiary: {
        [currentDate]: {
          diet: "",
          diary: "",
          exercise: "",
          water: "",
        },
      },
    });
  }

  // 데이터베이스에 유저가 있는지 확인하기
  isUserExistInDatabase(uid) {
    return firebaseDatabase
      .ref(`users/${uid}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // 유저 데이터 불러오기
  getUserData(uid) {
    return firebaseDatabase
      .ref(`users/${uid}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //필수 정보 가져오기
  getRequiredInformation(uid) {
    return firebaseDatabase
      .ref(`users/${uid}/information/required`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // 필수 정보 저장하기
  setRequiredInformation(uid, information) {
    firebaseDatabase.ref(`users/${uid}/information/required`).set(information);
  }
  // 오늘 날짜 일기 템플릿 만들기
  setTodayDiaryTemplate(uid, currentDate) {
    firebaseDatabase.ref(`users/${uid}/userDiary/${currentDate}`).set({
      diet: "",
      diary: "",
      exercise: "",
      water: "",
    });
  }

  // 일기 작성하기
  createOrUpdateTodayDiary(uid, currentDate, content) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/diary`] = content;
    return firebaseDatabase.ref().update(updates);
  }
}
export default Database;
