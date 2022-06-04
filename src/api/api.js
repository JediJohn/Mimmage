import axios from "axios"


export const MemoryBoardAPI = {
    getMemoryBoards: async () => {
        return axios('/api/getMemoryBoards') //{method: 'get', url:'/api/getMemoryBoards'});
    },
    getMemoryBoard: async (boardId) => {
        return axios({
            method: 'get',
            url:`/api/getMemoryBoard/${boardId}`
        })
    }
}