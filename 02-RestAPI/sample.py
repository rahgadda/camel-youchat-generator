from youdotcom import Webdriver, Code # import all the classes

driver = Webdriver().driver # setting up the webdriver. use `webdriver_path=` if the pre-installed one does not work.

code = Code.find_code(driver, search="how to make an python loop?") # get all the code displayed on screen. passing the driver and search string.

for string in code['response']: # loop through all the code
    print(string) # print 1 at an time.
    
print(code['time']) # print the time taken to complete you search.