export interface ISignUpSchema {
  email: string
  password: string
  passwordConfirm: string
  firstName: string
  lastName: string
}

export interface IConfirmSignUpSchema {
  code: string
}

export interface ILogInSchema {
  email: string
  password: string
}
