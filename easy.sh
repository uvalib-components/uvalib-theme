#!/bin/bash
rm -rf bower_components
git pull
bower install
polymer serve
