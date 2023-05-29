from selenium import webdriver

# Set up the WebDriver for Chrome
driver = webdriver.Chrome('/path/to/chromedriver')

# Open the Express application in the browser
driver.get('http://localhost:3000')

# Example test case: Verify the title of the page
expected_title = 'Your Application Title'
actual_title = driver.title
assert actual_title == expected_title, f"Title mismatch. Expected: {expected_title}, Actual: {actual_title}"

# Example test case: Fill a form and submit
input_field = driver.find_element_by_id('input-field')
input_field.send_keys('Test input')

submit_button = driver.find_element_by_id('submit-button')
submit_button.click()

# Close the browser
driver.quit()
