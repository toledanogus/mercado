# -*- coding: utf-8 -*-
"""
Created on Thu Apr 22 19:41:22 2021

@author: G10xpg
"""

import json

with open("prueba.json") as jsonfile:
    g=json.load(jsonfile)
    for i in g:
        print(i["nombre"])