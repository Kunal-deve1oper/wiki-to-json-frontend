import { userState } from "../types/types-config";
import { DOWNLOAD, ERROR, FILE_CONTENT, FILE_NAME, INPUT_, SPINNER } from "./actionlist";
import { action } from "./actiontypes";
import {
  handleError,
  handleFileData,
  handleFilename,
  handleInputValue,
  handleIsDownloadable,
  handleSpinner,
} from "./dispatchFunctions";

export const myReducer = (state: userState, action: action): userState => {
  switch (action.type) {
    case INPUT_:
      return handleInputValue(state, action.payload);
    case FILE_CONTENT:
      return handleFileData(state, action.payload);
    case FILE_NAME:
      return handleFilename(state,action.payload);
    case DOWNLOAD:
      return handleIsDownloadable(state, action.payload);
    case ERROR:
      return handleError(state,action.payload);
    case SPINNER:
      return handleSpinner(state, action.payload);
    default:
      return state;
  }
};
