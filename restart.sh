#!/bin/bash
impor



RESTART="ng serve"

PGREP="sudo netstat -nlp | grep 4200"

MEMCACHED="angular-cli"

$PGREP

if [ $? -ne 0 ]

echo "No se encuentra ng"

$RESTART

then

echo "Se encontro ng"

fi

