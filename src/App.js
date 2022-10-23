import MainPage from "./MainPage";
import {fetchData} from "./Functions/FetchData";

function App() {
  const data=fetchData();
  return (
    <MainPage data={data}/>
  );
}

export default App;
