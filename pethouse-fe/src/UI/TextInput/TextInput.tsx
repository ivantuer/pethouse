import {
  FormControl,
  FormControlProps as IFormControlProps,
  FormErrorMessage,
  FormErrorMessageProps as IFormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps as IFormLabelProps,
  HelpTextProps as IHelpTextProps,
  Input,
  InputProps as IInputProps,
} from '@chakra-ui/react'

import React, { FC, memo } from 'react'

interface ITextInputProps extends IInputProps {
  helperText?: string
  error?: string
  label?: string
  placeholder?: string
  value?: string
  FormControlProps?: IFormControlProps
  FormLabelProps?: IFormLabelProps
  FormHelperTextProps?: IHelpTextProps
  FormErrorMessageProps?: IFormErrorMessageProps
}

const TextInput: FC<ITextInputProps> = ({
  helperText,
  error,
  value,
  placeholder,
  label,
  FormControlProps,
  FormLabelProps,
  FormHelperTextProps,
  FormErrorMessageProps,
  ...rest
}) => {
  return (
    <FormControl {...FormControlProps} isInvalid={!!error}>
      <FormLabel {...FormLabelProps}>{label}</FormLabel>
      <Input value={value} placeholder={placeholder} {...rest} />
      {helperText && <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>}
      {error && <FormErrorMessage {...FormErrorMessageProps}>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default memo(TextInput)
