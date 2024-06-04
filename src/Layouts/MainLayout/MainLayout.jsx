import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

export default function MainLayout() {
  
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
