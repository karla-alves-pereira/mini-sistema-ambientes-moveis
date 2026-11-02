import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

export const Input = forwardRef<TextInput, TextInputProps>((props, ref) => {
  return (
    <TextInput
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';