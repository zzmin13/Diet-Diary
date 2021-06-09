// 액션 생성 함수 만들기
export const loginUser = () => ({
  type: "LOGIN_USER",
});
export const logoutUser = () => ({
  type: "LOGOUT_USER",
});

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  user: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(`hi`);
      return {
        ...state,
        user: true,
      };
    case "LOGOUT_USER":
      console.log(`hello`);
      return {
        ...state,
        user: false,
      };
    default:
      console.log(`ㅠㅠ`);
      return state;
  }
};

export default userReducer;
