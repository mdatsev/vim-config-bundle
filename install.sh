#!/bin/bash

echo 'Pulling from git...'
git pull --quiet

echo 'Removing any old files...'
rm -rf ~/.vim/bundle/syntastic ~/.vim/bundle/vim-javascript ~/.vim/bundle/vim-sensible ~/.tbvimrc

echo 'Installing pathogen...'
mkdir -p ~/.vim/autoload ~/.vim/bundle
cp ./src/pathogen.vim ~/.vim/autoload/pathogen.vim

echo 'Installing syntastic...'
cp -r ./src/syntastic ~/.vim/bundle
echo 'Installing vim-javascript...'
cp -r ./src/vim-javascript ~/.vim/bundle
echo 'Installing vim-sensible...'
cp -r ./src/vim-sensible ~/.vim/bundle

echo 'Installing .tbvimrc...'
cp ./src/.tbvimrc ~/.tbvimrc

echo 'Checking .vimrc...'
if [ ! -f ~/.vimrc ]; then
    echo 'No .vimrc - creating .vimrc...'
    touch ~/.vimrc
fi
if [ "$(head -n 1 ~/.vimrc)" != $'source ~/.tbvimrc' ]; then
    echo 'Updating .vimrc...'
    TMPFILE=$(mktemp)
    echo $'source ~/.tbvimrc\n' >> $TMPFILE
    cat ~/.vimrc >> $TMPFILE
    mv $TMPFILE ~/.vimrc
fi

echo 'Installed successfully'