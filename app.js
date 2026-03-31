// Onze complete, lokaal gedreven 2026 database
const fitnessData = [
    // --- KRACHT ---
    {
        type: "Kracht", spiergroep: "Armen", naam: "Bench Dips", doelspier: "Triceps",
        uitvoering: [
            "Plaats je handen achter je op een stevige stoelrand.", 
            "Strek je benen of houd je knieën gebogen voor een lichtere variant.", 
            "Zak door je armen tot een hoek van 90 graden.", 
            "Duw jezelf weer omhoog."
        ],
        proTip: "Houd je rug dicht bij de stoel om je schouders te ontzien.",
        safeForm: "Zak nooit dieper dan 90 graden; het overstrekken van je schouderkapsel is riskant in de groei."
    },
    {
        type: "Kracht", spiergroep: "Benen", naam: "Bodyweight Squat", doelspier: "Quads & Glutes",
        uitvoering: [
            "Voeten op schouderbreedte, tenen iets naar buiten.", 
            "Zak langzaam alsof je op een stoel gaat zitten.", 
            "Houd borst vooruit, rug recht.", 
            "Duw krachtig omhoog vanuit je hakken."
        ],
        proTip: "Kijk recht vooruit om je nek neutraal te houden.",
        safeForm: "Laat je knieën niet naar binnen klappen (X-benen). Gebruik nog geen extra gewicht."
    },
    {
        type: "Kracht", spiergroep: "Core", naam: "Plank", doelspier: "Buikspieren & Onderrug",
        uitvoering: [
            "Steun op je onderarmen en tenen.", 
            "Houd je lichaam in een kaarsrechte lijn.", 
            "Span je buik- en bilspieren stevig aan.", 
            "Houd deze positie vast zolang je vorm perfect blijft."
        ],
        proTip: "Adem rustig door naar je buik, houd je adem niet in.",
        safeForm: "Laat je onderrug absoluut niet doorzakken. Je wervelkolom is kwetsbaar, dus stop direct bij pijn."
    },
    {
        type: "Kracht", spiergroep: "Borst", naam: "Knee Push-ups", doelspier: "Borst & Triceps",
        uitvoering: [
            "Handen iets breder dan schouderbreedte.", 
            "Steun op je knieën in een rechte plank.", 
            "Zak gecontroleerd met je borst naar de vloer.", 
            "Duw krachtig omhoog."
        ],
        proTip: "Knijp je billen samen om je core te fixeren.",
        safeForm: "Houd je ellebogen iets naar binnen gedraaid (pijlvorm) om je schoudergewricht te beschermen."
    },
    {
        type: "Kracht", spiergroep: "Rug", naam: "Superman", doelspier: "Onderrug & Schouders",
        uitvoering: [
            "Ga plat op je buik liggen, armen vooruit gestrekt.", 
            "Til je armen, borst en benen tegelijkertijd een stukje van de vloer.", 
            "Houd 2 seconden vast in de lucht.", 
            "Laat weer rustig zakken."
        ],
        proTip: "Denk aan het langer maken van je lichaam, niet alleen maar hoger tillen.",
        safeForm: "Ruk niet te hard aan je nek; blijf naar de grond kijken tijdens de beweging."
    },
    {
        type: "Kracht", spiergroep: "Schouder", naam: "Pike Push-up", doelspier: "Schouderkoppen",
        uitvoering: [
            "Plaats je handen en voeten op de grond en maak een omgekeerde 'V' (hond-houding).", 
            "Buig je armen en laat je kruin gecontroleerd richting de vloer zakken.", 
            "Duw jezelf schuin omhoog terug in de 'V'.", 
            "Houd je core strak."
        ],
        proTip: "Kijk naar je tenen tijdens de beweging.",
        safeForm: "Land nooit met je hoofd op de grond; stop de beweging ruim voor je de vloer raakt om je nek te sparen."
    },

    // --- LENIGHEID ---
    {
        type: "Lenigheid", spiergroep: "Schouders", naam: "Arm Circles", doelspier: "Schoudergewricht",
        uitvoering: [
            "Ga rechtop staan met je armen zijwaarts gestrekt.", 
            "Maak kleine cirkelende bewegingen naar voren.", 
            "Maak de cirkels langzaam groter.", 
            "Draai na 30 seconden de andere kant op."
        ],
        proTip: "Houd je schouders laag en ontspannen (ver weg van je oren).",
        safeForm: "Blijf binnen een comfortabele bewegingsuitslag om irritatie in het kapsel te vermijden."
    },
    {
        type: "Lenigheid", spiergroep: "Heup", naam: "Kneeling Lunge Stretch", doelspier: "Heupbuigers",
        uitvoering: [
            "Zet één knie op de grond en je andere voet voor je (90 graden hoek).", 
            "Duw je heupen zachtjes naar voren en omlaag.", 
            "Houd je bovenlichaam rechtop.", 
            "Houd 30 seconden vast en wissel."
        ],
        proTip: "Knijp de bilspier van het been dat op de grond rust aan voor meer rek.",
        safeForm: "Voorkom dat de knie van je voorste been voorbij je tenen steekt."
    },
    {
        type: "Lenigheid", spiergroep: "Borstspieren", naam: "Doorway Stretch", doelspier: "Pectoralis",
        uitvoering: [
            "Ga in een deuropening staan.", 
            "Plaats je onderarmen op het kozijn, ellebogen op schouderhoogte.", 
            "Leun zachtjes naar voren tot je rek voelt in je borst.", 
            "Houd 20-30 seconden vast."
        ],
        proTip: "Adem diep in en probeer bij het uitademen net een millimeter verder te zakken.",
        safeForm: "Forceer niet. Dit moet voelen als een zachte opening, niet als een pijnscheut."
    },
    {
        type: "Lenigheid", spiergroep: "Beenspieren", naam: "Actieve Hamstring Rek", doelspier: "Achterkant bovenbeen",
        uitvoering: [
            "Ga op je rug liggen met één been gestrekt.", 
            "Pak je andere been achter de knie vast en trek deze naar je borst.", 
            "Strek je onderbeen langzaam uit omhoog.", 
            "Buig en strek dit 10 keer."
        ],
        proTip: "Trek je tenen naar je toe voor een extra stretch in je kuit.",
        safeForm: "Rekken mag nooit scherp pijn doen in de gewrichten. Voel je het in je knieholte? Buig dan je knie een beetje."
    }
];

