
import Image from "./Image"


const ListImage = ({ photos }) => {

  return (
    <ul id="images" className="2xl:px-[40rem] px-1 xl:px-[20rem] lg:px-60 md:px-36 xs:px-24  items-center justify-center gap-5 ">
      {photos.map(photo => 
        <li className="w-full h-full"  key={photo?.id}>
          <Image userid={photo?.userid} link={photo?.link} />
        </li>
      )}
    </ul>
  );
};

export default ListImage