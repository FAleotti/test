import json
import sys

var1 = sys.argv[1]

j = json.loads(var1)

print (j['user'])