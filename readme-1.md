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
##

<br>
<hr>

<br>
<br>
<br>
<br>
<br>

# Thread Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>

<hr>
<br>
 

## ` GET ` All Thread's

> Fetch All Thread's posted by all User or User Follower's and can be also base on filtering of `sortedBy`, `limits & offset ` will be the result of pagination to create the infinite scroling effect 


### Request Header
```
    GET http://localhost:3000/v1/threads?limits=10&offset=10&sortBy=relevancy
```

### Success Response  🟢
```json
{
  "success":true,
  "data": [
    {
    "thread_id": 12,
    "username": "kepler90",
    "content": "#owo #lmao tara kain shawarma ✨",
    "hashtags": ["#owo","#lmao"]
    "likes": 9,
    "comments": 1,
    "created_at": "2024-10-10"
    }
  ]
}
```

### Error Response 🔴
```json
{
  "success":true,
  "data": "Oops i cant find any post 🚩"
}
```
##

<br>
<br>

## ` GET ` User All Thread's

>  Fetch all thread to the specified user by account_id or in short ` User Thread's  `

### Request Header
``` 
    GET http://localhost:3000/v1/threads/{account_id}
```

### Sucess Response 🟢
```json
{
  "success": true,
  "data": [
        {
            "thread_id": 12,
            "account_id":12,
            "username": "TummyOwo",
            "content": "Me too!",
            "hashtags": [],
            "likes": 123,
            "comments": 12,
            "created_at": "2024-10-09"
        },
        {
            "thread_id": 13,
            "username": "TummyOwo",
            "content": "Sheeesh im too lazy #bruh #moments",
            "hashtags": ["#bruh","moments"],
            "likes": 12,
            "comments": 1,
            "created_at": "2024-10-11"
        }
  ]
}
```

### Error Response 🔴
```json
{
  "success": false,
  "data": "Cant find any Thread's 🚩"
}
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

### Sucess Response 🟢
```json
{
  "success": true,
  "data": [
        {
            "thread_id": 12,
            "account_id":12,
            "username": "TummyOwo",
            "content": "I hate cats!",
            "hashtags": [],
            "likes": 123,
            "comments": 12,
            "created_at": "2024-10-09"
        },
        {
            "thread_id": 13,
            "account_id":14,
            "username": "LazyCorn",
            "content": "Lazy cats",
            "hashtags": ["#Laziness","#lazyMonth"],
            "likes": 12,
            "comments": 1,
            "created_at": "2024-10-11"
        }
  ]
}
```

### Error Response 🔴
```json
{
  "success": false,
  "data": "Oops Cant find any Thread's 🚩"
}
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
        "account_id": 12,
        "content":"Lol I love Cats cause they look like living floof balls
        :3 #owo #loving-cats-for-layf",
        "hash_tags":["#owo","#loving-cats-for-layf"],
        "created_at": "2024-10-10",
    }
```
### Success Response 🟢
```json
    "success":true,
    "message": "Thread succesfuly Created!, Hooray 🎉"
```

### Error Response 🔴
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

### Success Response 🟢
```json
    {
        "success": true,
        "message": "Thread reported successfully 🔰"
    }
