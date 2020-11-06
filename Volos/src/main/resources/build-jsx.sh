#!/bin/sh

# Il faut installer node-babel-cli et node-babel-preset-react
# sudo apt install node-babel-cli node-babel-preset-react
babeljs src/main/jsx --out-dir src/main/webapp/components --presets react
