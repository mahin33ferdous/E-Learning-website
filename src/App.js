
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
