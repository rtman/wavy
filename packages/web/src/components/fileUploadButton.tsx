import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';

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

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {
    getRootProps,
    getInputProps,
    open,
    // acceptedFiles,
    // isDragActive,
  } = useDropzone({
    accept: acceptedTypes,
    noClick: noClick ?? true,
    noKeyboard: noKeyboard ?? true,
    multiple: multiple ?? false,
    onDrop,
  });

  return (
    <Button type="submit" variant="outlined" color="primary" onClick={open}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Typography variant="body2">Add Song</Typography>
      </div>
    </Button>
  );
};
