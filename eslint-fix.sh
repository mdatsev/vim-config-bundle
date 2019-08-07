#!/bin/bash
TMPFILE=$(mktemp --tmpdir=.)
cat > $TMPFILE
eslint --fix $TMPFILE >/dev/null 2>&1
cat $TMPFILE
rm $TMPFILE
