const Image = ({ userid, link, onClick, className }) => {
  return (
    <div className="overflow-y-auto max-h-[calc(0.6666666666666666/(526/935)*100%)] top-0 w-full">
      <img
        className={`max-w-full h-auto object-contain  shadow-md sm:rounded-lg ${className}`}
        onClick={onClick}
        alt={userid}
        src={link}
        key={userid}
        loading="lazy"
      />
    </div>
  );
};

export default Image;
