import { NavLink,useRouteError } from "react-router-dom"

export const Errorpage = () =>{
    const error =  useRouteError();
    return(
        <div>
            <h1>404 Error</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"><button>Go Back</button></NavLink>
        </div>
    )
}