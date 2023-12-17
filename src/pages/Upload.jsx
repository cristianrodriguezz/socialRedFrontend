import ModalOk from "../components/ModalOk";
import useFileUploader from "../hooks/uploadPhoto";
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";


const Upload = () => {
  const {  loading, error, handleFileChange, uploadFile, previewUrl } = useFileUploader();
  const username = getUserFromLocalStorage().username

  const handleSubmit = async (e) => {
    e.preventDefault()
    const uploadOk = document.getElementById('uploadOk')

    const responseData = await uploadFile();

    if (responseData) {
      console.log(responseData);  
      uploadOk.showModal()
    }
  }

  return (

    <form onSubmit={handleSubmit} className="text-bunker-white flex flex-col py-2 2xl:px-[40rem] xl:px-[20rem] lg:px-60 md:px-36 xs:px-24 px-3 items-center space-y-4 h-screen">
      <div className="rounded-lg border border-bunker-white shadow-sm w-full max-h-max" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Subir foto</h3>
          <p className="text-sm text-muted-foreground">Elija su foto para subir</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-56 flex items-center">
            {previewUrl && <img className="w-full h-full flex items-center" src={previewUrl}></img>}
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="file"
            >
              <div className="bg-bunker-logo rounded-full text-3xl text-center flex items-center justify-center w-9 font-semibold cursor-pointer">
                +
              </div>
            </label>
            <input
              className="hidden"
              id="file"
              name="file"
              accept="image/*"
              multiple=""
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-bunker-body bg-bunker-logo transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-bunker-logo/90 h-10 px-4 py-2 w-full"
            type="submit"
            disabled={loading}
          >
            {!loading ? 'Subir' : 'Cargando...'}
          </button>
          {error && <p className="text-bunker-red">Ocurrió un error, intente más tarde</p>}
        </div>
        <ModalOk id='uploadOk' button={'Ir al perfil'} location={`../${username}`}>
          Se subió correctamente
        </ModalOk>
      </div>
    </form>

  
  )
}

export default Upload