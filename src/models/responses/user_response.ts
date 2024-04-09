import { User } from "../database/user";
import { BaseResponse } from "./base_response";

export interface UserResponse extends BaseResponse {
  data: User;
}