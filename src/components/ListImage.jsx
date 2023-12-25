import { useState } from 'react';
import Image from './Image';
import Back from '../icons/Back'
import NotPhotos from '../components/NotPhotos'

import { flushSync } from 'react-dom';

const ListImage = ({ photos, visibility, loading }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (userid, photo) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setSelectedImage({ userid, photo });
          setModalOpen(true)
        })
      })
    } else {
      setSelectedImage({ userid, photo });
      setModalOpen(true);
    }
  }

  console.log(photos)
  console.log(loading)

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const oneColumn = {
    display: 'grid',
    gap: '6px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',

  }

  const threeColumn = {
    display: 'grid',
    gap: '6px',
    gridTemplateColumns: 'repeat(3, 1fr)',

  }

  const style = visibility ? oneColumn : threeColumn;

  return (
      <div>
        {photos.length === 0 && loading ? (
          <NotPhotos>
            No tienes fotos aún
          </NotPhotos>
        ) :  (
          <ul
            style={style}
            className="2xl:px-[40rem] px-1 xl:px-[20rem] lg:px-60 md:px-36 xs:px-24 items-center justify-center gap-5"
          >
            {photos.map((photo) => (
              <li className='w-full h-full' key={photo?.id}>
                <Image
                  userid={photo?.userid}
                  link={photo?.link}
                  onClick={() => handleImageClick(photo?.userid, photo)}
                />
              </li>
            ))}
          </ul>
        ) }
    
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <Back onClick={handleCloseModal} />
              <img src={selectedImage.photo.link} loading="lazy" alt={`Imagen de ${selectedImage.userid}`} />
            </div>
          </div>
        )}
      </div>
    )
  
  }
export default ListImage;
