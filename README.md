# Prerequisites
tar
bash  
vim  
eslint  
prettier  

# Install
Download bundle from https://github.com/mdatsev/vim-config-bundle/releases  
Run:  
`tar -xzvf bundle.tar.gz`  
`cd bundle`  
`./install.sh`  

# Building from source  
## Clone repo with submodules  
`git clone --recurse-submodules https://github.com/mdatsev/vim-config-bundle/`  
`cd vim-config-bundle`  
`./bundle.sh`
## Updating  
`git pull`  
## Installing  
`cd bundle`  
`./install.sh`  

# Default keys
Use in normal mode  
F2: toggle linter  
F3: toggle sidebar  
F4: fix with linter  
F5: prettify  
F6: fix and prettify  
F7: relint  
F8: go to previous error  
F9: go to next error  
