# Web design - Minor web development

<strong>Een podcast gemaakt voor de vanaf geboorte doof zijnde Marie van Driessche. Het concept focust zich op de emoties in een gesprek die Marie mist. </strong>

![Foto van de podcast](/server/public/img/app.png)

### Table of contents

#### Installatie

```bash
# git clone
git clone https://github.com/MitchGoudkuil/web-design-1819.git

cd web-design-1819

# dependencies
npm install

# start server
npm run start
```

### Wie is marie

Marie is Doof (met een hoofdletten inderdaad, dat betekent dat ze zichzelf als Doof identificeert, wat simpelgezegd betekent dat haar eerste taal Nederlandse Gebarentaal is). Marie heeft hierdoor problemen met functionaliteiten waarbij geluid van toepassing is.

### Doel van deze opdracht + De opdracht

Ons als developers kennis laten maken met een gebruiker met een speciale feature. Op deze manier leren we onze website te optimaliseren voor meerdere gebruikers waarvan sommige met een beperking.

<strong>De opdracht:</strong>

<p>Hoe werkt een podcast voor Marie + closed captions?<br />
In een transcriptie gaat natuurlijk nogal wat nuance verloren. Maak een oplossing die minimaal net zo prettig is voor iemand die niet kan luisteren als voor iemand die wel kan luisteren.</p>

### Kennismaking met marie

In de eerste week maakte we kennis met marie. Bij elke kennismaking hebben we een prototype moeten testen. Bij de kennismaking heb ik vooral genoteerd bij mijn mede studenten wat marie vertelde en wat eruit naar voren kwam. Een groot gedeelte van mijn vragen werden al beantwoord waardoor ikzelf geen vragen meer over had voor een gesprek.

<details>
<summary>Details uit het gesprek</summary>

- Hou ondertiteling op 1 en dezelfde plek. Anders kan het te druk worden en dan is de aandacht weg.

- Geen grote lappen tekst zonder punctuatie. Het is niet te lezen.

* Geluid is voor marie abstract. Ze kent geen toonhoogtes bij bijvoorbeeld een woord als: <strong>MAAR</strong>.
* Redenering van praten heeft marie niet. Dus iets bold maken, schuingedrukt is geen ding voor haar. Iets bold maken kan wel gelden als aanduiding van een belangrijk woord.
* Kleur is niet specifiek genoeg maar kan wel invloed hebben op bijvoorbeeld ondertiteling.
* Een artikel is een uitleg en een podcast is een gesprek. Hoe kan je dit over brengen aan haar.
* Marie kent bepaalde geluiden als het krassen van nagels op een bord niet maar voelt wel trillingen. Misschien dat hier iets mee gedaan kan worden.
  </details>

Na het gesprek ben ik dieper na gaan denken over wat Doof zijn nou eigenlijk echt inhoud. Wat mis je en waarover zit ik zelf nog mis. Ik ben daarom onderzoek gaan doen naar oplossingen en ben deze uit gaan schetsen op papier.

<details>
<summary>Onderzoek en schetsen</summary>
<strong>Bestaande oplossingen:</strong>

- Tolk: de stem van een doof persoon
- Vibraties van muziek of stemmen als het volume genoeg is.
- Gebarentaal: De taal voor dove mensen. In het engels is de taal er ook maar vooral bij elkaar geraapt
- Tekst als ondertiteling. Het is altijd mogelijk te lezen, hierbij mist emotie wel.

<p>Na het onderzoeken van de bestaande oplossingen ben ik gaan kijken naar websites die bijvoorbeeld al transcripties aanbieden voor podcasts. Verschillende podcasts bieden dit zelf aan maar nog teveel doen dit niet of laten de "luisteraar" zelf betalen ervoor.</p>
Websites voor transcripting zijn:

- 3 play media
- rev.com
- Gretta's (highlighting words real-time. Text to speach)

<strong>Bestaande oplossingen</strong>

<p>een al bestaande oplossing is bijvoorbeeld muziek voor dove mensen. De vibraties van de bas zorgt voor ritme gevoel en de gebarentaal erbij zorgt voor de tekst.</p>
<p> Studenten van een universiteit in America hebben een handschoen ontworpen die gebarentaal om zet naar spraak. Hierdoor zou een doof persoon een stem krijgen. Het probleem hiervan is dat onder de dove cultuur dit niet gewaardeerd word. Ze zijn trots op hun cultuur en hebben liever dat iemand gebarentaal leert dan dat een doof persoon een stem krijgt. Bovendien kan iemand hierna niet reageren als hij of zij geen gebarentaal kent.
</p>

