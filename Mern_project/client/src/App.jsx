import { Routes, Route } from 'react-router-dom'
import AuthLayout from './Components/auth/layout'
import AuthLogin from './Pages/auth/login';
import AuthRegister from './Pages/auth/register';
import AdminLayout from './Components/admin-view/layout';
import AdminDashBorad from './Pages/admin-view/dashborad';
import AdminProduct from './Pages/admin-view/product';
import AdminOrder from './Pages/admin-view/order';
import AdminFeatures from './Pages/admin-view/features';
import ShoppingLayout from './Components/shopping-view/layout';
import PageNotFound from './Pages/not-found/pagenotfound';
import ShoppingHome from './Pages/shopping-view/home';
import ShoppingAccount from './Pages/shopping-view/account';
import ShoppingCheckout from './Pages/shopping-view/checkout';
import ShoppingListing from './Pages/shopping-view/listing';
import CheckAuth from './Components/common/check-auth';
import UnAuthPage from './Pages/unauth-page/unauth-page';


function App() {

     const isAuthenticated = true ;
     const user ={
      name: "yash",
      role: "user"
     } ;

  return (
    <div className="flex  flex-col overflow-hidden bg-white">
      {/*common component*/}


      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path="/admin" element={  
           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>}>
          <Route path="dashborad" element={<AdminDashBorad/>}/>
          <Route path="products" element={<AdminProduct/>}/>
          <Route path="orders" element={<AdminOrder/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
        </Route>
        <Route path="/shop" element={  
           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>}>
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
        </Route>
        <Route path="/unauth-page" element={<UnAuthPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
