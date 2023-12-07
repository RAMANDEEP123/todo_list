import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './common.css';
const FileUpload = ({ goalId }) => {
  const [selectedFileName, setSelectedFileName] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    setSelectedFileName(acceptedFiles[0].name);

    const response = await fetch('http://localhost:4000/api/file_upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/*', 'application/pdf', '.doc', '.docx'],
    multiple: false,
  });

  return (
    <div className="file-upload-container" {...getRootProps()}>
      <input {...getInputProps()} />
      <button>
        Upload File
      </button>
      {selectedFileName && <p className="selected-file">Selected File: {selectedFileName}</p>}
    </div>
  );
};

export default FileUpload;