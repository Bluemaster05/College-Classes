from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time

def find_between( s, first, last ):
    try:
        start = s.index( first ) + len( first )
        end = s.index( last, start )
        return s[start:end]
    except ValueError:
        return ""

def find_id(number):
    options = Options()
    options.add_argument("--ignore-certificate-errors")
    options.add_argument("--headless")
    options.page_load_strategy = "eager"

    service  = Service(executable_path='chromedriver.exe')
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(f'https://s3embtaku.pro/videos/detective-conan-episode-{number}')

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, 'iframe'))
    )
    frame = driver.find_element(By.TAG_NAME, 'iframe')
    src = frame.get_property('src')

    new_id = find_between(src, "id=", "&")

    # time.sleep(10)
    driver.quit()
    return new_id

ids = []
missed = [125, 204, 213, 275, 298, 302, 306, 317, 349]
for i in missed:
    
    try:
        print("Finding id for episode", i)
        ids.append(find_id(i))
        print("Found id for episode", i)

    except:
        print("Couldn't find id for episode", i)
        ids.append(f"Coudn't find id for episode {i}")
for i in range(len(ids)):
    print(f'episode {i + 1} id: {ids[i]}')

with open(f'idsmissed.txt', 'w') as file:
    for id in ids:
        file.write(f"{id}\n")
