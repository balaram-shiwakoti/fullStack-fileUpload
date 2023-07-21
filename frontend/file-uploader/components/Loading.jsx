import "../src/index.css";

const Loading = () => {
  return (
    <div>
      <div className="bg-[#FAFAFB] m-0 h-[100vh] grid place-items-center">
        <div className="flex flex-col py-9 px-8 h-[120px] aspect-[40/49] bg-white border-2 rounded-xl">
          <div className="flex flex-col items-center">
            <p className="mt-4 text-xl">Uploading...</p>
            <div id="progressbar">
              <span id="loading"></span>
              <div id="load">loading</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
