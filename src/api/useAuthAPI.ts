import React from "react";
import { AuthUser, UpdateUserRequest } from "../lib/types/User";
import { Response } from "../lib/types/Response";
import axios from "axios";
import { API_URL, ApiRoutes } from "../lib/enums/ApiRoutes";

// This hook is for the db operations, api reqeusts and returning it back to the handlers

function useAuthAPI() {
  const USER_API = API_URL + ApiRoutes.Users;

  const signInApi = async (
    email: string,
    password: string
  ): Promise<Response> => {
    const usersData = await axios.get(USER_API);
    if (usersData.data && usersData.data.length) {
      const user = usersData.data.filter(
        (user: any) => user.email === email && user.password === password
      );
      if (user.length) {
        return { isSuccess: true, data: user[0], message: "Login Successfull" };
      }
    }

    return {
      isSuccess: false,
      data: {},
      message: "Email or Password is incorrect",
    };
  };

  const signUpApi = async (userObject: AuthUser): Promise<Response> => {
    const newUser = await axios.post(USER_API, userObject);
    if (newUser) {
      return {
        isSuccess: true,
        data: newUser,
        message: "New User Created Successfull",
      };
    }

    return {
      isSuccess: false,
      data: {},
      message: "User Registration Unsuccessfull",
    };
  };

  const getAllUsers = async () => {
    // return all the users from the dataset
  };

  const getMembers = async () => {
    // return users with role='Memeber'
  };

  const getUserById = async (userId: string) => {
    // get user details by id
  };

  const updateUser = async (userObj: UpdateUserRequest) => {
    // get userId from the userObj
    // update user
  };

  const deleteUser = async (userId: string) => {
    // remove user from the dataset
  };

  return {
    signInApi,
    signUpApi,
    getAllUsers,
    getMembers,
    getUserById,
    updateUser,
    deleteUser,
  };
}

export default useAuthAPI;
