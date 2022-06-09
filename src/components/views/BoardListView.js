import { useState } from "react"
import MemoryBoardList from "../layouts//MemoryBoardList";
import BoardListOverBar from "../widgets/bars/BoardListOverBar"
import CreateBoardModal from "../widgets/create/CreateBoardModal"


const BoardListView = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <BoardListOverBar openCreateModal={handleOpen}></BoardListOverBar>
            <MemoryBoardList></MemoryBoardList>
            <CreateBoardModal handleClose={handleClose} open={open}></CreateBoardModal>
        </div>
    )
}

export default BoardListView;
