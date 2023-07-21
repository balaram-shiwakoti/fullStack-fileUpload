import "./App.css";
import { useState } from "react";
import UploadPage from "../components/UploadPage";
import SuccessUpload from "../components/SuccessUpload";
import Loading from "../components/Loading";

function App() {
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {uploadedFileURL ? (
        <SuccessUpload uploadedFileURL={uploadedFileURL} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <UploadPage
          setIsLoading={setIsLoading}
          setUploadedFileURL={setUploadedFileURL}
        />
      )}
    </>
  );
}

export default App;
