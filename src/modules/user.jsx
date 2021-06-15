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
export const addWater = (current, time, timeAmount, totalAmount) => ({
  type: "ADD_WATER",
  current,
  time,
  timeAmount,
  totalAmount,
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
    default:
      return state;
  }
};

export default userReducer;
