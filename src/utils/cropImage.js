export const getCroppedImg = (imageSrc, crop) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const ctx = canvas.getContext('2d');

      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = crop.width * pixelRatio;
      canvas.height = crop.height * pixelRatio;

      canvas.style.width = `${crop.width}px`;
      canvas.style.height = `${crop.height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob(
        (blob) => {
          resolve(URL.createObjectURL(blob));
        },
        'image/jpeg',
        1 // Calidad de la imagen (0 a 1)
      );
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
};
