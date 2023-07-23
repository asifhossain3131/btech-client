import { Link } from "react-router-dom";

const Navbar = () => {
    const routes=[
        {
            path:'/',
            name:'Home'
        },
        {
            path:'login',
            name:'Login'
        },
        {
            path:'dashboard',
            name:'Dashboard'
        }
    ]
    return (
        <nav className="bg-black text-white bg-opacity-80 p-4 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">BTech</h1>
          <ul className="flex items-center gap-x-3">
            {
                routes.map((route:{name:string,path:string}, i:number)=>
               <Link to={route.path} key={i}><li>{route.name}</li></Link>
                )
            }
          </ul>
        </nav>
    );
};

export default Navbar;