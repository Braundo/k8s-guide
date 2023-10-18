import os
import re

def add_breaks(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    file_content = f.read()
                # Replace '</h1>' with '</h1><br><br><br>'
                new_content = re.sub(r'(</h1>)', r'\1<br><br><br>', file_content)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

# Usage:
directory_path = "/Users/abraundmeier/k8s-guide/"  # Replace with your directory path
add_breaks(directory_path)

