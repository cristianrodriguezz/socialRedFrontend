
import Image from "./Image"


const ListImage = ({ photos, visibility }) => {

  const oneColumn = {
    'display': 'grid',
    'gap': '6px',
    'gridTemplateColumns': 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))' 
  }
  const threeColumn = {
    'display': 'grid',
    'gap': '6px',
    'gridTemplateColumns': 'repeat(3, 1fr)' 
  }

  const style = visibility ? oneColumn : threeColumn

  return (
    <ul style={style} className="2xl:px-[40rem] px-1 xl:px-[20rem] lg:px-60 md:px-36 xs:px-24  items-center justify-center gap-5">
      {photos.map(photo => 
        <li className='w-full h-full'   key={photo?.id}>
          <Image userid={photo?.userid} link={photo?.link} />
        </li>
      )}
    </ul>
  );
};

export default ListImage