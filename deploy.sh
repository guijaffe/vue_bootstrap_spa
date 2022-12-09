#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist


git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:guijaffe/guijaffe.github.io.git master

# если вы публикуете по адресу https://guijaffe.github.io/vue_bootstrap_spa
git push -f git@github.com:guijaffe/vue_bootstrap_spa.git master:gnh-pages

cd -

 