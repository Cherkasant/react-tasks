import { create } from "apisauce";
import {
  ActivateUserData,
  RegisterUserData,
  SignInUserData,
} from "../Types/auth";

const API = create({ baseURL: "https://studapi.teachmeskills.by" });
const registerUser = (data: RegisterUserData) => {
  return API.post("/auth/users/", data);
};
const getAllPosts = () => {
  return API.get("/blog/posts/?limit=11");
};
const activateUser = (data: ActivateUserData) => {
  return API.post("/auth/users/activation/", data);
};
const getSinglePost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};
const signInUser = (data: SignInUserData) => {
  return API.post("/auth/jwt/create/", data);
};

const getUserName = (token: string) => {
  return API.get(
    "/auth/users/me/",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
const getNewAccessToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
};

const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};

const getMyPosts = (token: string) => {
  return API.get(
    "/blog/posts/my_posts/",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export default {
  registerUser,
  getAllPosts,
  activateUser,
  getSinglePost,
  signInUser,
  getUserName,
  getNewAccessToken,
  verifyToken,
  getMyPosts,
};
