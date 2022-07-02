#!/bin/bash

# =====================================
# install ScoutSuite into a virtual env
# =====================================

WORKDIR=/root
TMPDIR=/tmp

# =====================================
# install ScoutSuite
# =====================================
# cd ${WORKDIR}
# virtualenv -p python3.8 scoutsuite
# source ${WORKDIR}/scoutsuite/bin/activate
# pip3 install scoutsuite
# echo -e "\n\nScoutsuite Installation Complete!\n\n"



cd ${WORKDIR}
git clone https://github.com/nccgroup/ScoutSuite.git --branch 5.12.0-rc1
cd ScoutSuite
#virtualenv -p python3 scoutsuite3.8
#source ${WORKDIR}/ScoutSuite/scoutsuite3.8/bin/activate
pip install -r requirements.txt
#python scout.py --help
echo -e "\n\nScoutsuite Installation Complete!\n\n"