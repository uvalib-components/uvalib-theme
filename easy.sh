#!/bin/bash
rm -rf bower_components
git pull
bower install
polymer analyze > analysis.json
polymer serve
