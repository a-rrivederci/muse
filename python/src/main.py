"""
    main.py
    created/ 26 OCT 
    authors/ tonysingh eeshiken
"""
import muse
import sys
from optparse import OptionParser

if __name__ == "__main__":
    parser = OptionParser(usage = "usage: %prog [filepath]")
    _,args = parser.parse_args()

    # handle no-file error
    if len(args) != 1:
        parser.print_help()
        sys.exit(1)
    
    # filepath
    filepath = args[0]

    # create instance of Audio class
    fi = muse.Audio(filepath)

    # call Audio generate audio function
    fi.generate_audio()
    
