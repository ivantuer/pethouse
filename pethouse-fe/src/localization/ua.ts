export const ua = {
  login: 'Увійти',
  loginTitle: 'Вхід',
  email: 'Email',
  password: 'Пароль',
  passwordConfirm: 'Підтвердіть пароль',
  signUpTitle: 'Реєстрація',
  signUp: 'Зареєструватись',
  firstName: "Ім'я",
  lastName: 'Прізвище',
  profile: 'Профіль',
  en: 'en',
  apply: 'Застосувати',
  ua: 'ua',
}

const keys = Object.keys(ua) as Array<keyof typeof ua>

export type TranslationKeys = typeof keys[number]
export type TranslationObjectType = typeof ua

export const localeUa = 'ua'
