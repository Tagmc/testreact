import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/Mycomponent';
//de viet 1 class component
import React from 'react';
//import la moi chi goi 
//import 1 dau "." co nghia la dang o thu muc hiện tại(cùng cấp thư mục);".." ám chỉ thư mục cha
class App extends React.Component
{
  render()
  {
    return (
<div>
      hello bro  Ga qua
      <MyComponent></MyComponent>
    </div>
    );
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello bro wqeegbkhqwegdakhrdfbvrqwkhedbg
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }
export default App;
