import {
  Autocomplete as MaterialAutocomplete,
  AutocompleteProps,
  UseAutocompleteProps,
} from '@material-ui/lab';
import React, { useState } from 'react';

export const Autocomplete = <T,>(
  props: AutocompleteProps<T> & UseAutocompleteProps<T>
) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    if (inputValue.length > 1) {
      setOpen(true);
    }
  };
  const handleInputChange = (
    _event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 1) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  console.log('*debug* props.options', props.options);

  return (
    <MaterialAutocomplete
      open={open}
      onOpen={handleOpen}
      onClose={() => setOpen(false)}
      onInputChange={handleInputChange}
      {...props}
    />
  );
};
