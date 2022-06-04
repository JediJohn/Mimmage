
exports.handler = async (event) => {
    const boardId = event.queryStringParameters.boardId;
    return {
        statusCode: 200,
        body: JSON.stringify({
            memoryBoard:{
                id: 1,
                title: "Ephesians 1",
                rawText: "1 Paul, an apostle of Jesus Christ by the will of God, to the saints which are at Ephesus, and to the faithful in Christ Jesus: 2 Grace be to you, and peace, from God our Father, and from the Lord Jesus Christ. 3 Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ: 4 According as he hath chosen us in him before the ",
                textDivisions: [
                    {
                        beginKey: -1,
                        color: "#FF8080",
                        endKey: 25,
                        text: " 1  Paul,  an  apostle  of  Jesus  Christ  by  the  will  of  God,  to  the  saints  which  are  at  Ephesus,  and  to  the  faithful  in  Christ  Jesus: "
                    },
                    {
                        beginKey: 25,
                        color: "#b2c2f7",
                        endKey: 61,
                        text: "2  Grace  be  to  you,  and  peace,  from  God  our  Father,  and  from  the  Lord  Jesus  Christ.  3  Blessed  be  the  God  and  Father  of  our  Lord  Jesus  Christ,  who  hath  blessed  us  with  all  spiritual "
                    },
                    {
                        beginKey: 61,
                        color: "#f7cb85",
                        endKey: 78,
                        text: "blessings  in  heavenly  places  in  Christ:  4  According  as  he  hath  chosen  us  in  him  before  the "
                    }
                ]
            }
        })
    }
}