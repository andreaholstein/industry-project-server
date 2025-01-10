- To run back-end, there are two server, one is python server for host Ai model locally, 
- To run the python server, you need do following stuff:
	1. install python and create venv follow the bellow website
		> https://medium.com/datacat/a-simple-guide-to-creating-a-virtual-environment-in-python-for-windows-and-mac-1079f40be518
	2. Once the venv activate do following:	
		> python -m pip install --upgrade pip
		
  		> pip install transformers torch flask
		
 		> pip install accelerate
		
 		> python ai_server.py
- After python server up, start the node proxy server.
