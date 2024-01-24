// import { ChangeEvent } from "react";
// import { useMyContext } from "../contexts/userContext"
// import { DEC_, INC_, INPUT_ } from "../Reducer/actionlist";
// import axios from "axios";

// const Form: React.FC = () => {

//   const {state,dispatch} = useMyContext();

//   const handleIncrement = (): void =>{
//     dispatch({type: INC_,payload: 'increased'});
//   }

//   const handleDecrement = (): void =>{
//     dispatch({type: DEC_, payload: 'decreased'});
//   }

//   const handleChange = (e: ChangeEvent<HTMLInputElement>): void=>{
//     dispatch({type: INPUT_, payload: e.target.value})
//   }

//   const getData = ()=>{
//     let data: string = '';
//     axios.get('http://localhost:5000/wiki', {responseType: 'stream'}).then(response => {
//       data = response.data.toString();
//       console.log(data);
//     }).catch(err=>{
//       console.log(err)
//     });
//     // console.log(data);
//   }

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <h2>{state.msg}</h2>
//       <h2>{state.input}</h2>
//       <input type="text" onChange={handleChange}/>
//       <button onClick={handleIncrement}>Increase</button>
//       <button onClick={handleDecrement}>Decrease</button>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default Form
