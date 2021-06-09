// 액션 생성 함수 만들기
export const loginUser = (currentUser) => ({
  type: "LOGIN_USER",
  currentUser,
});
export const logoutUser = () => ({
  type: "LOGOUT_USER",
});

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  isUser: false,
  user: {
    displayName: "",
    photoURL: "",
    uid: "",
    email: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isUser: true,
        user: {
          ...state.user,
          displayName: action.currentUser.displayName || "user",
          photoURL:
            action.currentUser.photoURL ||
            "https://res.cloudinary.com/dgdkgkx1k/image/upload/v1621578337/sh0ttupc1rv7s6iqbw2u.jpg",
          uid: action.currentUser.uid,
          email: action.currentUser.email,
        },
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isUser: false,
        user: "",
      };
    default:
      return state;
  }
};

export default userReducer;
