from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from urllib.request import urlretrieve, urlopen

def download(id):
    options = Options()
    options.add_argument("--ignore-certificate-errors")
    options.add_argument("--headless")
    options.page_load_strategy = "eager"

    service  = Service(executable_path='chromedriver.exe')
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(f'https://s3embtaku.pro/download?id={id}')

    WebDriverWait(driver, 30).until(
        EC.presence_of_element_located((By.ID, 'content-download'))
    )
    downloadsList = driver.find_element(By.ID, 'content-download')
    print('found download')
    WebDriverWait(driver, 30).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'mirror_link'))
    )
    downloadslinks = downloadsList.find_element(By.CLASS_NAME, 'mirror_link')
    print('found mirror link')

    downloads = downloadslinks.find_elements(By.TAG_NAME, 'div')

    property = downloads[-1].find_element(By.TAG_NAME, 'a').get_property('href')
    # urlretrieve(property, 'video.mp4')
    return property
    

urls = []
with open('idsmiss.txt', 'r') as file:
    start = 101
    fails = 0
    success = 0
    for line in file:
        print('Episode', start)
        start += 1
        try:
            print("Finding download for episode", line.strip())
            urls.append(download(line.strip()))
            print("Found download for episode", line.strip())
            success += 1
        except:
            try:
                print("Finding download for episode", line.strip())
                urls.append(download(line.strip()))
                print("Found download for episode", line.strip())
                success += 1
            except:
                try:
                    print("Finding download for episode", line.strip())
                    urls.append(download(line.strip()))
                    print("Found download for episode", line.strip())
                    success += 1
                except:
                    try:
                        print("Finding download for episode", line.strip())
                        urls.append(download(line.strip()))
                        print("Found download for episode", line.strip())
                        success += 1
                    except:
                        try:
                            print("Finding download for episode", line.strip())
                            urls.append(download(line.strip()))
                            print("Found download for episode", line.strip())
                            success += 1
                        except:
                            print("Couldn't find download for episode", line.strip())
                            urls.append(f"Coudn't find download for episode {line.strip()}")
                            fails += 1
    print('Success:', success)
    print('Fails:', fails)
with open('urlmissed.txt', 'w') as file:
    for url in urls:
        file.write(f"{url}\n")


