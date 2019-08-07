#!/bin/bash
# Install eslint and prettify npm dependancies
npm install -g \
    eslint@5.x \
    eslint-config-standard@12.x \
    eslint-plugin-import@2.x \
    eslint-plugin-jest@22.x \
    eslint-plugin-no-parameter-e@0.x \
    eslint-plugin-node@9.x \
    eslint-plugin-pep8-blank-lines@0.x \
    eslint-plugin-promise@4.x \
    eslint-plugin-standard@4.x \
    prettier@1.x

# Install Pathogen
mkdir -p ~/.vim/autoload ~/.vim/bundle
cp ./pathogen.vim ~/.vim/autoload/pathogen.vim
cp syntastic ~/.vim/bundle
cp vim-javascript ~/.vim/bundle

# Install vimrc
cp .tbvimrc ~/.tbvimrc
echo $'\nsource ~/.tbvimrc\n' >> ~/.vimrc
