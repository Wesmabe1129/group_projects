# RAVEZ API

## API ENDPOINTS OVERVIEW




### GET api/v1
    -Verify if the application is running.




## LOBBY
###  api/v1/lobby
    -landing page



# FOR NON-EXISTING USER
## SIGN UP
### POST api/v1/account
    -Creating new account
    -Creating new JWT Token amd Fetch user information



# FOR EXISTING USER
## SIGN IN
### POST api/v1/account/sign-in
    -Request user details




## VERIFY USER ACCOUNT using authentication, authorization from JWT
### GET api/v1//middlewares/(authentication,authorization)
    -authentication and authorization to verify a JWT for the users session




# HOME FEEDS
## Fetch thread to HOME FEEDS
### GET api/v1/threads/user:id/thread:id
    -Fetch all thread to `HOME FEED` using `user ID` and `thread ID`




# USER FEEDS
## Fetch thread to USER FEEDS
### GET api/v1/threads/user:id/thread:id
    -Fetch all thread to `USER FEED` using user ID and thread ID




## Report Thread
### POST api/v1/report/post:id
    -allows user to `report` a thread
    -getting `thread ID`




## Create Thread
### POST api/v1/threads
    -allows user to `create` a thread
    -getting the `user ID` and `creating thread ID`




## Delete Thread
### DELETE api/v1/threads/thread:id
    -allows user to `delete` specific thread
    -getting the `thread ID`




## Like Thread
### POST api/v1/like/user:id/thread:id
    -allows user to `like` a thread
    -getting the `user ID` and `thread ID`



## Comment Thread
### POST api/v1/comment/user:id/thread:id
    -allows user to `comment` to thread
    -getting the `user ID` and `thread ID`

## Repost Thread
### POST api/v1/repost/post:id/user:id
    -allows user to `repost` a thread
    -getting the `thread ID` and `user ID`

