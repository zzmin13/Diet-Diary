import moment from "moment";
const today = moment().format("YYYYMMDD");

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

export const addDiet = (current, time, content, totalCalories) => ({
  type: "ADD_DIET",
  current,
  time,
  content,
  totalCalories,
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

export const deleteExercise = (
  current,
  exerciseId,
  exerciseKcal,
  totalCalories
) => ({
  type: "DELETE_EXERCISE",
  current,
  exerciseId,
  exerciseKcal,
  totalCalories,
});

export const editExercise = (
  current,
  exerciseId,
  exerciseObj,
  beforeExerciseKcal,
  afterExerciseKcal,
  todayTotalCalories
) => ({
  type: "EDIT_EXERCISE",
  current,
  exerciseId,
  exerciseObj,
  beforeExerciseKcal,
  afterExerciseKcal,
  todayTotalCalories,
});

export const changeDate = (dateString) => ({
  type: "CHANGE_DATE",
  dateString,
});

export const editTodayWeight = (date, weight) => ({
  type: "EDIT_TODAY_WEIGHT",
  date,
  weight,
});

export const deleteDiary = (date) => ({
  type: "DELETE_DIARY",
  date,
});

export const updateProfile = (avatarURL, nickname) => ({
  type: "UPDATE_PROFILE",
  avatarURL,
  nickname,
});

export const updateHealthInformation = (content) => ({
  type: "UPDATE_HEALTH_INFORMATION",
  content,
});
// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  isUser: false,
  uid: "",
  user: "",
  dateObject: {
    date: today,
    day: moment(today).day(),
  },
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
    case "ADD_DIET":
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
                totalCalories: action.totalCalories,
                [action.time]: action.content,
              },
            },
          },
        },
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
    case "DELETE_EXERCISE":
      const changedExercise = {
        ...state.user.userDiary[action.current].exercise,
      };
      delete changedExercise[action.exerciseId];
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.current]: {
              ...state.user.userDiary[action.current],
              exercise: {
                ...changedExercise,
                totalCalories:
                  Number(action.totalCalories) - Number(action.exerciseKcal),
              },
            },
          },
        },
      };
    case "EDIT_EXERCISE":
      const updatedExercise = {
        ...state.user.userDiary[action.current].exercise,
      };
      delete updatedExercise[action.exerciseId];
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.current]: {
              ...state.user.userDiary[action.current],
              exercise: {
                ...updatedExercise,
                [action.exerciseId]: action.exerciseObj,
                totalCalories:
                  action.todayTotalCalories -
                  Number(action.beforeExerciseKcal) +
                  Number(action.afterExerciseKcal),
              },
            },
          },
        },
      };
    case "CHANGE_DATE":
      return {
        ...state,
        dateObject: {
          date: action.dateString,
          day: moment(action.dateString).day(),
        },
      };
    case "EDIT_TODAY_WEIGHT":
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: {
            ...state.user.userDiary,
            [action.date]: {
              ...state.user.userDiary[action.date],
              weight: action.weight,
            },
          },
        },
      };
    case "DELETE_DIARY":
      const changedDiary = {
        ...state.user.userDiary,
      };
      delete changedDiary[action.date];
      return {
        ...state,
        user: {
          ...state.user,
          userDiary: changedDiary,
        },
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          information: {
            ...state.user.information,
            basic: {
              ...state.user.information.basic,
              avatar: action.avatarURL,
              userName: action.nickname,
            },
          },
        },
      };
    case "UPDATE_HEALTH_INFORMATION":
      return {
        ...state,
        user: {
          ...state.user,
          information: {
            ...state.user.information,
            required: {
              ...action.content,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default userReducer;
