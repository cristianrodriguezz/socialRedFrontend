import { useState } from 'react';
import axios from 'axios';
import getUserFromLocalStorage from '../utils/getUserFromLocalStorage';

const useFileUploader = () => {
  const url = import.meta.env.VITE_BACKEND_URL
  const [fileData, setFileData] = useState({
    file: null,
    userId: getUserFromLocalStorage().id, 
  });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null);

  const generateRandomFileName = () => {
    const randomBigInt = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    return `file_${randomBigInt}`;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileData({ ...fileData, file: e.target.files[0] })
    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile)
      setPreviewUrl(previewUrl);
    }
  }

  const uploadFile = async () => {
    const apiUrl = `${url}api/photos/upload?userId=${fileData.userId}`

    const formData = new FormData();

    const randomFileName = generateRandomFileName();

    formData.append('photo', fileData.file, randomFileName);
    formData.append('userId', fileData.userId);

    try {
      setLoading(true);
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      setError('Error al realizar la solicitud: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    fileData,
    loading,
    error,
    handleFileChange,
    uploadFile,
    previewUrl
  };
};

export default useFileUploader;
