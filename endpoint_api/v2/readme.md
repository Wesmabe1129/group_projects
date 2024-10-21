# RAVEZ API

## API ENDPOINTS OVERVIEW




### RUN APPLICATION

> Verify if the application is running.


#### request header:
```
    GET http://localhost:3000/v1/
```



## FOR NON-EXISTING USER
### SIGN UP

> Creating new user account


#### request header:
```
    PUT http://localhost:3000/v1/account
```

#### request body:
```json

    {
        "username": "username123",
        "password": "password123"
    }
    
    
```

#### Response

```json
    {
        "success": true,
        "message": "Successfully Creating Account"
    }
```

```json
    {
        "success": false,
        "message": "Invalid Credentials"
    }
```



## FOR EXISTING USER
### SIGN IN

> Request user account


#### request header:
```
    POST http://localhost:3000/v1/account
```

#### request body:
```json
    {
        "username": "username123",
        "password": "password123"
    }
```

#### Response
```json
    {
        success: true,
        token: asdasda123
    }
```

```json
    {
        success: false,
        message: {
            "incorrect username or password"
        }
    }
```




## HOME FEEDS
<!-- ### Fetch thread to HOME FEEDS -->
<!-- ### GET /v1/threads/user:id/thread:id -->

> Fetch all thread posts with relevancy

#### request header:
```
    GET /v1/posts?limits=10offsetsortBy=relevancy
    GET /v1/posts/{post_id}
    GET /v1/posts/{post_id}/comments
    GET /v1/posts/{post_id}/comments/{comment_id}
    GET /v1/posts/{post_id}/comments/{comment_id}/replies
```

#### request body:
```json
    {
        "success": "true",
        "data": {
            "sorted_by": "relevancy",
            "thread_posts": [
                {
                    "user_id": 1,
                    "post_id": 1,
                    "title": "too good at good bye",
                    "content": "I love Sam Smith Song! :P",
                    "likes": 12312,
                    "comments": [
                        {
                            "user_id": 255,
                            "comment_content": "Me too!",
                            "likes": 700,
                            "replies": [
                                {
                                    "user_id": 72,
                                    "comment_content": "Good to know!",
                                    "likes": 1231
                                }
                            ]
                        }
                    ],
                    "reposts":123
                },
                {
                    "user_id": 2,
                    "post_id": 2,
                    "title": "too good at good bye",
                    "content": "I love Sam Smith Song! :P",
                    "likes": 112,
                    "comments": [
                        {
                            "user_id": 23,
                            "comment_content": "Me too!",
                            "likes": 69,
                            "replies": [
                                {
                                    "user_id": 99,
                                    "comment_content": "Good to know!",
                                    "likes": 20
                                }
                            ]
                        }
                    ],
                    "reposts":123
                }
            ]
        }

    }
```






# USER FEEDS
## Fetch thread to USER FEEDS
### GET /v1/threads/user:id/thread:id
Fetch all thread to `USER FEED` using user ID and thread ID
    -Fetch all thread to `USER FEED` using user ID and thread ID

    request header:
        link

    request body:
        response




## Report Thread
### POST /v1/report/post:id
allows user to `report` a thread
getting `thread ID`
    -allows user to `report` a thread
    -getting `thread ID`


    request header:
        link

    request body:
        response




## Create Thread
### POST /v1/threads
allows user to `create` a thread
getting the `user ID` and `creating thread ID`
    -allows user to `create` a thread
    -getting the `user ID` and `creating thread ID`


    request header:
        link

    request body:
        response




## Delete Thread
### DELETE /v1/threads/thread:id
allows user to `delete` specific thread
getting the `thread ID`
    -allows user to `delete` specific thread
    -getting the `thread ID`


    request header:
        link

    request body:
        response



## Like Thread
### POST /v1/like/user:id/thread:id
allows user to `like` a thread
getting the `user ID` and `thread ID`
    -allows user to `like` a thread
    -getting the `user ID` and `thread ID`


    request header:
        link

    request body:
        response



## Comment Thread
### POST /v1/comment/user:id/thread:id
allows user to `comment` to thread
getting the `user ID` and `thread ID`
    -allows user to `comment` to thread
    -getting the `user ID` and `thread ID`

    request header:
        link

    request body:
        response



## Repost Thread
### POST /v1/repost/post:id/user:id
allows user to `repost` a thread
getting the `thread ID` and `user ID`
    -allows user to `repost` a thread
    -getting the `thread ID` and `user ID`


    request header:
        link

    request body:
        response
