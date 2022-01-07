# teknologi spørgsmål 1:
Hvad skal du som udvikler være opmærksom på, når du registrerer data om klagerne? Nævn én lov man skal være opmærksom på, og mindst 3 konkrete ting de skal gøre for ikke at overtræde den.

GDPR er persondata lovgivningen som sikrer at persondata bliver anvendt fornuftigt, samt at der sikres samtykke for anvendelsen af persondata.
3 konkrete ting GDPR indebærer kunne være:
- sikre fornuftig databehandling samt dokumentere det
- Dokumentere at de lever op til GDPR
- Sikre at de personer der behandler persondataen er kyndige til det

et godt eksempel på overholdelse GDPR er smittestops appen:  
https://smittestop.dk/spoergsmaal-og-svar/

# teknologi spørgsmål 2:
Hvilken form for hackerangreb kan ‘klagesiden‘ tænkes at være sårbar overfor, og hvordan kan denne sårbarhed begrænses? 
Nævn mindst 3 ting man kan gøre for at sikre databasen og personoplysningerne.
- Sanitize sit input
- ORM
- NON-SQL database for at sikre mod SQL injection
- CORS
- Hashing af sensitiv data


# API (opg5):
api'en er designet med en fuld CRUD løsning således at endpointet "/vindmolle/" tager imod GET request
ligeledes tager endpointet "/vindmolle/:id" imod PUT DELETE POST samt "GET by ID"

det præcis samme gør sig gældene for endpointet "/elproduktion" som også har en identisk fuld CRUD løsning

jeg har valgt at lave en "post by ID løsning" således man ikke kan lave en post request hvis eksempelvis vindmøllen allerede eksisterer

API'en er deployet på heroku, og deployet til domænet tallboye.com/eksamen
