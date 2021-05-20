import {
  FormControl,
  FormControlProps as IFormControlProps,
  FormErrorMessage,
  FormErrorMessageProps as IFormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps as IFormLabelProps,
  HelpTextProps as IHelpTextProps,
  TextareaProps as IInputProps,
  Textarea,
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

const TextArea: FC<ITextInputProps> = ({
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
      <Textarea value={value} placeholder={placeholder} {...rest} />
      {helperText && <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>}
      {error && <FormErrorMessage {...FormErrorMessageProps}>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default memo(TextArea)
