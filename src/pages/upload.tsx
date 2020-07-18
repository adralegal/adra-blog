import React from "react"
import { PageProps } from "gatsby"
import Upload from "../containers/uploadPage/upload";
import Protectedroute from "../hoc/ProtectedRoute";


const UploadPage: React.FC<PageProps> = ({ data }) => {


  return (
    <>
    <Protectedroute component={Upload} path={"/upload"}/>
    </>
  )
}

export default UploadPage
