import sys 
import json
# import requests

data = "Specifications to be populated via fonoAPI"
resp={
    "Response":200,
    "Data":data
}
print(json.dumps(resp))
sys.stdout.flush()