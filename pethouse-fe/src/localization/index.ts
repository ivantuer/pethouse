import { en } from './en'
import { TranslationObjectType, ua } from './ua'

const messages: { [key in 'ua' | 'en']: TranslationObjectType } = {
  en: en,
  ua: ua,
}

export default messages
