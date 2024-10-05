import React from "react";
import { AuthUser, UpdateUserRequest } from "../lib/types/User";
import userData from '../data/users.json'
import { Response } from "../lib/types/Response";

// This hook is for the db operations, api reqeusts and returning it back to the handlers

function useAuthAPI() {
  //here it need to track all the users
  // And need to 
  const signInApi = async (email: string, password: string): Promise<Response> => {

    // check for email and password on the db
    const user = userData.users.filter((user) => user.email === email && user.password === password)
    if(!user.length){
      return {isSuccess: false, data: {}, message: "Email or Password is incorrect"}
    }

    return {isSuccess: true, data: user, message: "Login Successfull"}

  };

  const signUpApi = async(userObject: AuthUser): Promise<Response> => {
    

    const newUser = userData.users.push(userObject)
    return {isSuccess: true, data: newUser, message: "New User Created Successfull"}

  }

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
