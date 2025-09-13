import { Routes, Route } from 'react-router-dom'
import AuthLayout from './Components/auth/layout'
import AuthLogin from './Pages/login';
import AuthRegister from './Pages/register';


function App() {


  return (
    <div className="flex  flex-col overflow-hidden bg-white">
      {/*common component*/}
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
