##########################################################################################
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
##########################################################################################
# Coded by !
# github.com/
# gitlab.com/
##########################################################################################
# COLOR MIXER
##########################################################################################
import os

gg = '\033[0m'
ee = '\033[1m'
red = '\033[31m'
green = '\033[32m'
yellow = '\033[33m'
cyan = '\033[36m'

value_1 = input(red+">>> "+ee)
value_2 = input(gg+green+">>> "+ee)

if value_1[2:4] != value_2[2:4]:
	op_no1 = int((int(value_1[2:4],16)+int(value_2[2:4],16))/2+1)
	if op_no1 <= 9:
		op_no1 = '0'+f'{op_no1}'
	else:
		op_no1 = hex(op_no1)[2:4]
else:
	op_no1 = value_1[2:4]

if value_1[4:6] != value_2[4:6]:
	op_no2 = int((int(value_1[4:6],16)+int(value_2[4:6],16))/2+1)
	if op_no2 <= 9:
		op_no2 = '0'+f'{op_no2}'
	else:
		op_no2 = hex(op_no2)[2:4]
else:
	op_no2 = value_1[4:6]

if value_1[6:8] != value_2[6:8]:
	op_no3 = int((int(value_1[6:8],16)+int(value_2[6:8],16))/2+1)
	if op_no3 <= 9:
		op_no3 = '0'+f'{op_no3}'
	else:
		op_no3 = hex(op_no3)[2:4]
else:
	op_no3 = value_1[6:8]

print(gg+cyan+">>> "+ee+cyan+'0x'+str(op_no1)+str(op_no2)+str(op_no3))
