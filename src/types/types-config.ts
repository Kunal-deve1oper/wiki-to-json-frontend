import { Dispatch } from "react";
import { action } from "../Reducer/actiontypes";

export type userState = {
  input: string;
  fileData: Blob;
  isDownloadable: boolean;
  error: boolean;
  spinner: boolean;
  fileName: string;
};

export type MyContextProps = {
  state: userState;
  dispatch: Dispatch<action>;
};
