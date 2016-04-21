#!/usr/bin/env python

import sys
import struct
import json
import subprocess

#Using smplayer. Can be replaced by any player that supports youtube urls
video_player = "smplayer"

# First 4 bytes will be length of input
size_bytes = sys.stdin.read(4)
if len(size_bytes) == 0:
    sys.exit()

# Unpack to get the integer
(size,) = struct.unpack("i", size_bytes)

# Read remaining bytes, which is the actual json data
data = sys.stdin.read(size).decode("utf-8")
data = json.loads(data)

# URL of page
url = data["text"]

subprocess.Popen([video_player, url])
