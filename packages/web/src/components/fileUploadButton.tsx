import { IconButton, makeStyles, Theme } from '@material-ui/core';
import UploadIcon from '@material-ui/icons/CloudUpload';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme: Theme) => ({
  activeDropTarget: {
    boxSizing: 'border-box',
    border: `2px dotted ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius * 2,
    margin: -2 - theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

export const FileUpload = () => {
  //   const { acceptedTypes } = props;
  const classes = useStyles;

  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isDragActive,
  } = useDropzone({
    accept: 'audio/*',
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <IconButton type="submit" color="primary" onClick={open}>
        <UploadIcon />
      </IconButton>
    </div>
  );
};
