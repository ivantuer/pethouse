import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      html: {
        '@media screen and (max-width: 1365px)': {
          fontSize: 13,
        },
        '@media screen and (min-width: 1366px) and (max-width: 1599px)': {
          fontSize: 14,
        },
        '@media screen and (min-width: 1600px) and (max-width: 1919px)': {
          fontSize: 15,
        },
        '@media screen and (min-width: 1920px)': {
          fontSize: 16,
        },
      },
    },
  },
}

export default extendTheme(theme)
