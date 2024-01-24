import { userState } from "../types/types-config";

export const handleInputValue = (
  state: userState,
  payload: string
): userState => {
  return { ...state, input: payload };
};

export const handleFileData = (state: userState, payload: Blob): userState => {
  return { ...state, fileData: payload };
};

export const handleFilename = (
  state: userState,
  payload: string
): userState => {
  return { ...state, fileName: payload };
};

export const handleIsDownloadable = (
  state: userState,
  payload: boolean
): userState => {
  return { ...state, isDownloadable: payload };
};

export const handleError = (state: userState, payload: boolean): userState => {
  return { ...state, error: payload };
};

export const handleSpinner = (
  state: userState,
  payload: boolean
): userState => {
  return { ...state, spinner: payload };
};
