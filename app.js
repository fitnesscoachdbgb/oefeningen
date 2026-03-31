// Dit is onze lokale 'database'. Een lijst met oefeningen.
const fitnessData = [
    {
        type: "Kracht",
        spiergroep: "Benen",
        naam: "Bodyweight Squat",
        doelspier: "Quads & Glutes",
        uitvoering: [
            "Ga staan met je voeten op schouderbreedte, tenen wijzen iets naar buiten.",
            "Zak langzaam door je knieën, alsof je op een stoel gaat zitten.",
            "Houd je borst vooruit en je rug recht.",
            "Duw jezelf krachtig vanuit je hakken weer omhoog."
        ],
        proTip: "Kijk recht vooruit om je nek neutraal te houden.",
        safeForm: "Zorg dat je knieën niet naar binnen klappen. Je onderrug groeit nog, dus focus op techniek, niet op extra gewicht."
    },
    {
        type: "Kracht",
        spiergroep: "Borst",
        naam: "Knee Push-ups",
        doelspier: "Borstspieren & Triceps",
        uitvoering: [
            "Plaats je handen iets breder dan schouderbreedte op de grond.",
            "Steun op je knieën en houd je lichaam in een rechte lijn vanaf je hoofd tot je knieën.",
            "Laat je borst gecontroleerd naar de grond zakken.",
            "Duw jezelf krachtig omhoog tot je armen weer gestrekt zijn."
        ],
        proTip: "Knijp je bilspieren samen; dit houdt je core stabiel tijdens de beweging.",
        safeForm: "Laat je onderrug niet doorhangen. Dit voorkomt onnodige druk op je wervelkolom."
    },
    {
        type: "Lenigheid",
        spiergroep: "Hamstrings",
        naam: "Actieve Hamstring Rek",
        doelspier: "Achterkant bovenbeen",
        uitvoering: [
            "Ga op je rug liggen met één been gestrekt op de grond.",
            "Pak je andere been vast achter de knieholte en trek je knie richting je borst.",
            "Strek je onderbeen langzaam uit naar het plafond tot je rek voelt.",
            "Houd 2 seconden vast en buig weer rustig terug. Herhaal dit 10 keer."
        ],
        proTip: "Trek je tenen naar je toe wanneer je je been strekt voor een extra kuit-stretch.",
        safeForm: "Forceer de strekking nooit. Rekken mag licht oncomfortabel zijn, maar mag nooit scherpe pijn doen in je gewrichten."
    }
];

// Om te testen of het werkt, printen we de data in de console van de browser
console.log("Onze fitness data is geladen!", fitnessData);
