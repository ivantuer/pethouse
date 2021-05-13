import { useLocalization } from 'hooks/useLocalization'
import { FC } from 'react'

export interface IWithLocalization {
  intl: ReturnType<typeof useLocalization>
}

const withLocalization = (WrappedComponent: FC<IWithLocalization>) => {
  const EnhancedComponent = () => {
    const intl = useLocalization()
    return <WrappedComponent intl={intl} />
  }

  return EnhancedComponent
}

export default withLocalization
