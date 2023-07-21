import PropTypes from "prop-types";
import GreenTick from "../src/assets/green-tick.svg";
import { useRef, useState } from "react";

const SuccessUpload = ({ uploadedFileURL }) => {
  const textAreaRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  };

  return (
    <div>
      <div className="bg-[#FAFAFB] m-0 h-[100vh] grid place-items-center">
        <div className="flex flex-col py-9 px-8 h-[469px] aspect-[40/49] bg-white border-2 rounded-xl">
          <div className="flex flex-col items-center">
            <img src={GreenTick} alt="gree-tick" width={35} height={35} />
            <p className="mt-4 text-xs">Upload succesfull</p>
          </div>
          <div className="w-full aspect-[338/218]  border-dotted mt-4 py-10 border-[#97BEF4] bg-[#F6F8FB]">
            <div className="flex w-[340px] h-[226x] flex-col items-center">
              <img
                src={uploadedFileURL}
                alt="Uploaded content"
                width={338.13}
                height={224.24}
              />
              {copySuccess}
            </div>
          </div>
          <div className="flex justify-evenly border-2 items-center py-3 pl-2 gap-2  ">
            <div className="w-2/3 ">
              <input
                ref={textAreaRef}
                className="truncate w-full text-xs overflow-hidden"
                defaultValue={uploadedFileURL}
                type="text"
              />
            </div>
            <div className="w-[40%]">
              <button
                onClick={copyToClipboard}
                className="bg-[#2F80ED] py-2 text-white rounded-md px-4"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SuccessUpload.propTypes = {
  uploadedFileURL: PropTypes.string,
};

export default SuccessUpload;
