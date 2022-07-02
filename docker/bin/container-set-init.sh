#!/bin/bash
cat <<'EOF' >> /root/.bashrc
export TERM=linux
cd ${HOME}

echo -e "Welcome to Sscoutsuite!\nYou are already in the Scoutsuite virtual environment, so just type \`scout\` to run it!\n    (for example: \`scout -h\` to see the help documentation).\n\nHave fun!\n\n"
EOF

#source ${HOME}/ScoutSuite/scoutsuite3.8/bin/activate