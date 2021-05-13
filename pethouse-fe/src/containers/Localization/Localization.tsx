import { MainContext } from 'contexts/main/mainContext'
import messages from 'localization'
import { FC, useContext } from 'react'
import { IntlProvider } from 'react-intl'

const LocalizationProvider: FC = ({ children }) => {
  const { state } = useContext(MainContext)
  return (
    <IntlProvider locale={state.lang} messages={messages[state.lang]}>
      {children}
    </IntlProvider>
  )
}

export default LocalizationProvider
