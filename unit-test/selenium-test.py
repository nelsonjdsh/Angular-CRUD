from selenium import webdriver

driver = webdriver.Chrome('C:/Users/nel23/Documents/chromedriver.exe')

driver.get('http://localhost:4200/')

driver.find_element_by_id('nameInput').send_keys('Pedro')
driver.find_element_by_id('lastInput').send_keys('Perez')
driver.find_element_by_id('idInput').send_keys('402-1234567-1')
driver.find_element_by_id('mailInput').send_keys('nelsonlaparadetubloque@gmail.com')
driver.find_element_by_id('phoneInput').send_keys('809-123-4576')
driver.find_element_by_id('sendbtn').click()

print('Running')
