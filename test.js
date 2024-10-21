const test =     {
    "success": true,
    "data": [
        {
            "thread_id": 1,
            "likes": 123,
            "comment_title": "@someone",
            "comment_content": "Me too!",
            "created_at": "DATE"

        },

        {
            "thread_id": 2,
            "likes": 12,
            "comment_title": "@someone123",
            "comment_content": "okay!",
            "created_at": "DATE"
        }
    ]
}



test.data.forEach(element => {
    // console.log(element);
    console.log(element.comment_title)
});