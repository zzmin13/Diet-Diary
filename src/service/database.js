import { firebaseDatabase } from "./firebase";

class Database {
  // 유저 데이터베이스에 등록하기
  registerUser(uid) {
    firebaseDatabase.ref(`users/${uid}`).set({
      information: "",
      userDiary: "",
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
  // 필수 정보 저장하기
  setRequiredInformation(uid, information) {
    firebaseDatabase.ref(`users/${uid}/information`).set(information);
  }
  // 오늘 날짜 일기 템플릿 만들기
  setTodayDiaryTemplate(uid, currentDate) {
    firebaseDatabase.ref(`users/${uid}/userDiary/${currentDate}`).set({
      diary: "",
      diet: {
        breakfast: {
          totalCalories: 0,
        },
        lunch: {
          totalCalories: 0,
        },
        dinner: {
          totalCalories: 0,
        },
        dessert: {
          totalCalories: 0,
        },
        totalCalories: 0,
      },
      exercise: {
        totalCalories: 0,
      },
      water: {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        totalWater: 0,
      },
      weight: 0.0,
    });
  }

  // 일기 작성하기
  createOrUpdateTodayDiary(uid, currentDate, content) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/diary`] = content;
    return firebaseDatabase.ref().update(updates);
  }

  // 식단 추가하기
  addTodayDiet(uid, currentDate, time, content, totalCalories) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/diet/${time}`] = content;
    updates[`users/${uid}/userDiary/${currentDate}/diet/totalCalories`] =
      totalCalories;
    return firebaseDatabase.ref().update(updates);
  }
  //식단 삭제하기
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

  //식단 수정하기
  editDiet(
    uid,
    current,
    prevTime,
    currTime,
    beforeDiet,
    afterDiet,
    prevTimeTotalCalories,
    currTimeTotalCalories,
    todayTotalCalories
  ) {
    const updates = {};
    if (prevTime === currTime) {
      updates[
        `users/${uid}/userDiary/${current}/diet/${prevTime}/${beforeDiet.id}`
      ] = null;
      updates[
        `users/${uid}/userDiary/${current}/diet/${prevTime}/${afterDiet.id}`
      ] = afterDiet;
      updates[
        `users/${uid}/userDiary/${current}/diet/${prevTime}/totalCalories`
      ] = prevTimeTotalCalories - beforeDiet.kcal + afterDiet.kcal;
      updates[`users/${uid}/userDiary/${current}/diet/totalCalories`] =
        todayTotalCalories - beforeDiet.kcal + afterDiet.kcal;
    } else {
      // 과거의 식사를 이전 타임에서 삭제해야함
      updates[
        `users/${uid}/userDiary/${current}/diet/${prevTime}/${beforeDiet.id}`
      ] = null;
      // 이전 타임에서 totalCalories 변경
      updates[
        `users/${uid}/userDiary/${current}/diet/${prevTime}/totalCalories`
      ] = prevTimeTotalCalories - beforeDiet.kcal;
      // 새로운 식사를 새로운 타임에 추가해야 함
      updates[
        `users/${uid}/userDiary/${current}/diet/${currTime}/${afterDiet.id}`
      ] = afterDiet;
      // 새로운 타임에서 totalCalories 변경
      updates[
        `users/${uid}/userDiary/${current}/diet/${currTime}/totalCalories`
      ] = currTimeTotalCalories + afterDiet.kcal;
      // 총 칼로리 변경
      updates[`users/${uid}/userDiary/${current}/diet/totalCalories`] =
        todayTotalCalories - beforeDiet.kcal + afterDiet.kcal;
    }

    return firebaseDatabase.ref().update(updates);
  }

  // 물 추가하기
  addWater(uid, currentDate, time, timeAmount, totalAmount) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/water/${time}`] = timeAmount;
    updates[`users/${uid}/userDiary/${currentDate}/water/totalWater`] =
      totalAmount;

    return firebaseDatabase.ref().update(updates);
  }

  // 물 수정하기
  editWater(uid, currentDate, waterObj) {
    const updates = {};
    updates[`users/${uid}/userDiary/${currentDate}/water`] = waterObj;
    return firebaseDatabase.ref().update(updates);
  }

  //운동 샘플 목록 가져오기
  getExerciseSampleList() {
    return firebaseDatabase
      .ref(`exercises`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return false;
        }
      });
  }

  //운동 추가하기
  addExercise(uid, current, exerciseId, exerciseObj, totalCalories) {
    const updates = {};
    updates[`users/${uid}/userDiary/${current}/exercise/${exerciseId}`] =
      exerciseObj;
    updates[`users/${uid}/userDiary/${current}/exercise/totalCalories`] =
      Number(totalCalories) + Number(exerciseObj.kcal);
    return firebaseDatabase.ref().update(updates);
  }

  // 운동 삭제하기
  deleteExercise(uid, current, exerciseId, exerciseKcal, totalCalories) {
    const updates = {};
    updates[`users/${uid}/userDiary/${current}/exercise/${exerciseId}`] = null;
    updates[`users/${uid}/userDiary/${current}/exercise/totalCalories`] =
      Number(totalCalories) - Number(exerciseKcal);
    return firebaseDatabase.ref().update(updates);
  }

  // 운동 수정하기
  editExercise(
    uid,
    current,
    exerciseId,
    exerciseObj,
    beforeExerciseKcal,
    afterExerciseKcal,
    todayTotalCalories
  ) {
    const updates = {};
    updates[`users/${uid}/userDiary/${current}/exercise/${exerciseId}`] =
      exerciseObj;
    updates[`users/${uid}/userDiary/${current}/exercise/totalCalories`] =
      todayTotalCalories -
      Number(beforeExerciseKcal) +
      Number(afterExerciseKcal);
    return firebaseDatabase.ref().update(updates);
  }

  // 오늘 몸무게 수정하기
  editTodayWeight(uid, date, weight) {
    const updates = {};
    updates[`users/${uid}/userDiary/${date}/weight`] = weight;
    return firebaseDatabase.ref().update(updates);
  }

  // 해당 날짜 일기 삭제하기
  deleteDiary(uid, date) {
    const updates = {};
    updates[`users/${uid}/userDiary/${date}`] = null;
    return firebaseDatabase.ref().update(updates);
  }

  // 건강 정보 변경 (활동, 활동지수, 나이, 키, 권장칼로리, 성별, 몸무게)
  updateHealthInformation(uid, content) {
    const updates = {};
    updates[`users/${uid}/information`] = content;
    return firebaseDatabase.ref().update(updates);
  }

  // 유저 삭제
  deleteUser(uid) {
    const updates = {};
    updates[`users/${uid}`] = null;
    return firebaseDatabase.ref().update(updates);
  }
}
export default Database;