// --- APP LOGICA ---

// 1. Zoek de container in de HTML waar de kaarten moeten komen
const gridContainer = document.getElementById('grid-container');

// 2. Functie om de HTML kaarten te bouwen op basis van de data
function renderKaarten() {
    // Maak de container leeg (belangrijk voor eventuele latere filters)
    gridContainer.innerHTML = '';

    // 3. Loop door de database
    fitnessData.forEach(oefening => {
        
        // Maak een nieuw div-element
        const card = document.createElement('div');
        card.className = 'card';

        // 4. Vul de kaart met dynamische content via backticks (`)
        card.innerHTML = `
            <div class="card-badge">${oefening.type} | ${oefening.spiergroep}</div>
            <h2>${oefening.naam}</h2>
            <p class="doelspier"><strong>Doelspier:</strong> ${oefening.doelspier}</p>
            
            <h3 class="sectie-titel">Uitvoering:</h3>
            <ol class="uitvoering-lijst">
                ${oefening.uitvoering.map(stap => `<li>${stap}</li>`).join('')}
            </ol>
            
            <div class="pro-tip">
                <strong>💡 Pro-tip:</strong> ${oefening.proTip}
            </div>
            
            <div class="safe-form">
                <strong>⚠️ Safe Form:</strong> ${oefening.safeForm}
            </div>
        `;

        // 5. Plaats de kaart in het grid
        gridContainer.appendChild(card);
    });
}

// 6. Start de app
renderKaarten();
