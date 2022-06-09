
exports.handler = async (event) => {
    const board_id = event.queryStringParameters.board_id;
    console.log("hit setTextDivisions", JSON.parse(event.body))
    return {
        statusCode: 201,
        body: JSON.stringify({id:board_id,  body:JSON.parse(event.body)})
    }
}