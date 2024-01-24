import { DOWNLOAD, ERROR, FILE_CONTENT, FILE_NAME, INPUT_, SPINNER } from "./actionlist";

export type action =
  | { type: typeof INPUT_; payload: string }
  | { type: typeof FILE_CONTENT; payload: Blob }
  | { type: typeof FILE_NAME; payload: string }
  | { type: typeof DOWNLOAD; payload: boolean }
  | { type: typeof ERROR; payload: boolean }
  | { type: typeof SPINNER; payload: boolean };
