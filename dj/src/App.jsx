import Header from "./Header";
import Body from "./Body";
import Prices from "./Prices";
import { Route, Routes } from "react-router-dom"

function App(){
  return(
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/prices" element={<Prices/>}/>
        </Routes>
      </main>
    </div>

  );
}

export default App  