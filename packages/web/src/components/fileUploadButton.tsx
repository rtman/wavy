import { IconButton, makeStyles, Theme } from '@material-ui/core';
import UploadIcon from '@material-ui/icons/CloudUpload';
import React from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';

// const useStyles = makeStyles((theme: Theme) => ({
//   activeDropTarget: {
//     boxSizing: 'border-box',
//     border: `2px dotted ${theme.palette.divider}`,
//     borderRadius: theme.shape.borderRadius * 2,
//     margin: -2 - theme.spacing(2),
//     padding: theme.spacing(2),
//   },
// }));

interface FileUploadProps {
  acceptedTypes?: 'audio/*' | 'image/*';
  onDrop: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
  noClick?: boolean;
  noKeyboard?: boolean;
  multiple?: boolean;
}

export const FileUploadButton = (props: FileUploadProps) => {
  const { acceptedTypes, onDrop, noClick, noKeyboard, multiple } = props;
  //   const classes = useStyles;

  const {
    getRootProps,
    getInputProps,
    open,
    // acceptedFiles,
    // isDragActive,
  } = useDropzone({
    accept: acceptedTypes ?? '*',
    noClick: noClick ?? true,
    noKeyboard: noKeyboard ?? true,
    multiple: multiple ?? false,
    onDrop,
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
