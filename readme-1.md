<h1 align="center">RAVEZ API<h1>
<hr>

## API ENDPOINTS OVERVIEW




### ` GET ` RUN APPLICATION

> Verify if the application is running.


#### request header:
```
    GET http://localhost:3000/v1/
```



## FOR NON-EXISTING USER
### ` PUT ` SIGN UP

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
        "account_id": 123,
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
### ` POST ` SIGN IN

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
        "success": true,
        "token": asdasda123
    }
```

```json
    {
        "success": false,
        "message": {
            "incorrect username or password"
        }
    }
```


<br>
<br>
<br>
<br>
<br>



<br>
<br>
<br>
<br>
<br>

# Thread Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>

<hr>
<br>
 

## ` GET ` All Thread's

> Fetch All Thread's posted by all User or User Follower's and can be also base on filtering of `sortedBy` , this will be used for our Home page, `limits & offset ` will be the result of pagination to create the infinite scroling effect 


### Request Header
```
    GET http://localhost:3000/v1/threads?limits=10&offset=10&sortBy=relevancy
```
##

<br>
<br>

## ` GET ` User Thread's

>  Fetch all thread to the specified user by account_id or in short ` User Thread's  `

### Request Header
``` 
    GET http://localhost:3000/v1/threads/{account_id}
```
##

<br>
<br>

## `GET` Search Thread's

> Fetch a specific Thread Post's base on the `Search query` by the user

### Request Header
```
    GET http://localhost:3000/v1/threads/search?query={query_search}
```
##

<br>
<br>

## ` POST ` Create New Thread

> Creates a New thread post for the designated Account

### Request Header
```
    POST http://localhost:3000/v1/thread
```

### Request Body:

```json
    {
        "title": "Cats are the Best",
        "content":"Lol I love Cats cause they look like living floof balls :3",
        "hash_tags":["#owo","#loving-cats-for-layf"],
    }
```

### Response

#### Success Response 🟢
```json
    "success":true,
    "message": "Thread succesfuly Created!, Hooray 🎉"
```

#### Error Response 🔴
```json
    {
        "success":false,
        "message": "Missing something on your Thread, Ensure you have a title and, of course the Content!. ⚠️"
    }
```



<br>
<br>

## ` POST ` Report Thread

> Reporting a Thread Post can result into banning of the specific Thread Post and may result of delition of the Post

### Request Header
```
    POST http://localhost:3000/v1/threads/{thread_id}/report
```

### Request Body
```json
    {
        "reason": "Sexual Abuse"
    }
```

### Response

#### Success Response 🟢
```json
    {
        "success": true,
        "message": "Thread reported successfully 🔰"
    }
```

#### Error Response 🔴
```json
    {
        "success": false,
        "message": "Failed to report thread 🚩"
    }
```
##

<br>
<br>

## ` DELETE ` Remove Thread

> Remove's specific thread with the ` thread_id ` given 

### Request Header
```
    DELETE http://localhost:3000/v1/threads/{thread_id}/delete
```
### Success Response 🟢
```json
    {   
        "success": true,
        "message": "Successfully Delete Thread"
    }
```
### Error Response 🟢
```json
    {   
        "success": false,
        "message": "Can't perform delete at this moment"
    }
```

<br>
<br>
<hr>

<br>
<br>
<br>
<br>
<br>



## ` POST ` Like Thread

> allows user to `like` a thread


request header:
```
    POST http://localhost:3000/v1/threads/{thread_id}/like
```

### request body
```json
    {
        "success": true,
        "data": [
            {
                "thread_id": 123,
                "like": 42
            }
        ]
    }
```

### Success Response 🟢
```json
    "success": true,
    "message": "You like a thread" || "You unlike a thread"
```

### Error Response 🔴
```json
    "success": false
    "message": "Can't perfrom like at this moment" 
```


<!-- ### POST /v1/comment/user:id/thread:id -->

## ` POST ` Comment Thread

> allows user to ` comment ` to thread

<!-- GET /v1/posts/{post_id}/comments
    GET /v1/posts/{post_id}/comments/{comment_id}
    GET /v1/posts/{post_id}/comments/{comment_id}/replies -->

### request header:
```
    POST http://localhost:3000/v1/threads/{thread_id}/comment
```

### request body
```json
    {
        "success": true,
        "data": [
            {
                "thread_id": 1,
                "likes": 123,
                "comment_title": "@someone",
                "comment_content": "Me too!",
                "created_at": "DATE"
            }
        ]
    }
```

