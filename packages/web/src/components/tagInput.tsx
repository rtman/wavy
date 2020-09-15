/* eslint-disable no-use-before-define */
import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import { Artist } from 'types';

export interface TagsData {
  name: string;
  id: string;
}

export interface TagsInputProps {
  data: Artist[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  })
);

export const TagInput = (props: TagsInputProps) => {
  const classes = useStyles();
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

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple={true}
        id="tags-standard"
        options={props.data}
        getOptionLabel={(option) => option.name}
        open={open}
        onOpen={handleOpen}
        onClose={() => setOpen(false)}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        filterSelectedOptions={true}
        // defaultValue={}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Supporting Artists"
            // placeholder="Favorites"
          />
        )}
      />
    </div>
  );
};
