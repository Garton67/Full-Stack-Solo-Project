import { NavLink } from "react-router-dom"

function Menu() {
    return(
        <div className="menu">
            <NavLink className="link" to='/' >Home</NavLink>
            <NavLink className="link" to='/Weather'>Weather</NavLink>
            <NavLink className="link" to='/videosearch'>Video Search</NavLink>
            <NavLink className="link" to='/facts'>Facts</NavLink>
        </div>
    )
}

export default Menu