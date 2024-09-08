# Fremtiden med AI: LLM'er, Værktøjer og Pair Programming

## Introduktion

Kunstig intelligens (AI) er ikke et nyt fænomen. I virkeligheden startede udviklingen af AI allerede i 1950'erne med Alan Turing's banebrydende arbejde. Siden da har AI-feltet gennemgået en bemærkelsesværdig udvikling, der især i de seneste årtier har vist en eksponentiel vækst. 

For at få et hurtigt overblik over denne fascinerende rejse, kan I tage et kig på vores [AI Udvikling Historisk](HISTORY.md) tidslinje. Her vil I se, hvordan AI har udviklet sig fra teoretiske koncepter til de kraftfulde værktøjer, vi har i dag, såsom Large Language Models (LLM'er).

Med denne historiske kontekst i baghovedet, lad os udforske, hvor vi står i dag, og hvor vi er på vej hen i AI's spændende verden.

## Erfaring med brug af AI?

1. Hvor mange af jer har allerede arbejdet med AI eller machine learning projekter?
   - Ræk hånden op hvis I har erfaring.

2. Hvem har hørt om eller brugt Large Language Models (LLM'er) som ChatGPT eller lignede modeller?
   - Vis hånden hvis I kender til disse modeller.

3. Har nogen af jer integreret AI-værktøjer i jeres daglige arbejdsflow?
   - Giv et tegn hvis I bruger AI-assisteret kodning eller andre AI-værktøjer.

4. Hvor mange føler sig trygge ved at forklare, hvordan et grundlæggende neuralt netværk fungerer?
   - Ræk hånden op hvis I føler jer sikre på dette emne.

5. Er der nogen, der har erfaring med pair programming sammen med en AI?
   - Vis hånden hvis I har prøvet dette.

## Oversigt over Præsentationen

I dag skal vi udforske fire hovedemner:

1. Introduktion til LLM'er (Large Language Models)
2. AI-drevne værktøjer og tjenester
3. AI i pair programming
4. Fremtiden er AI Engineere - Aflever problemstilling, og få noget nær færdigt produkt retur

## 1. Introduktion til LLM'er

### Hvad er LLM'er?
- Definition og grundlæggende koncept
  - AI (Kunstig Intelligens) er computersystemer, der kan udføre opgaver, som normalt kræver menneskelig intelligens.
  - LLM'er (Large Language Models) er en type AI, der er specialiseret i at forstå og generere menneskeligt sprog.
  - De er "store" fordi de er trænet på enorme mængder tekst og kan håndtere mange forskellige sprogopgaver.
  - LLM'er kan ses som meget avancerede tekstgeneratorer, der kan forstå kontekst og producere meningsfuldt indhold.
- Hvordan fungerer de?
  - LLM'er er baseret på neurale netværk med milliarder af parametre.
    - Et parameter er en justerbar værdi i modellen, der læres under træning.
    - Parametre kan ses som modellens "viden" eller "hukommelse".
    - Jo flere parametre, jo mere kompleks og potentielt kraftfuld er modellen.
    - F.eks. har GPT-3 175 milliarder parametre.
  - De trænes på massive mængder tekstdata fra internettet og andre kilder.
  - Under træningen lærer modellen mønstre og sammenhænge i sproget ved at justere disse parametre.
  - Når modellen er trænet, kan den forudsige det næste ord i en sekvens baseret på konteksten.
  - LLM'er bruger en teknik kaldet "self-attention" til at forstå sammenhænge mellem ord i en tekst.
  - De kan generere tekst ved sekventielt at forudsige det næste ord baseret på tidligere ord.
  - Modellerne kan finjusteres til specifikke opgaver som oversættelse, spørgsmål-svar eller kodegenerering.
- Eksempler på populære LLM'er og deres anvendelsesområder
  - Der findes hundredvis af LLM'er, som kan inddeles i forskellige kategorier baseret på deres arkitektur og anvendelse:
    1. Generative modeller:
       - GPT-serien (GPT-3, GPT-4): Generel tekstgenerering, kodning, kreativ skrivning
       - BLOOM: Open-source alternativ til GPT, multilingval
       - Claude (Anthropic): Dialogsystemer, tekstanalyse, opgaveløsning
    2. Encoder-modeller: (Beskrivelse: Tænk på dem som "forståelsesmaskiner". De læser en tekst og laver den om til en slags digital opsummering, som computeren kan arbejde med)
       - BERT (Google): Tekstforståelse, sentiment-analyse, klassifikation
       - RoBERTa (Facebook): Forbedret version af BERT
    3. Encoder-Decoder modeller: (Beskrivelse: Disse er som "oversættere". De læser først en tekst (encoder), forstår den, og kan så skabe ny tekst baseret på forståelsen (decoder))
       - T5 (Google): Tekstoversættelse, opsummering, spørgsmål-svar
       - BART (Facebook): Tekstgenerering, opsummering, oversættelse
    4. Domæne-specifikke modeller:
       - BioBERT: Specialiseret i biomedicinsk tekst
       - LegalBERT: Fokuseret på juridiske tekster
       - CodeBERT: Optimeret til forståelse og generering af kildekode
  - Valg af model afhænger af opgaven, ressourcer og krav til ydeevne

### Vigtigheden af at vælge den rigtige model
At vælge den rigtige LLM til en specifik opgave er afgørende for succes. Det kan sammenlignes med en tømrer, der står over for et søm med kun en skruetrækker i hånden. Selvom skruetrækkeren er et nyttigt værktøj, er den ikke egnet til at slå søm i. Tømreren vil naturligvis lede efter en hammer for at udføre opgaven effektivt.

På samme måde er det vigtigt at vælge den LLM, der bedst passer til den specifikke opgave. At bruge en generel model til en meget specialiseret opgave, eller omvendt, kan resultere i suboptimale resultater, ineffektivitet og potentielt fejlagtige outputs. Ved at forstå styrkerne og begrænsningerne ved forskellige LLM'er kan vi sikre, at vi bruger det rigtige "værktøj" til jobbet, hvilket fører til bedre resultater og mere effektiv ressourceudnyttelse.

### Grundlæggende principper
- Kort introduktion til maskinlæring
  - Maskinlæring er som at lære et barn at genkende forskellige frugter
  - I stedet for at give computeren specifikke regler, giver vi den mange eksempler
  - Computeren lærer selv at finde mønstre og træffe beslutninger baseret på disse eksempler
  - F.eks. efter at have set tusindvis af billeder af æbler og bananer, kan computeren lære at skelne mellem dem

- Naturlig sprogbehandling (NLP - Natural Language Processing)
  - NLP handler om at få computere til at forstå og arbejde med menneskeligt sprog
  - Det er som at lære en computer at læse, forstå og svare på en sms
  - NLP omfatter opgaver som at forstå betydningen af ord, analysere sætningsstruktur og fortolke kontekst
  - Det gør det muligt for computere at udføre opgaver som oversættelse, tekstopsummering og sentiment-analyse

- Træningsprocessen for LLM'er
  - At træne en LLM kan sammenlignes med at lære et barn at læse en hel bog
  - Først "læser" modellen enorme mængder tekst fra internettet, bøger og artikler
  - Under læsningen justerer modellen sine interne forbindelser for bedre at forudsige det næste ord i en sætning
  - Dette er som at træne en muskel: jo mere modellen "læser", jo bedre bliver den til at forstå og generere tekst
  - Træningen kræver kraftige computere og kan tage uger eller måneder
  - Omkostningerne ved at træne en GPT-model er betydelige:
    - For eksempel estimeres det, at træning af GPT-3 kostede omkring 4-12 millioner dollars
    - Dette inkluderer udgifter til hardware, elektricitet og køling af datacentre
    - Mindre modeller kan koste fra hundredtusinder til millioner af dollars at træne
    - Disse høje omkostninger er en af grundene til, at kun få virksomheder kan udvikle de største LLM'er
  - Når træningen er færdig, kan modellen bruges til at generere tekst, svare på spørgsmål eller udføre andre sprogopgaver

### Anvendelsesområder
- Tekstgenerering
- Sprogforståelse
- Oversættelse
- Kodegenerering

## 2. AI-drevne Værktøjer og Tjenester

### Overblik over moderne AI-værktøjer
- Kodekomplettering og -suggestion
- Automatiseret fejlfinding
- Dokumentationsgenerering

### Innovative applikationer
- AI-assisteret design
- Dataanalyse og visualisering
- Chatbots og kundeservice

### Produktivitetsforøgelse
- Hvordan AI-værktøjer forbedrer arbejdsprocesser
- Eksempler på effektivitetsforbedringer i forskellige brancher

## 3. AI i Pair Programming

### Introduktion til AI-assisteret pair programming
- Hvad er pair programming?
- Hvordan integreres AI i processen?

### Demonstration af AI-drevne kodeassistenter
- Live-demo af populære værktøjer
- Gennemgang af funktioner og muligheder

### Fordele ved AI i pair programming
- Hurtigere kodegenerering
- Fejlreduktion
- Læring og forbedring af kodekvalitet

### Udfordringer og bedste praksis
- Potentielle faldgruber
- Tips til effektivt samarbejde mellem mennesker og AI
- Etiske overvejelser

## Konklusion

- Opsummering af hovedpunkter
- Fremtidsperspektiver for AI i softwareudvikling
- Opfordring til at udforske og eksperimentere med AI-værktøjer

## Spørgsmål og Diskussion

- Åben for spørgsmål fra publikum
- Diskussion om deltagernes erfaringer og tanker

Tak for jeres opmærksomhed!
