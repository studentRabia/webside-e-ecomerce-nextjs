
import Herro from "./components/herro";
import Category from "./components/category";
import Products from "./components/product";
import Music from "./components/music";
import Explore from "./components/explore";
import Futured from "./components/fetured";
import Freedelvry from "./components/free";
import FreshSales from "./components/freshSales";


export default function Home() {
    return(
      <div className="bg-sky-100">
        
         <Herro/>
         <FreshSales/>
         <Category/>
         <Products/>
         <Music/>
         <Explore/>
         <Futured/>
         <Freedelvry/>
      </div>
    )
}