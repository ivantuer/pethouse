import { TranslationKeys } from 'localization/ua'
import { useIntl } from 'react-intl'

export const useLocalization = () => {
  const Intl = useIntl()
  const intl = (key: TranslationKeys, values?: Record<string, string | number | boolean | Date | null | undefined> | undefined): string =>
    Intl.formatMessage({ id: key as any }, values)
  return intl
}
