import requests 

API_KEY = "ZD6K10CXBWLX5SHOE51WCUU8FC2U82N08NT" 
message="write%20camel%20dsl%20in%20yaml%20to%20read%20csv%20file"

url = "https://api.betterapi.net/youdotcom/chat?message="+message+"&key=" + API_KEY 
json = requests.get(url).json()
print(json["message"]) 