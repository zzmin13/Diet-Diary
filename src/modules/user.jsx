// 액션 생성 함수 만들기
export const loginUser = (currentUser) => ({
  type: "LOGIN_USER",
  currentUser,
});
export const logoutUser = () => ({
  type: "LOGOUT_USER",
});
export const loadUserInformation = (response) => ({
  type: "LOAD_USER_INFORMATION",
  response,
});
export const deleteDiet = (
  current,
  time,
  id,
  calories,
  timeTotalCalories,
  todayTotalCalories
) => ({
  type: "DELETE_DIET",
  current,
  time,
  id,
  calories,
  timeTotalCalories,
  todayTotalCalories,
});
export const editDiet = (
  current,
  prevTime,
  currTime,
  beforeDiet,
  afterDiet,
  prevTimeTotalCalories,
  currTimeTotalCalories,
  todayTotalCalories
) => ({
  type: "EDIT_DIET",
  current,
  prevTime,
  currTime,
  prevTimeTotalCalories,
  currTimeTotalCalories,
  beforeDiet, // (prevDiet 안에는 id, name, kcal, totalSize)
  afterDiet,
  todayTotalCalories,
});

export const addWater = (current, time, timeAmount, totalAmount) => ({
  type: "ADD_WATER",
  current,
  time,
  timeAmount,
  totalAmount,
});
export const editWater = (current, waterObj) => ({
  type: "EDIT_WATER",
  current,
  waterObj,
});
export const addExercise = (
  current,
  exerciseId,
  exerciseObj,
  totalCalories
) => ({
  type: "ADD_EXERCISE",
  current,
  exerciseId,
  exerciseObj,
  totalCalories,
});
// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  isUser: false,
  uid: "",
  user: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isUser: true,
        uid: action.currentUser.uid,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isUser: false,
        uid: "",
        user: "",
      };
    case "LOAD_USER_INFORMATION":
      return {
        ...state,
        user: action.response,
      };
    case "DELETE_DIET":
      const changedDiet = {
        ...state.user.userDiary[action.current].diet[action.time],
      };
      delete changedDiet[action.id];
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.current]: {
              ...state.user.userDiary[action.current],
              diet: {
                ...state.user.userDiary[action.current].diet,
                totalCalories: action.todayTotalCalories - action.calories,
                [action.time]: {
                  ...changedDiet,
                  totalCalories: action.timeTotalCalories - action.calories,
                },
              },
            },
          },
        },
      };
    case "EDIT_DIET":
      const updatedDiet = {
        ...state.user.userDiary[action.current].diet[action.prevTime],
      };
      delete updatedDiet[action.beforeDiet.id];
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.current]: {
              ...state.user.userDiary[action.current],
              diet: {
                ...state.user.userDiary[action.current].diet,
                [action.prevTime]: {
                  ...updatedDiet,
                  totalCalories:
                    action.prevTimeTotalCalories - action.beforeDiet.kcal,
                },
                [action.currTime]: {
                  ...state.user.userDiary[action.current].diet[action.currTime],
                  [action.afterDiet.id]: {
                    id: action.afterDiet.id,
                    kcal: action.afterDiet.kcal,
                    name: action.afterDiet.name,
                    totalSize: action.afterDiet.totalSize,
                  },
                  totalCalories:
                    action.currTimeTotalCalories + action.afterDiet.kcal,
                },
                totalCalories:
                  action.todayTotalCalories -
                  action.beforeDiet.kcal +
                  action.afterDiet.kcal,
              },
            },
          },
        },
      };
    case "ADD_WATER":
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.current]: {
              ...state.user.userDiary[action.current],
              water: {
                ...state.user.userDiary[action.current].water,
                [action.time]: action.timeAmount,
                totalWater: action.totalAmount,
              },
            },
          },
        },
      };
    case "EDIT_WATER":
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.current]: {
              ...state.user.userDiary[action.current],
              water: action.waterObj,
            },
          },
        },
      };
    case "ADD_EXERCISE":
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.current]: {
              ...state.user.userDiary[action.current],
              exercise: {
                ...state.user.userDiary[action.current].exercise,
                [action.exerciseId]: action.exerciseObj,
                totalCalories:
                  Number(action.totalCalories) +
                  Number(action.exerciseObj.kcal),
              },
            },
          },
        },
      };
    default:
      return state;
  }
};

export default userReducer;
