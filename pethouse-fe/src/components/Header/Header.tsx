import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, Image } from '@chakra-ui/react'
import { PROFILE_PATH } from 'constants/routes'
import MAIN_CONTEXT_ACTION_TYPES from 'contexts/main/actionTypes'
import { MainContext } from 'contexts/main/mainContext'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo, useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import PetHouseLogo from 'assets/pethouse_logo.png'

const Header: FC<IWithLocalization> = ({ intl }) => {
  const { state, dispatch } = useContext(MainContext)
  const changeLangToEn = useCallback(() => {
    dispatch({ type: MAIN_CONTEXT_ACTION_TYPES.SET_LANG, payload: 'en' })
  }, [])
  const changeLangToUa = useCallback(() => {
    dispatch({ type: MAIN_CONTEXT_ACTION_TYPES.SET_LANG, payload: 'ua' })
  }, [])
  return (
    <Box bg="teal" display="flex" alignItems="center" justifyContent="space-between" px={['0.5rem', '1rem', '2rem']} py="0.5rem">
      {/* <Text color="white" fontSize="4xl">
        PetHouse
      </Text> */}
      {/* <Box h="2rem"> */}
      <Image h={['3rem', '100%']} src={PetHouseLogo} alt="PetHouse" />
      {/* </Box> */}
      <Box display="flex" alignItems="center">
        <Box mr="2rem">
          <Menu placement="bottom-end">
            {({ isOpen }) => (
              <>
                <MenuButton textTransform="uppercase" minW="5rem" as={Button} rightIcon={<ChevronDownIcon />}>
                  {state.lang}
                </MenuButton>
                {isOpen && (
                  <MenuList minW="5rem">
                    <MenuItem textTransform="uppercase" onClick={changeLangToEn}>
                      {intl('en')}
                    </MenuItem>
                    <MenuItem textTransform="uppercase" onClick={changeLangToUa}>
                      {intl('ua')}
                    </MenuItem>
                  </MenuList>
                )}
              </>
            )}
          </Menu>
        </Box>
        <Link to={PROFILE_PATH}>
          <Text color="white">{intl('profile')}</Text>
        </Link>
      </Box>
    </Box>
  )
}

export default memo(withLocalization(Header))
