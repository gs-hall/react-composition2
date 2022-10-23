import MainPage from "./MainPage";
import {fetchData} from "./FetchData";

function App() {
  const data=fetchData();
  return (
    <MainPage data={data}/>
  );
}

export default App;
