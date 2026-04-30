import Header from '../../Layouts/Shared/Header'
import ImagesPage from './ImagesPage'
import ImagesTable from './ImagesTable'

const Images = () => {
      return (
            <>
                  <Header
                        heading={"Admin Dashboard Image Management"}
                        subtitle={"Upload, organize, and manage dashboard images."}
                  />
                  <ImagesPage />
            </>
      )
}

export default Images