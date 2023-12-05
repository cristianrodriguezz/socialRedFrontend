

function profileWithoutPhoto() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        fill="#cfcfcf"
        rx="182.307"
        ry="180.361"
        strokeWidth="0"
        transform="translate(201.073 200)"
      />
      <path
        d="M183.201 233.63c36.79-4.226 69.862 4.193 99.279 26.05 18.82 13.983 32.882 31.886 42.608 53.238 1.228 2.697 1.047 4.327-1.218 6.41-37.675 34.632-82.014 51.215-133.138 48.465-42.819-2.304-79.903-18.663-111.558-47.558-2.928-2.673-3.5-4.668-1.68-8.383 21.652-44.22 56.677-70.29 105.707-78.222zM129.286 147.818c-7.077-54.911 45.334-96.333 96.294-76.945 33.066 12.58 51.112 46.183 44.378 80.894-6.422 33.107-36.365 57.363-70.51 57.119-35.115-.251-63.724-24.994-70.162-61.068z"
        fill="#fefefe"
      />
    </svg>
  )
}


const Avatar = ({ photo }) => {
  return (
    <div className="w-14 h-14">
      {
        photo ? <img src={photo} alt="Foto de perfil" className="w-full h-full object-cover rounded-full"/> : profileWithoutPhoto()
      }
    </div>
  )
}




export default Avatar