import axios from "axios";
import { useRef, useState } from "react";
import ImageLogo from "../src/assets/image.svg";
import PropTypes from "prop-types";

const UploadPage = ({ setUploadedFileURL, setIsLoading }) => {
  const [error, setError] = useState();
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);

  const onFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("fileName", selectedFile.name);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      try {
        const response = await axios.post(
          "http://localhost:4000/upload",
          formData,
          config
        );
        console.log(response.data, "response");
        setUploadedFileURL(response.data.file);
        setIsLoading(false);
      } catch (error) {
        console.error("Error uploading file: ", error);
        setError(error);
        setIsLoading(false);
      }
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <div className="bg-[#FAFAFB] m-0 h-[100vh] grid place-items-center">
        <div className="flex flex-col py-9 px-8 h-[469px] aspect-[40/49] bg-white border-2 rounded-xl">
          <div className="headercontent">
            <h3 className="text-xl">Upload your image</h3>
            <p className="mt-4 text-xs">File should be jpeg Png...</p>
          </div>
          <div className="w-full aspect-[338/218] border-2 border-dotted mt-8 py-10 border-[#97BEF4] bg-[#F6F8FB]">
            <div className="flex flex-col items-center">
              <img src={ImageLogo} alt="image" width={114.13} height={88.24} />
              <h2 className="mt-12">Drag & Drop your image here</h2>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p>Or</p>
            <input
              ref={inputRef}
              style={{ display: "none" }}
              type="file"
              onChange={onFileChange}
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="bg-[#2F80ED] px-4 py-2 rounded-xl text-white mb-9 cursor-pointer"
            >
              Choose a file and Upload
            </button>
            {error && <p>Error uploading file: {error.message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

UploadPage.propTypes = {
  setUploadedFileURL: PropTypes.func,
  setIsLoading: PropTypes.func,
};

export default UploadPage;
