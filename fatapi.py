from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Set up the WebDriver
driver = webdriver.Chrome('path/to/chromedriver')  # Replace with the path to your chromedriver executable

# Example test case
def test_login():
    # Open the FastAPI application
    driver.get('http://localhost:8000')

    # Find login form elements and interact with them
    username_input = driver.find_element(By.ID, 'username')
    password_input = driver.find_element(By.ID, 'password')
    login_button = driver.find_element(By.ID, 'login_button')

    username_input.send_keys('test_user')
    password_input.send_keys('password')
    login_button.click()

    # Wait for the page to load and check if the login was successful
    welcome_message = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'welcome_message'))
    )

    assert welcome_message.text == 'Welcome, test_user!'

# Execute the test case
test_login()

# Quit the WebDriver
driver.quit()
