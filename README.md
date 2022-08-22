## Modifier le style avec sass ##
=================================
1 - cd libs/dart-sass
2 - sass ../../sass/style.scss ../../css/style.css

## Librairies utilisées ##
==========================
1 - bootstrap
2 - scroll reveal
3 - anime js
4 - jquery

Les autres librairies présentent dans ./libs n'ont pas encore
été utilisées.

## Pousser les modifs effectuées sur le repo en ligne ##
========================================================
git remote add origin https://github.com/Dev-de-babi/DevDeBabi.git
git branch -M main
git push -u origin main

## Initialiser repo hors-ligne et pousser sur le repo en ligne ##
=================================================================
git init
git add .
git commit -m "[Les modifications effectuées]"
git branch -M main
git remote add origin https://github.com/Dev-de-babi/DevDeBabi.git
git push -u origin main