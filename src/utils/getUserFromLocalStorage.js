const getUserFromLocalStorage = () => {
  const storedData = localStorage.getItem('respuestaServidor');
  const user = storedData ? JSON.parse(storedData)?.data?.user : null;
  return user;
};

export default getUserFromLocalStorage