import Form from "./Components/Form";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import {WholePage} from "./styled-components/FormStyle"


function App() {
  return (
    <WholePage className="App">
   <Header />
   <Sidebar />
   <Form />
    </WholePage>
  );
}

export default App;
