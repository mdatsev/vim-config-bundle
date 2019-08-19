#!/bin/bash
cd $(dirname %);
TMPFILE=$(mktemp --tmpdir=.)
cat > $TMPFILE
$(pnpm bin)/eslint --fix $TMPFILE >/dev/null 2>&1
cat $TMPFILE
rm $TMPFILE
cd - > /dev/null)