### Success Response 🟢
```json
    {
        "success": true,
        "message": "Successfully Commented at thread"
    }
```
### Error Response 🔴
```json
    {
        "success": false,
        "message": "Can't perfrom comment at this moment"
    }
```


## ` GET ` Comment Thread

> fetch all comments in a parent thread

### Request Header
```
    GET  http://localhost:3000/v1/thread/{ thread_id }/comments
```

### Success Response 🟢
```json
    {
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
    
```

### Error Response 🔴
```json
    {
        "success": false,
        "message": "Can't find thread with id { thread_id }"
    }
```


## ` GET ` Follower

> fetch all followers of a user

### Request Header
```
    GET http://localhost:3000/v1/account/{ account_id }/followers
```

### Success Response 🟢

```json
    {
        "success": true,
        "data": [
            {
                "follower_id": 1,
                "follower_username": "John Doe",
            },
            {
                "follower_id": 2,
                "follower_username": "Yeshh",
            },

        ]
    }
```


### Error Response 🔴
```json
    {
        "success": false,
        
    }
```



## `POST` Repost Thread

> allows user to `repost` a thread

### Request Header
```
    POST http://localhost:3000/v1/thread/{ thread_id }/repost
```

### request body
```json
    {
        "success": true,
        "thread_id": 12,

    }
```

### Success Response 🟢
```json
    "success": true,
    "message": "successfully repost"
```

### Error Response 🔴
```json
    "success": false,
    "message": "Cant perform repost at this moment"
```






























<!-- # HOME Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="30" height="30" align="center"/>

<hr>

## ` GET ` Home Thread's
> Fetch all ` thread posts ` base on ` filter by  sortBy `

### request header:
```
    GET /v1/posts?limits=10&offset=10&sortBy=relevancy
``` -->

<!-- GET /v1/posts/{post_id} -->

<!-- ### response:
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
                    "comments": 16,
                    "reposts":123
                },
                {
                    "user_id": 2,
                    "post_id": 2,
                    "title": "too good at good bye",
                    "content": "I love Sam Smith Song! :P",
                    "likes": 112,
                    "comments": 17,
                    "reposts":123
                }
            ]
        }
    }
``` -->



<!-- ## ` POST ` Following -->




<!-- response
```json
    "comments":
            {
            "user_id": 255,
            "comment_content": "Me too!",
            "replies": [
                {
                    "user_id": 72,
                    "comment_content": "Good to know!",
                    "likes": 1231
                }
                ]
            }
```     -->

<!-- ### response
```json
    {
        "success": "true",
        "data": {
            "user_id": 1,
            "thread_posts": [
                {   
                    "post_id": 1,
                    "title": "too good at good bye",
                    "content": "I love Sam Smith Song! :P",
                    "likes": 12312,
                    "comments": 16,
                    "reposts":123
                },
                {  
                    "post_id": 2,
                    "title": "too good at good bye",
                    "content": "I love Sam Smith Song! :P",
                    "likes": 112,
                    "comments": 17,
                    "reposts":123
                }
            ]
        }
    }
``` -->






<!-- 
# Report Thread

<hr>

<br>

> allows user to `report` a thread -->



<!-- ### request header:
```
    POST /v1/report/{post_id}
``` -->

<!-- ### request body:

```json
    {
        "user_id": 1,
        "thread_id": 12
    }
``` -->

<!-- ### response

```json
    "success": true,
    "message": "Report Successfully!"
```

```json
    "success": false,
    "message": "Report Unsuccessfull!"
```
 -->



<!-- ## Create Thread
<hr>
<br>

> allows user to ` create ` a thread -->


<!-- 
### request header
```
POST /v1/threads
```

### request body
```json
```

### response
```json
    "success": true
```
```json
    "success": false
```




## Delete Thread
<hr>
<br>
### DELETE /v1/threads/thread:id
> allows user to `delete` specific thread



    request header:
        link

### request body
```json
```

### response
```json
    "success": true
```
```json
    "success": false
``` -->





<!-- ## ` POST ` Create Thread Post

> Creates a New thread post for the designated Account

### Request Header
```
    POST http://localhost:3000/v1/threads
```

### Request Body
```json
    {
        "title": "@someone",
        "content": "Lol I love Cats cause they look like living floof balls :3",
        "hash_tags":["#owo","#loving-cats-for-layf"],
    }
``` -->
