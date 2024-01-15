export { default } from "next-auth/middleware"

export const config = { matcher: ["/users/mypage", "/stores/:id/edit", "/users/likes", "/stores/infinite"] }