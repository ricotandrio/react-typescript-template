import { BaseResponse } from "@src/models/responses/base_response";
import { UserResponse } from "@src/models/responses/user_response"

export const isLoggedService = async (): Promise<UserResponse | BaseResponse> => {
  return {
    code: 200,
    message: 'User is logged in',
    data: {
      id: '1',
      name: 'John Doe',
      password: '123456',
      email: 'john@mail.com',
    },
  }
}