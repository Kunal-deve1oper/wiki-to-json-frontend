import React, { ChangeEvent } from "react";
import axios from "axios";
import {
  DOWNLOAD,
  ERROR,
  FILE_CONTENT,
  FILE_NAME,
  INPUT_,
  SPINNER,
} from "../Reducer/actionlist";
import { useMyContext } from "../contexts/userContext";

const DownloadButton: React.FC = () => {
  const { state, dispatch } = useMyContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: INPUT_, payload: e.target.value });
  };

  const handleSearch = async (
    e: ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch({ type: SPINNER, payload: true });
    dispatch({ type: DOWNLOAD, payload: false });
    dispatch({ type: ERROR, payload: false });
    try {
      const response = await axios({
        method: "get",
        url: `https://wiki-to-json.onrender.com/wiki?q=${state.input}`,
        responseType: "blob",
      });

      const blob = new Blob([response.data]);
      const segments = state.input.split("/");
      dispatch({ type: FILE_CONTENT, payload: blob });
      dispatch({
        type: FILE_NAME,
        payload: segments[segments.length - 1],
      });
      dispatch({ type: SPINNER, payload: false });
      dispatch({ type: DOWNLOAD, payload: true });
    } catch (error) {
      dispatch({ type: DOWNLOAD, payload: false });
      dispatch({ type: SPINNER, payload: false });
      dispatch({ type: ERROR, payload: true });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(state.fileData);
    const file = `${state.fileName}.json`;
    link.download = file;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-slate-500">
      <h1 className="text-2xl md:text-5xl text-white">WIKIPEDIA TO JSON</h1>
      <p className="text-white text-center p-4 md:text-xl">
        Paste a wikipedia link and get the scraped json file
      </p>
      <div className="flex flex-col justify-center items-center md:min-h-[80vh] min-h-96">
        <form className="md:w-[500px] w-[250px] m-7" onSubmit={handleSearch}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Paste Wiki link..."
              required
              value={state.input}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        {state.spinner && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>{`.spinner_6kVp{transform-origin:center;animation:spinner_irSm .75s infinite linear}@keyframes spinner_irSm{100%{transform:rotate(360deg)}}`}</style>
            <path
              d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
              className="spinner_6kVp"
            />
          </svg>
        )}
        {state.isDownloadable && (
          <div className="flex justify-evenly items-center md:w-[400px] w-[285px]">
            <div className="flex justify-center items-center md:p-3 p-1 border-2 border-green-400 rounded-md">
              <p className="text-white">
                {state.fileName.length < 15
                  ? state.fileName
                  : state.fileName.slice(0, 15) + "..."}
                .json
              </p>
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white md:py-2 md:px-2 p-1 rounded inline-flex items-center"
              onClick={handleDownload}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        )}
        {state.error && <div className="text-red-400">ERROR</div>}
      </div>
    </div>
  );
};

export default DownloadButton;
