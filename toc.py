import os

def walk(path='.', depth=None):
    """
    recursively walk directory to specified depth
    :param path: (str) the base path to start walking from
    :param depth: (None or int) max. recursive depth, None = no limit
    :yields: (str) filename, including path
    """
    if depth and depth == 1:
        for filename in listdir(path):
            yield filename
    else:
        top_pathlen = len(path) + len(os.path.sep)
        for dirpath, dirnames, filenames in os.walk(path):
            dirlevel = dirpath[top_pathlen:].count(os.path.sep)
            if depth and dirlevel >= depth:
                dirnames[:] = []
            else:
                for filename in filenames:
                    yield os.path.join(dirpath, filename)


root = './clases'

for file in walk(root, depth=3):
  if file.endswith('script.md'):
    with open(file) as f:
      content = f.readlines()
      for line in content:
        if line.startswith('#'):
          print line
