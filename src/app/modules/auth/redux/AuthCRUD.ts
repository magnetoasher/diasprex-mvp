import axios from 'axios'
import {UserModel} from '../models/UserModel'
import * as Constants from "../../../../authConfig"

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`


// Server should return AuthModel
export function register(email: string, firstName: string, lastName: string, password: string) {
  const axiosOptions = {
    url: "/users/create",
    baseURL: Constants.API_BASE_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  };
  // @ts-ignore
  return axios.request(axiosOptions);
}

// Server should return object => { result: boolean } (Is Email in DB)
export function startVerification(email: string) {
  const axiosOptions = {
    url: "/verify/start",
    baseURL: Constants.API_BASE_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
    },
  };
  // @ts-ignore
  return axios.request(axiosOptions);
}

// Server should return object => { result: boolean } (Is Email in DB)
export function verifyCode(email: string, code: string) {
  const axiosOptions = {
    url: "/verify/check",
    baseURL: Constants.API_BASE_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      code,
    },
  };
  // @ts-ignore
  return axios.request(axiosOptions);
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email
  })
}

export function getUserByToken(token:string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token:token
  })
}