<strong>Vormen van communicatie</strong>

- Whatsapp
- gebarentaal
- chatbox
- afbeeldingen
- facetime
- liplezen

<strong>Bedachte concepten</strong>
![Foto van de podcast](/server/public/img/schets.png)
![Foto van de podcast](/server/public/img/schets2.png)

</details>

Na het onderzoek heb ik een kleine conceptschets gemaakt waaraan ik kon beginnen met het maken van een prototype.

![Foto van de podcast](/server/public/img/schets3.png)

### Testdag 2

Dit was de eerste keer dat we met een prototype gingen testen bij Marie. Het prototype dat ik had focuste zich voornamelijk op 2 dingen. Wie praat er op het moment en is de leesbaarheid duidelijk als het gaat om de beweging van de sprekers en het lezen tegelijk.

![foto van het prototype waarmee ik ging testen](/server/public/img/prototype.png)

<details>
<summary>Bevindingen tijdens de test</summary>
<p>Tijdens de test kreeg ik van Marie de volgende feedback:</p>

- Als de personen praten trillen ze. Dit leidt mij af tijdens het lezen. Een enkele beweging zodat je weet wie praat kan al genoeg zijn.
- Let op de leesregels. Er staan nu heel erg veel woorden op 1 zin waardoor het niet te lezen is.
- Kijk naar de styling, momenteel is het heel karig. Alleen al een ander fontje toepassen zou een goede oplossing zijn.

<p>Na het testen van de leesbaarheid en beweging heb ik een ander klein testje gedaan met Marie. Om er achter te komen welke kleuren marie zou koppelen aan emoties heb ik een simpel klein testje opgezet. In dit testje vroeg ik Marie om de kleuren op te schrijven die zij bij de emoties vond passen. Wat uit de test kwam was dat ze de standaard emoties kon omzetten naar kleuren maar bij verontwaardigd liep ze vast. Bij deze emotie kreeg ik de vraag terug aan het einde.

![foto van het prototype waarmee ik ging testen](/server/public/img/test1.png)

Ze vond het toepassen van de kleuren aan het concept heel interessant en wilde ook dat ik hier mee verder ging. </p>

</details>

### Testdag 3, laatste test dag met Marie.

Op de laatste dag dat we met marie konden testen heb ik mijn nieuwe verbeterde prototype laten zien. Deze bevatte ook de kleuren van de emoties. Dit wilde ik opnieuw testen met Marie en ook bekijken of dit duidelijk genoeg voor haar was qua leesbaarheid. En of er niet teveel kleuren op de pagina stonden.

<details>
<summary>Bevindingen tijdens de test</summary>
<p>Ik vertelde Marie wat ik wilde gaan testen en liet haar hierna zelf aan de gang gaan met het prototype.</p>
<p>Tijdens de test kreeg ik van Marie de volgende feedback:</p>

- Let op snelheid van de teksten van de podcast. Als het te snel gaat moet ze steeds pauzeren, zorg anders voor een progressbalk zodat ik weet dat het niet vastloopt.
- Ik associeer de kleur van de teks ballon met de emotie en niet de cirkels om de sprekers heen. Deze staan te ver er boven waardoor ik me op meerdere plekken tegelijk moet focussen. Misschien een idee om dit in de spraakballonnen te verwerken.
- De legenda van de emotie kleuren is tof alleen zijn de kleur balletjes echt te klein. Ik zou het hele blokje gewoon een kleur geven waardoor dit voor mij duidelijker is.
- Aangezien ik moet switchen tussen lezen en welke spreker nu aan de beurt is is het best druk. Je zou beter de spreker onderaan kunnen zetten aangezien de tekst ook onderaan blijft hangen. Dan hoef ik niet over het halve scherm heen.
- De styling ziet er goed uit.

<p>Ook na deze test heb ik een ander klein testje gedaan met Marie. Ik wilde erachter komen of bepaalde symbolen ook voor haal een bepaald gevoel gaven. Zoals bijvoorbeeld één "!", of dit hetzelfde gevoel gaf als bijvoorbeeld "!!!", wat als een grotere aanduiding kan gelden. Marie vertelde me dat dat bij haar hetzelfde was. En als het ging om vraagtekens zouden meer vraagtekens ook echt als opdringerig over kunnen komen. Deze bevindingen zou ik door kunnen pakken in mijn eind product.</p>
</details>
