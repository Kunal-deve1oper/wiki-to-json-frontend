import { userState } from "../types/types-config";

export const initialState: userState = {
    input: "",
    fileData: new Blob(),
    fileName: "",
    isDownloadable: false,
    error: false,
    spinner: false
}