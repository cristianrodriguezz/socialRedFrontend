const Image = ({ userid, link, onClick, className }) => {
  return (
    <img
      className={`max-w-full h-auto object-contain  shadow-md sm:rounded-lg ${className}`}
      onClick={onClick}
      alt={userid}
      src={link}
      key={userid}
      loading="lazy"
    />
  );
};

export default Image;
