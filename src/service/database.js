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
          diary: "",
          diet: {
            breakfast: "",
            lunch: "",
            dinner: "",
            dessert: "",
            totalCalories: "",
          },
          exercise: "",
          water: {
            breakfast: "",
            lunch: "",
            dinner: "",
            totalWater: "",
          },
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
      diary: "",
      diet: {
        breakfast: {
          totalCalories: "",
        },
        lunch: {
          totalCalories: "",
        },
        dinner: {
          totalCalories: "",
        },
        dessert: {
          totalCalories: "",
        },
        totalCalories: "",
      },
      exercise: "",
      water: {
        breakfast: "",
        lunch: "",
        dinner: "",
        totalWater: "",
      },
    });
  }

  // 일기 작성하기
  createOrUpdateTodayDiary(uid, currentDate, content) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/diary`] = content;
    return firebaseDatabase.ref().update(updates);
  }

  // 식단 추가하기
  addTodayDiet(uid, currentDate, time, content) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/diet/${time}`] = content;
    return firebaseDatabase.ref().update(updates);
  }

  // 하루 총 칼로리 업데이트하기
  updateTodayTotalCalories(uid, currentDate, totalCalories) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/diet/totalCalories`] =
      totalCalories;
    return firebaseDatabase.ref().update(updates);
  }

  //식사 삭제하기
  deleteDiet(
    uid,
    currentDate,
    time,
    id,
    calories,
    timeTotalCalories,
    todayTotalCalories
  ) {
    //식사를 삭제하면 해당 타임의 음식 삭제 해야 함
    // 식사를 삭제하면 해당 타임의 totalCalories도 바뀌어야 함
    // 식사를 삭제하면 전체의 totalCalories도 바뀌어야 함
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/diet/${time}/${id}`] = null;
    updates[
      `users/${uid}/userDiary/${currentDate}/diet/${time}/totalCalories`
    ] = timeTotalCalories - calories;
    updates[`users/${uid}/userDiary/${currentDate}/diet/totalCalories`] =
      todayTotalCalories - calories;

    return firebaseDatabase.ref().update(updates);
  }

  // 물 추가하기
  addWater(uid, currentDate, time, amount, totalAmount) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/water/${time}`] = amount;
    updates[`users/${uid}/userDiary/${currentDate}/water/totalWater`] =
      totalAmount;

    return firebaseDatabase.ref().update(updates);
  }
}
export default Database;
