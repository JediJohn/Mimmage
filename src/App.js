import { useDispatch, useSelector } from "react-redux";

import PrepareView from './components/views/PrepareView'
import MemorizeView from './components/views/MemorizeView'
import MainNav from './components/widgets/bars/MainNav'




function App() {
  const activeStep = useSelector((state) => state.activeStep.value)
  const dispatch = useDispatch()

  const activeView = () => {
    if (activeStep === 0) {
      return <></>
    } else if (activeStep === 1) {
      return <PrepareView></PrepareView>
    } else if (activeStep === 2) {
      return <MemorizeView></MemorizeView>
    }
    return "View error"
  }

  return (
    <div className="App">
      <MainNav></MainNav>
      {activeView()}
    </div>
  );
}

export default App;
