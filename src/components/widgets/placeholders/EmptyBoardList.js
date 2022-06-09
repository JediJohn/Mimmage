import {Link} from "react-router-dom"

const EmptyBoardList = () => {
    return (
        <h3>
            No Memory Boards yet...  <Link to="/create/input">Create one</Link> to get started!
        </h3>
    )
}

export default EmptyBoardList;


