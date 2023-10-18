import os
from bs4 import BeautifulSoup

def modify_html(directory):
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".html"):
                filepath = os.path.join(root, filename)
                with open(filepath, 'r', encoding='utf-8') as file:
                    soup = BeautifulSoup(file, 'html.parser')
                
                main_tag = soup.find('main')
                if main_tag:
                    h1_tag = main_tag.find('h1')
                    if h1_tag:
                        breadcrumbs_div = soup.new_tag('div', id='breadcrumbs')
                        br_tag = soup.new_tag('br')
                        h1_tag.insert_before(breadcrumbs_div)
                        h1_tag.insert_before(br_tag)
                
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(str(soup))

# Specify the directory containing your HTML files
directory = '/Users/abraundmeier/k8s-guide/'
modify_html(directory)