```

### Error Response 🔴
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

> Remove's specific thread with the `thread_id ` given 

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
### Error Response 🔴
```json
    {   
        "success": false,
        "message": "Oops cant delete this thread sorry 🚩"
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

# Like Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>

<hr>
<br>

## ` PUT ` Like Thread

> allows user to `like` a thread by updating in a method of incrementing


request header:
```
    PUT http://localhost:3000/v1/threads/{thread_id}/like
```

### request body
```json
    {
    "action": "like || unlike"
    }
```

### Success Response 🟢
```json
    "success": true,
    "message": "You like a thread || You unlike a thread"
```

### Error Response 🔴
```json
    "success": false
    "message": "Can't perfrom like at this moment" 
```
##

<br>
<br>

## ` POST ` Like Thread

> allows to have a record of user like on a sepecific thread

request header:
```
    POST http://localhost:3000/v1/threads/{thread_id}/like
```

### request body
```json
    {
    "account_id": 12,
    "created_at": "2024-09-07"
    }
```

### Success Response 🟢
```json
    "success": true,
    "message": "The Like has been successfully recorded on Database ⬆️"
```
##

### Error Response 🔴
```json
{
    "success":false,
    "message": "Something wrong, cant record the like on our Database 🚩"
}
```

<br>
<br>

## ` DELETE ` Like Thread

> Deletes a sepcific like and this represent ` unlike `

request header:
```
    DELETE http://localhost:3000/v1/threads/{thread_id}/like
```

### Success Response 🟢
```json
    "success": true,
    "message": "A like record has been deleted to the database record"
```
##

### Error Response 🔴
```json
    "success": false
    "message": "Oops somethign is wrong, i cant delete the like 🚩"
```
##

<br>
<br>


## ` GET ` All Liker's of a Thread

> Fetches all Likes on a specific thread allows for checking who are the
likers on a thread post, this can be use for viewing Likes

### request header:
```
    GET http://localhost:3000/v1/threads/{thread_id}/likes
```

### Success Response  🟢
```json
{
   "success": true,
   "data": [
       "Lmao90",
       "Yeshel",
       "Vince9090",
       "kittyMr",
       "assmuchasPossible",
       "nigwhat"
   ]
}
```

### Error Response  🔴
```json
  {
    "success": false,
    "data": "Jeez something is wrong, i cant get the liker's Data 🚩"
  }
```
## 

<br>
<hr>

<br>
<br>
<br>
<br>
<br>


# Comment Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>

<hr>

## ` GET ` All Comment's of a Thread

> fetch all comments that have a specific parent_thread_id's 

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
                "username": "TummyOwo",
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

<br>
<br>

## ` POST ` Comment Thread

> allows user to ` comment ` to thread


### Request Header:
```
    POST http://localhost:3000/v1/threads/{thread_id}/comment
```

### Request Body
```json
    {
        "account_id": 12,
        "username":"TimmyTom",
        "content":"Lol I love Cats cause they look like living floof balls :3",
        "hash_tags":["#owo","#loving-cats-for-layf"],
        "like": 0,
        "comment": 0,
        "created_at": "2024-01-20"
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

<br>
<br>


## ` DELETE ` Comment Thread

> Incase of replies it will go on a `cascade Delete` , deletes also a specific comment


### Request Header:
```
    DELETE http://localhost:3000/v1/threads/{thread_id}/comment
```

### Success Response 🟢
```json
    {
        "success": true,
        "message": "Successfuly Deleted a Thread Comment 🔰"
    }
```
### Error Response 🔴
```json
    {
        "success": false,
        "message": "Can't perfrom Deletion at this time 🚩"
    }
```
##
<br>
<hr>

<br>
<br>
<br>
<br>
<br>


# Follower Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>


## ` GET ` All Followers

> fetch all followers on a certain user or ` account`

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
        "message": "Oops something went wrong, cant get all of the Follower records 🚩"
    }
```
##

<br>
<br>

## ` DELETE ` Follower

> Unfollowing Account by just a powerfull click of a button

### Request Header
```
    GET http://localhost:3000/v1/account/{account_id}/followers/{follower_id}
```

### Success Response 🟢

```json
    {
        "success": true,
        "message": "Success Unfollowing 🐝 - -"
    }
```


### Error Response 🔴
```json
    {
        "success": false,
        "message": "Failed to unfollow the user."
    }
```

<br>
<hr>

<br>
<br>
<br>
<br>
<br>

# Following Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>

## ` GET ` All Following

> fetch all Followings on a certain user or ` account`

### Request Header
```
    GET http://localhost:3000/v1/account/{ account_id }/following
```

### Success Response 🟢

```json
    {
        "success": true,
        "data": [
            {
                "following_id": 1,
                "following_username": "John Doe",
            },
            {
                "following_id": 2,
                "following_username": "Yeshh",
            },

        ]
    }
```


### Error Response 🔴
```json
    {
        "success": false,
        "data": "Oops cant find who you following "
    }
```
##

<br>
<br>

## ` GET ` Search for Account

> fetch all Accounts based on user query this is possible if you wanna find your friend then ` follow ` them

### Request Header
```
    GET http://localhost:3000/v1/accounts/search?query={search_term}
```

### Success Response 🟢

```json
    {
        "success": true,
        "data": [
            {
                "account_id": 1,
                "username": "John Doe",
            },
            {
                "account_id": 2,
                "username": "Yeshh",
            }
        ]
    }
```


### Error Response 🔴
```json
    {
        "success": false,
        "data": "Cant understand who are you finding 🐝 - -"
    }
```
##

<br>
<br>

## ` DELETE ` Following

> You can unfollow your friend if an argument happen on your time, de joke lang ✌️ 

### Request Header
```
    GET http://localhost:3000/v1/account/{account_id}/followers/{follower_id}
```

### Success Response 🟢

```json
    {
        "success": true,
        "message": "Success Unfollowing 🐝 - -"
    }
```


### Error Response 🔴
```json
    {
        "success": false,
        "message": "Failed to unfollow the user."
    }
```
##
<br>
<hr>

<br>
<br>
<br>
<br>
<br>



# Hashtag Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>

<hr>
<br>

## ` GET ` Search Thread's Hashtags

> Fetch All threads contains the specific ` hashtag_name `

### Request Header 
```
    GET http://localhost:3000/v1/threads/search?query={hashtag_name}
```

### Success Response 🟢
```json
    "success": true,
    "data": [
        {
        "thread_id": 12,
        "account_id": 12,
        "username": "kepler90",
        "content": "#owo #lmao tara kain shawarma ✨",
        "hashtags": ["#owo","#lmao"]
        "likes": 9,
        "comments": 1,
        "created_at": "2024-10-10"
        }
    ]
```

### Error Response 🔴
```json
{
    "success": false,
    "data": "Oops cant find any results on your query 🚩"
}
```
##

<br>
<br>


## ` POST ` Thread Hashtag

> Fetch All threads contains the specific ` hashtag_name `

### Request Header 
```
    POST http://localhost:3000/v1/threads/{thread_id}/hashtags
```

### Request Body 
```json 
{
    "thread_id": 12,
    "hashtag_name": "#owo",
    "created_at": "2024-10-07"
}
```


### Success Response 🟢
```json
{
    "success": true,
    "message": "Hashtag has been succesfully recorded on database"
}
```

### Error Response 🔴
```json
{
    "success": false,
    "data": "Oops something is wrong, cant put the hashtag on record 🚩"
}
```
##

<br>
<br>

## ` DELETE ` Thread Hashtag

> Fetch All threads contains the specific ` hashtag_name `

### Request Header 
```
    DELETE http://localhost:3000/v1/threads/{thread_id}/hashtags
```
### Success Response 🟢
```json
{
    "success": true,
    "message": "Hashtag has been succesfully Deleted on record"
}
```

### Error Response 🔴
```json
{
    "success": false,
    "data": "Oops something is wrong, can't Delete hashtag on record 🚩"
}
```
##
<br>
<hr>

<br>
<br>
<br>
<br>
<br>


# Repost Endpoints <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="40" height="40" align="center"/>

## WALA PANG REPOST FINAFINALIZE PA
<!--
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