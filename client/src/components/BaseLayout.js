import Menu from "./Menu";


function BaseLayout(props) {
    console.log(props)
    return(
        <div>
            <Menu/>
            {props.children}

        </div>
    )
}

export default BaseLayout