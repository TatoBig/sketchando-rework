import { useEffect, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from 'services/Firebase'
import Image from 'next/image'
import PanelDrawer from 'layouts/PanelDrawer'
import Loader from 'components/panel/Loader'
import { useForm } from 'react-hook-form'

const New = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [source, setSource] = useState('https://firebasestorage.googleapis.com')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(selectedFile)
  }, [selectedFile])

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const firebaseTest = () => {
    if (selectedFile) {
      console.log('testing firebase')
      console.log(storage)
      const testRef = ref(storage, selectedFile.name)
      uploadBytes(testRef, selectedFile).then((snapshot) => {
        console.log('Uploaded a blob or file!')
        console.log(snapshot)
      })
    }

  }

  const load = async () => {
    try {
      const url = await getDownloadURL(ref(storage, 'image.png'))
      setSource(url)
    } catch (error) {
      console.log(error)
    }
  }

  const loadingTest = (data) => {
    console.log(data)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit(loadingTest)}>
      <h3 className="text-xl font-semibold mb-4">Crear nuevo post</h3>

      <h4 className="text-lg mb-1">Título</h4>
      <input
        type="text"
        className="p-2 w-full transition ease-in-out border-2 border-gray-300 rounded-lg mb-4 focus:border-blue-400 focus:outline-none hover:border-blue-300 "
      />

      <h4 className="text-lg mb-1">Contenido</h4>
      <textarea
        className="p-2 w-full rounded-lg mb-4 border-2 border-gray-300 transition ease-in-out focus:border-blue-400 focus:outline-none hover:border-blue-300"
        cols={30}
        rows={8}
      />

      <h4 className="text-lg mb-1">Categoría</h4>
      <select defaultValue="0" className="form-select appearance-none w-full px-3 py-1.5 text-gray-700 bg-white border-2 border-gray-300 rounded-lg mb-4
        transition ease-in-out  focus:border-blue-400 focus:outline-none hover:border-blue-300"
      >
        <option value="0">Seleccionar una categoría</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <div>
        <label
          htmlFor="file"
          className="mb-4 py-6 text-xl bg-white text-blue-400 font-semibold cursor-pointer rounded-xl border-2 border-blue-300 
          transition ease-in-out hover:border-blue-400 flex justify-center"
        >
          {selectedFile ? selectedFile.name :
            <div className="flex flex-col items-center">
              Agregar archivos
              <Image src="/upload.svg" alt="Upload file" width={40} height={40} />
            </div>}
        </label>
        <input
          type="file"
          name="file"
          id="file"
          className="w-0.5 h-0.5 overflow-hidden absolute z-0 opacity-0 bg-black pointer-events-none"
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-row-reverse">
        <button
          className={
            loading
              ? "flex flex-row items-center py-1.5 px-2 rounded-xl text-white font-semibold transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-110 hover:bg-blue-500 duration-200 bg-blue-500"
              : "flex flex-row items-center py-1.5 px-2 rounded-xl text-white font-semibold transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-110 hover:bg-blue-500 duration-200 bg-blue-600"
          }
          type="submit"
          disabled={loading}
        >
          <div className="w-3/4">
            Guardar
          </div>
          <div className="w-1/4 ml-2">
            {loading && <Loader color="#ffffff" size="20" />}
          </div>
        </button>

      </div>
    </form>
  )
}

New.layout = PanelDrawer

export default New



{/* <button onClick={() => load()}>
            load
          </button>
          <Image width="200" height={200} alt="nah" src={source} /> */}