import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TextInputView from './components/views/TextInputView'
import PrepareView from './components/views/PrepareView'
import MemorizeView from './components/views/MemorizeView'
import MainNav from './components/widgets/bars/MainNav'
import BoardListView from "./components/views/BoardListView";


function App() {
  // const activeStep = useSelector((state) => state.activeStep.value)

  // const activeView = () => {
  //   if (activeStep === 0) {
  //     return <TextInputView></TextInputView>
  //   } else if (activeStep === 1) {
  //     return <PrepareView></PrepareView>
  //   } else if (activeStep === 2) {
  //     return <MemorizeView></MemorizeView>
  //   }
  //   return "View error"
  // }

  return (
    <div className="App">
      <MainNav></MainNav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardListView/>}></Route>
          <Route path="/create" element={<TextInputView/>}></Route>
          <Route path="/edit/:board_id" element={<TextInputView/>}></Route>
          <Route path="/memorize/:board_id" element={<MemorizeView/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
