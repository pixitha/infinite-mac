import os.path

ROOT_DIR = os.path.join(os.path.dirname(__file__), "..")
IMAGES_DIR = os.path.join(ROOT_DIR, "Images")
LIBRARY_DIR = os.path.join(ROOT_DIR, "Library")
DISK_DIR = os.path.join(ROOT_DIR, "public", "Disk")
DATA_DIR = os.path.join(ROOT_DIR, "src", "Data")
CACHE_DIR = os.path.expanduser(os.path.join("~", ".infinite-mac-cache"))
XADMASTER_PATH = os.path.join(ROOT_DIR, "XADMaster-build", "Release")
UNAR_PATH = os.path.join(XADMASTER_PATH, "unar")
LSAR_PATH = os.path.join(XADMASTER_PATH, "lsar")
