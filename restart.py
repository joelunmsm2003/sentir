#!/bin/bash
import os

os.system("sudo netstat -nlp | grep 4200 > proceso.txt")

archivo = open("proceso.txt", "r")

if archivo.readlines():

	print 'Angular-cli runing'

else:

	print 'Starting angular-cli...'

	os.system("ng serve --host 0.0.0.0 --port 4201 --live-reload-port 49153")


