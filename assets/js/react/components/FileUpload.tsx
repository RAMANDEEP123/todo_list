import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Assuming you have a function to handle file upload in your service
    // uploadFileToServer(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({task: {description: description, completed: false, goal_id: goalId.toString()}})
    // };

    // const responseCreate = await fetch(
    //     `http://localhost:4000/api/file_upload`,
    //     requestOptions
    // );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/*', 'application/pdf', '.doc', '.docx'], // Specify the accepted file types, e.g., 'image/*' for images
    multiple: false,    // Allow only one file to be dropped at a time
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag & drop a file here, or click to select a file</p>
    </div>
  );
};

export default FileUpload;