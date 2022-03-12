<p align="center">
  <img src="/assets/wiki-fotos/friendiesLogo.jpg">
</p>

# Friendies
Friendies is een matching applicatie die mensen met dezelfde interesses aan elkaar matcht. Bij een match kunnen de mensen met elkaar praten, afspreken, activiteiten plannen en online gamen. 

## Feature
Bij friendies is het op dit moment mogelijk om je huidige profiel te bekijken en daar aanpassingen in te maken. Zo kun je je naam, omschrijving en profielfoto wijzigen.
|  |
| ------------- |
| Naam toevoegen en aanpassen | 
| Omschrijving toevoegen en aanpassen |
| Profielfoto toevoegen en aanpassen |

## Documentatie
De verdere documentatie is terug te lezen in de [wiki](https://github.com/03Sandraa/Blok-tech/wiki) van deze repository. 

## Instalatie
Voor de instalatie van deze feature moet je de volgende stappen doorlopen:

Stap 1: Clone de repository naar je lokale computer
```
git clone https://github.com/03Sandraa/Blok-tech.git
```

Stap 2: Installeer de bijbehorende packages
```
npm install
```

Stap 3: Stel een .env bestand op. Een voorbeeld hiervan is te vinden in het .env_sample bestand
```
DB_URI=insertUriDatabase
DB_NAMEDATABASE=insertNameDatabase
DB_NAMECOLLECTION=insertNameCollection
```

Stap 4: Vervolgens start je de server
```
npm start
```

Stap 5: Maak een start object 

-> zet regel 80 t/m 82 aan (in index.js), sla het bestand op, start de localhost op en zet vervolgens regel 80 t/m 82 weer uit.
```
await maakNieuwProfiel(client, [{
        profiel: "0",
    }])
```

## Bijdrage
Wil jij een bijdrage leveren aan die project? Dat kan! Friendies staat open voor suggessties en ideeën. Je kunt je bijdrage leveren doormiddel van een [issue](https://github.com/03Sandraa/Blok-tech/issues).

## license
Dit project heeft een [MIT license](https://github.com/03Sandraa/Blok-tech/blob/main/LICENSE.md) en iedereen is vrij om mijn code te gebruiken en eigen varriaties hierop te maken.
