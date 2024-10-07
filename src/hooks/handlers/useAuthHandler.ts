import React from "react";
import { Response } from "../../lib/types/Response";
import useAuthAPI from "../../api/useAuthAPI";
import { AuthUser, UpdateUserRequest, UserRole } from "../../lib/types/User";
import { useAuth } from "../../contexts/AuthContext";

// This hook is for the handle the request, format and send to the api,
// And then filter/check response returning it back to the UI

interface RegisterUser {
  username: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

function useAuthHandler() {
  const { signInApi, signUpApi, updateUser, deleteUserApi } = useAuthAPI();
  const { createSession, removeSession } = useAuth();

  const signIn = async (email: string, password: string): Promise<Response> => {
    // Add a validation here with email and password

    // call api here
    const apiResponse = await signInApi(email, password);
    if (apiResponse.isSuccess) {
      await createSession(apiResponse.data);
    }
    return apiResponse;
  };

  const signUp = async (userObject: RegisterUser): Promise<Response> => {
    // Check user input before api call
    const inputUser = { id: "kdfj3", ...userObject };
    const response = await signUpApi(inputUser);

    return {
      isSuccess: response.isSuccess,
      data: {},
      message: response.message,
    };
  };

  const update = async (userObj: UpdateUserRequest): Promise<Response> => {
    // check user details are correct

    const response = await updateUser(userObj);
    if (response.isSuccess) {
      await createSession(response.data);
    }
    return response;
  };

  const deleteUser = async (userId: string): Promise<Response> => {
    if (!userId) {
      return { isSuccess: false, data: {}, message: "User Id is not defined" };
    }

    const deleted = await deleteUserApi(userId);
    if(deleted.isSuccess){
      await removeSession()
    }
    return deleted;
  };

  return { signIn, signUp, update, deleteUser };
}

export default useAuthHandler;
