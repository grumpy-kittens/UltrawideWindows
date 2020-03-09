#!/bin/sh

sed -i '/UltrawideWindows/d' ~/.config/kglobalshortcutsrc
plasmapkg2 --type=kwinscript -r .
kwin_x11 --replace &