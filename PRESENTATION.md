# Fremtiden med AI: LLM'er, Værktøjer og Pair Programming

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

## Introduktion

Kunstig intelligens (AI) er ikke et nyt fænomen. I virkeligheden startede udviklingen af AI allerede i 1950'erne med Alan Turing's banebrydende arbejde. Siden da har AI-feltet gennemgået en bemærkelsesværdig udvikling, der især i de seneste årtier har vist en eksponentiel vækst. 

For at få et hurtigt overblik over denne fascinerende rejse, kan I tage et kig på vores [AI Udvikling Historisk](HISTORY.md) tidslinje. Her vil I se, hvordan AI har udviklet sig fra teoretiske koncepter til de kraftfulde værktøjer, vi har i dag, såsom Large Language Models (LLM'er).

Med denne historiske kontekst i baghovedet, lad os udforske, hvor vi står i dag, og hvor vi er på vej hen i AI's spændende (Og skræmmende) verden.

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

### Udvikling i Kontekstvindue
LLM'er har oplevet en markant udvidelse af deres kontekstvindue over tid, hvilket har stor betydning for deres anvendelighed og ydeevne:

- Tidlige modeller: Få hundrede tokens (ord eller delord)
- GPT-3 (2020): Op til 4.096 tokens
- GPT-3.5 (2022): Op til 8.192 tokens for nogle varianter
- GPT-4 (2023): Op til 32.768 tokens (ca. 25.000 ord)
- Nyeste annonceringer (2023-2024): Modeller med kapacitet op til 1.000.000 tokens

Denne udvikling muliggør analyse og generering af meget længere tekster, forbedrer langtidshukommelsen i samtaler, og åbner for nye anvendelsesområder som omfattende dokumentanalyse og kompleks problemløsning.

For at sætte dette i perspektiv, kan 500.000 tokens svare til omkring 375.000 ord eller cirka 750 sider i en gennemsnitlig bog. Dette er en enorm mængde information, der kan behandles på én gang.

### Håndtering af Manglende Domæneviden

Når man arbejder med LLM'er og mangler specifik domæneviden, er der flere effektive strategier:

1. **Indlæsning af Ekstra Indhold**: Man kan simpelthen indlæse relevant information direkte i modellen som ekstra kontekst. Dette er især nyttigt, når den nødvendige information er tilgængelig online.

2. **Web Scraping**: Hvis informationen findes på nettet, kan man bruge web scraping-teknikker til at indsamle den. For eksempel kan man bede en AI-assistent som Aider om at skrive en scraper, der kan hente det relevante indhold.

3. **Udnyttelse af Større Kontekstvinduer**: I takt med at kontekstvinduerne bliver større, bliver problemet med manglende domæneviden mindre. Med et kontekstvindue på 500.000 tokens kan man indlæse enorme mængder af baggrundsinformation, hvilket gør modellen i stand til at håndtere selv meget specialiserede opgaver uden forudgående træning.

Disse metoder gør det muligt at tilpasse generelle LLM'er til specifikke domæner eller opgaver uden behov for omfattende finjustering eller specialiseret træning. Det åbner op for mere fleksibel og effektiv anvendelse af AI i en bred vifte af specialiserede områder.

### Anvendelsesområder
LLM'er har en bred vifte af anvendelsesområder, der spænder over mange forskellige industrier og opgavetyper:

1. Tekstgenerering
   - Indholdsproduktion: Artikler, blogindlæg, produktbeskrivelser
   - Kreativ skrivning: Historier, digte, manuskripter
   - Automatisk rapportgenerering: Finansielle rapporter, nyhedsopsummeringer

2. Sprogforståelse
   - Sentiment-analyse: Vurdering af kundefeedback og sociale medieindlæg
   - Tekstklassificering: Kategorisering af dokumenter, e-mails, eller support-tickets
   - Informationsudtrækning: Identificering af nøgleord og begreber i tekster

3. Oversættelse
   - Maskinoversættelse: Oversættelse mellem forskellige sprog
   - Lokalisering: Tilpasning af indhold til specifikke kulturer og markeder
   - Realtidstolkning: Understøttelse af flersproget kommunikation

4. Kodegenerering
   - Automatisk kodning: Generering af kodestrukturer og funktioner
   - Kodekompletering: Intelligent forslag til næste linje eller blok af kode
   - Debugging-assistance: Hjælp til at identificere og løse kodningsfejl

5. Chatbots og Virtuelle Assistenter
   - Kundeservice: Automatiserede svar på kundeforespørgsler
   - Personlige assistenter: AI-drevne hjælpere som Siri eller Alexa
   - Interaktive læringssystemer: Personlige tutorer og uddannelsesværktøjer

6. Dataanalyse og Indsigt
   - Mønstergenkendelse: Identificering af trends i store datasæt
   - Prædiktiv analyse: Forudsigelse af fremtidige tendenser baseret på historiske data
   - Automatiseret rapportering: Generering af indsigtsfulde rapporter fra rå data

7. Medicinsk og Videnskabelig Forskning
   - Litteraturgennemgang: Hurtig analyse af videnskabelige publikationer
   - Diagnostisk støtte: Hjælp til læger ved analyse af patientdata
   - Lægemiddeludvikling: Accelerering af processen for opdagelse af nye lægemidler

8. Juridisk Analyse
   - Dokumentgennemgang: Hurtig analyse af kontrakter og juridiske dokumenter
   - Casesøgning: Identifikation af relevante præcedenssager
   - Compliance-tjek: Automatisk kontrol af overholdelse af regler og bestemmelser

Disse anvendelsesområder viser, hvordan LLM'er kan revolutionere mange aspekter af vores arbejde og daglige liv ved at automatisere komplekse sproglige opgaver og give indsigt i store mængder information.

## 2. AI-drevne Værktøjer og Tjenester i Softwareudvikling

Lad os være ærlige: Softwareudvikling er kompleks, men den er også forudsigelig. Der er regler, mønstre og best practices, som gentager sig på tværs af projekter og domæner. Når alt kommer til alt, er der intet der taler for, at en veldesignet AI ikke skulle være bedre end et menneske til at udføre denne opgave på alle tænkelige måder. AI'er bliver ikke trætte, de glemmer ikke detaljer, de har adgang til al eksisterende kode og dokumentation, og de kan arbejde 24/7 uden at brokke sig over overtid eller kaffe af dårlig kvalitet. 

Så spørgsmålet er ikke længere, om AI kan erstatte menneskelige udviklere, men snarere hvornår og hvordan. Lad os se på, hvordan værktøjerne har udviklet sig, og hvor vi er på vej hen.

### Udviklingsværktøjernes Evolution
1. Traditionel Code Completion
   - Baseret på statisk analyse og foruddefinerede regler
   - Begrænset til simple forslag baseret på eksisterende kode

2. AI-drevet Tab Completion (f.eks. Copilot)
   - Bruger machine learning til at generere mere kontekstuelle og avancerede forslag
   - Kan foreslå hele kodeblokke eller funktioner baseret på kommentarer eller delvis kode

3. AI-assisteret Pair Programming
   - Tager hensyn til flere filers kontekst
   - Kan foreslå arkitekturelle ændringer og optimeringsforslag
   - Hjælper med at identificere potentielle fejl og sikkerhedsproblemer

4. Fremtidens Agent-baserede Udvikling
   - Multiple specialiserede AI-agenter, der samarbejder om forskellige aspekter af projektet
   - Automatiseret generering af hele projekter, inklusive frontend, backend, og dokumentation
   - Kontinuerlig optimering og vedligeholdelse af kodebasen

### Fordele ved AI-drevne Udviklingsværktøjer
- Øget produktivitet gennem hurtigere kodegenerering
- Reduceret antal fejl og forbedret kodekvalitet
- Lettere onboarding af nye udviklere til eksisterende projekter
- Mulighed for hurtig prototyping og eksperimentering

### Udfordringer og Overvejelser
- Afhængighed af eksterne AI-tjenester og potentielle sikkerhedsrisici
- Behov for at validere og forstå AI-genereret kode
- Balancering mellem AI-assistance og bevarelse af udvikleres kreativitet og problemløsningsevner
- Etiske overvejelser omkring ophavsret og ansvar for AI-genereret kode

### Fremtidsperspektiver
- Integration af AI i hele softwareudviklingslivscyklussen
- Personlige AI-assistenter tilpasset individuelle udvikleres stil og præferencer
- Potentiale for AI til at håndtere komplekse opgaver som refaktorering af legacy-systemer
- Udvikling af mere specialiserede AI-værktøjer til specifikke programmeringssprog eller domæner

## 3. AI i Pair Programming: En Ny Æra af Samarbejde

AI i pair programming repræsenterer en revolutionerende tilgang til softwareudvikling, hvor mennesker og kunstig intelligens arbejder side om side. Denne metode kombinerer menneskelig kreativitet og domæneviden med AI's evne til hurtig informationsbehandling og mønstergenkendelse.

### Live Demonstration af AI-assisteret Udvikling

I denne sektion vil vi gennemføre en live demonstration af AI-assisteret udvikling ved hjælp af forskellige værktøjer:

1. **Aider med Claude 3.5 Sonnet**: Vi vil vise, hvordan Aider integrerer Claude 3.5 Sonnet til at assistere i kodningsprocessen.
2. **Claude Dev**: Et alternativt værktøj, der demonstrerer forskellige tilgange til AI-assisteret kodning.
3. **Continue Dev**: Vi vil udforske, hvordan dette værktøj kan bruges til kodekompletering og -forbedring.

### Effektiv Interaktion med AI-assistenter

For at få det bedste ud af AI i pair programming, er det vigtigt at forstå, hvordan man effektivt interagerer med AI-assistenter:

1. **Kontekst er nøglen**: Jo mere kontekst du giver AI-assistenten, desto bedre bliver resultatet. Tænk på AI'en som en menneskelig partner, der har brug for grundig information for at forstå opgaven fuldt ud.

2. **Klare instruktioner**: AI'er er ikke tankelæsere. Præcise og detaljerede instruktioner er afgørende for at opnå de ønskede resultater.

3. **Struktureret tilgang**: En effektiv metode til at arbejde med AI involverer tre hovedfaser:
   - Projektets formål og krav
   - Arkitektur og design
   - Funktionelle krav og brugergrænseflade

4. **Dokumentation er afgørende**: Brug Markdown-filer til at dokumentere dit projekt. Dette format er let at læse for både mennesker og AI'er og hjælper med at holde information struktureret og tilgængelig.

### Praktisk Workflow med AI

1. **Projektbeskrivelse**: Start med en detaljeret beskrivelse af projektet i Markdown-format. Dette danner grundlaget for AI'ens forståelse af opgaven.

2. **Skemafiler og API-beskrivelser**: Opret skemafiler og API-beskrivelser tidligt i processen. Dette giver AI'en et klart billede af projektets struktur og dataflow.

3. **AI-genereret Projektplan**: Lad AI'en generere en TODO-liste med milestones baseret på din projektbeskrivelse. Dette kan hjælpe med at strukturere udviklingsprocessen.

4. **Dokumentation**: Brug AI'en til at generere detaljeret dokumentation. Dette sikrer, at dokumentationen holdes opdateret i takt med projektets udvikling.

### Fordele ved AI i Pair Programming

- Øget produktivitet gennem hurtigere kodegenerering og fejlfinding
- Adgang til en bred videnbase, der kan hjælpe med at løse komplekse problemer
- Kontinuerlig læring og forbedring af kodekvalitet
- Mulighed for at fokusere på højere-niveau design og arkitektur, mens AI håndterer rutineopgaver

### Udfordringer og Overvejelser

- Vigtigheden af at validere AI-genereret kode
- Balancering mellem AI-assistance og bevarelse af menneskelig ekspertise
- Håndtering af potentielle bias i AI-modeller
- Sikkerhed og fortrolighed ved brug af eksterne AI-tjenester

Denne tilgang til AI i pair programming åbner op for en ny æra af softwareudvikling, hvor mennesker og maskiner samarbejder om at skabe mere effektive, robuste og innovative løsninger.

## Konklusion

- Opsummering af hovedpunkter
- Fremtidsperspektiver for AI i softwareudvikling
- Opfordring til at udforske og eksperimentere med AI-værktøjer

## Spørgsmål og Diskussion

- Spørgsmål?
- Hvad tænker i?

Tak for jeres opmærksomhed!

## One More Thing

### Værktøjer og Ressourcer

1. **Replit (https://replit.com/)**
   - Nyeste skud på stammen - er lige kommet i Beta
   - Kan lave hele projekter og man kan demo det live i browser med backend etc.

2. **Aider (https://aider.chat/)**
   - Den Pair programmer jeg bruger mest
   - Kører bare via Python lokalt

3. **OpenRouter (https://openrouter.ai/)**
   - En løsning hvor man kan bruge alle LLMer uden at købe dem individuelt

4. **Anthropic Console (https://console.anthropic.com/)**
   - En af de bedste LLMer (Lige nu)
   - Betalt tjeneste, men man får 5$ gratis til at prøve den ud

### Sociale Medier og Læringsressourcer

1. **AI Code King (https://www.youtube.com/@AICodeKing)**
   - YouTube-kanal med mange gode videoer om AI og kode
   - Bemærk: AI-genereret indhold, stemmen kan være irriterende i starten

2. **Josh Pocock (https://www.youtube.com/@joshfpocock)**
   - Endnu flere AI developer tools og ressourcer

3. **In the World of AI (https://www.youtube.com/@intheworldofai)**
   - Omfattende samling af AI-relateret indhold

Disse ressourcer giver et godt udgangspunkt for at udforske og lære mere om AI-drevne udviklingsværktøjer og den seneste udvikling inden for AI-teknologi.
