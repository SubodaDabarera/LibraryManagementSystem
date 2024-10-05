import React from "react";
import { Response } from "../../lib/types/Response";
import useAuthAPI from "../../api/useAuthAPI";
import { AuthUser, UserRole } from "../../lib/types/User";

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
  const { signInApi, signUpApi } = useAuthAPI();

  const signIn = async (email: string, password: string): Promise<Response> => {
    // Add a validation here with email and password

    // call api here
    const apiResponse = await signInApi(email, password);
    return apiResponse;
  };

  const signUp = async (userObject: RegisterUser): Promise<Response> => {
    // Check user input before api call
    const inputUser = {id: "kdfj3", ...userObject}
    const response = await signUpApi(inputUser);

    return {
      isSuccess: response.isSuccess,
      data: {},
      message: response.message,
    };
  };

  return { signIn, signUp };
}

export default useAuthHandler;
