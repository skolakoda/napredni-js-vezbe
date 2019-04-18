# napredni-js-vezbe

Random Name API vezbica

## API DOKUMENTACIJA

GET
192.168.0.102:8080/sva-imena

GET
192.168.0.102:8080/random

POST
(obavezan parametar ime)
192.168.0.102:8080/dodaj-ime

## ZAHTEVI ZA FRONTEND

Da imamo nekoliko stranica:
- jedna da prikazuje random ime, i na dugme daje novo
- jedna stranica daje spisak imena, eventualno dugme za sort
- forma za slanje, sa obaveznim poljem i eventulano nekom proverom (da nisu brojevi, minimalna duzina 2 slova, da mu povecava prvo slovo)

## ZAHTEVI ZA BEKEND

- da se random ime ne ponavlja
- da ime ima validan format, a nisu brojevi
- da dovuku gomilu novih imena sa interneta (web scraping)
- okaciti na Heroku server
