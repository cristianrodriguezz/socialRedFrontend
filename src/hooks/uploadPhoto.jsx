import { useState } from 'react';
import axios from 'axios';
import getUserFromLocalStorage from '../utils/getUserFromLocalStorage';

const useFileUploader = () => {
  const idUser = getUserFromLocalStorage().id
  const url = import.meta.env.VITE_BACKEND_URL
  const [fileData, setFileData] = useState({
    file: null,
    userId: idUser, 
  });
  const [loading, setLoading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');

  const generateRandomFileName = () => {
    const randomBigInt = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    return `${idUser}_${randomBigInt}`;
  };
  const validateFile = (event) => {
    const input = event.target
  
    if (input.files.length > 0) {
      const files = input.files[0]
      const types = ['image/jpeg', 'image/png', 'image/jepg'];
  
      if (!types.includes(files.type)) {
        setError('Tipo de archivo no permitido. Por favor, selecciona otro archivo.')
        input.value = ''
        return false
      } else {
        setError('');
        return true
      }
    }
  
    return false
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (validateFile(e)) {      
      setFileData({ ...fileData, file: e.target.files[0] })

      if (selectedFile) {
        const previewUrl = URL.createObjectURL(selectedFile)
        setPreviewUrl(previewUrl);
      }
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
      await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setPreviewUrl(null)
      return true
    } catch (error) {
      return false
    } finally {
      setPreviewUrl(null)
      setLoading(false);
      formData.delete("photo");
      formData.delete("userId");
    }
  };

  return {
    fileData,
    loading,
    handleFileChange,
    uploadFile,
    previewUrl,
    error
  };
};

export default useFileUploader;
