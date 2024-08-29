import { ExampleProvider } from "./providers/UserContext"
import Rotas from "./routes/Rotas"
import './style/index.scss'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";



function App() {

  return (
    <div className="App">

      <PrimeReactProvider >
        <ExampleProvider>
          <Rotas />
        </ExampleProvider>
      </PrimeReactProvider>

      <ToastContainer />
    </div>
  )
}
export default App
