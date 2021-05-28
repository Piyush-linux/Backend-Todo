item
html -> express -> mongodb -> express -> html

# PJ

__tech__ > express pug body-parser mongoose
__context__
- get data from db and render 
- post data to db and set to get()
- delete data as per there ID

# Server
mongodb://localhost:27017/DB
mongodb => protocol , rules to acces data
localhost:27017/DB => access DB

# Database Deployment
Server
1. for http://
	- Host Frontend + Backend
	- heroku
2. for mongodb://
	- host DataBase
	- atlas
front + back [ DB , API ]
__Mongodb Atlas__
- DB host cloud provider : AWS , asure , google
- security user with pasw
- IP whitelist : aloow from anywhere
- Cluster : connect with Monogo Shell 
- cp mongo > terminal `mongo ...` then give pasw
- app.js > connect(mongodb://username?pasw/DB) from cluter 
