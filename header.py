import os

def replace_string_in_file(file_path, old_string, new_string):
    with open(file_path, 'r', encoding='utf-8') as file:
        file_contents = file.read()
        
    updated_contents = file_contents.replace(old_string, new_string)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_contents)

def process_directory(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                print(f'Processing {file_path}...')
                old_string = '<h1>K8s Guide</h1><br/><br/><br/>'
                new_string = '''
<a href="/index.html" style="text-decoration: none; color: inherit;">
  <h1>K8s Guide</h1>
</a><br/><br/><br/>
'''
                replace_string_in_file(file_path, old_string, new_string)
                print(f'Finished processing {file_path}')

if __name__ == "__main__":
    directory_path = input("Enter the path of the directory: ")
    process_directory(directory_path)

