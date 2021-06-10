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
    default:
      return state;
  }
};

export default userReducer;
