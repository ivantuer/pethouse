import {
  FormControl,
  FormControlProps as IFormControlProps,
  FormErrorMessage,
  FormErrorMessageProps as IFormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps as IFormLabelProps,
  HelpTextProps as IHelpTextProps,
  Select as ChakraSelect,
  SelectProps as ISelectProps,
} from '@chakra-ui/react'

import { FC, memo } from 'react'

interface SelectProps extends ISelectProps {
  helperText?: string
  error?: string
  label?: string
  placeholder?: string
  value?: string
  options?: any[]
  FormControlProps?: IFormControlProps
  FormLabelProps?: IFormLabelProps
  FormHelperTextProps?: IHelpTextProps
  FormErrorMessageProps?: IFormErrorMessageProps
}

const Select: FC<SelectProps> = ({
  helperText,
  error,
  value,
  placeholder,
  label,
  FormControlProps,
  FormLabelProps,
  FormHelperTextProps,
  FormErrorMessageProps,
  options,
  ...rest
}) => {
  return (
    <FormControl {...FormControlProps} isInvalid={!!error}>
      <FormLabel {...FormLabelProps}>{label}</FormLabel>
      <ChakraSelect value={value} placeholder={placeholder} {...rest}>
        {options?.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </ChakraSelect>
      {helperText && <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>}
      {error && <FormErrorMessage {...FormErrorMessageProps}>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default memo(Select)
