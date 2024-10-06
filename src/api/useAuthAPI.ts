import React from "react";
import { AuthUser, UpdateUserRequest } from "../lib/types/User";
import { Response } from "../lib/types/Response";
import axios from "axios";
import { API_URL, ApiRoutes } from "../lib/enums/ApiRoutes";
import { UserRoles } from "../lib/enums/UserRoles";

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
    const users = await axios.get(USER_API);
    if (users.data && users.data.length) {
      return {
        isSuccess: true,
        data: users,
        message: "User fetched successfully",
      };
    }

    return {
      isSuccess: false,
      data: [],
      message: "User are not fetched successfully",
    };
  };

  const getMembers = async () => {
    // return users with role='Memeber'
    const users = await axios.get(USER_API);
    if (users.data && users.data.length) {
      const members = users.data.filter(
        (user: any) => user.role === UserRoles.Member
      );
      if (members.length) {
        return {
          isSuccess: true,
          data: members,
          message: "Memebers retrieved successfully",
        };
      }
    }

    return {
      isSuccess: false,
      data: [],
      message: "Memebers retrieved unsuccessfully",
    };
  };

  const getUserById = async (userId: string) => {
    // get user details by id
    const user = axios.get(USER_API + "/" + userId);
    console.log("user: ", user);
  };

  const updateUser = async (userObj: UpdateUserRequest): Promise<Response> => {
    // update user
    const userId = userObj.id;
    const updateUser = await axios.put(USER_API + "/" + userId, {
      username: userObj.username,
      name: userObj.name,
      email: userObj.email,
      role: userObj.role,
    });

    if (updateUser.status == 200) {
      return {
        isSuccess: true,
        data: updateUser.data,
        message: "User is updated",
      };
    }

    return {
      isSuccess: false,
      data: {},
      message: "User is not updated",
    };
  };

  const deleteUserApi = async (userId: string): Promise<Response> => {
    // remove user from the dataset

    const deletedUser = await axios.delete(USER_API + "/" + userId);

    if (deletedUser.status == 200) {
      return {
        isSuccess: true,
        data: {},
        message: "User is Deleted",
      };
    }

    return {
      isSuccess: false,
      data: {},
      message: "User is not Deleted",
    };
  };

  return {
    signInApi,
    signUpApi,
    getAllUsers,
    getMembers,
    getUserById,
    updateUser,
    deleteUserApi,
  };
}

export default useAuthAPI;
