set /p post_name="ENTER FILENAME: "

cd images && mkdir %post_name% && cd ..
cd posts && nul > %post_name%.md