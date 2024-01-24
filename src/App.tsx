import { useReducer } from "react";
// import Form from "./components/Form";
import { myReducer } from "./Reducer/dispatcher";
import { myContext } from "./contexts/userContext";
import { initialState } from "./Reducer/initialState";
import DownloadButton from "./components/DownloadButton";


function App() {
  
  const [state,dispatch] = useReducer(myReducer,initialState);

  return (
    <myContext.Provider value={{state,dispatch}}>
      {/* <Form/> */}
      <DownloadButton/>
    </myContext.Provider>
  )
}

export default App
