# App Animaux — Instructions Claude

## Projet
Application web éducative sur les animaux, destinée aux **enfants de 6-12 ans**.  
Pure HTML/CSS/JS — aucun framework, aucun build tool.

## Architecture
| Fichier | Rôle |
|---|---|
| `index.html` | Structure HTML unique (modal, grille, quiz) |
| `animals.js` | Tableau `ANIMALS` — 145 animaux |
| `app.js` | Logique JS (renderGrid, openModal, quiz…) |
| `style.css` | Styles (variables CSS, animations, responsive) |
| `serve.ps1` | Serveur HTTP PowerShell sur le port 3000 |

## Structure d'un animal (`animals.js`)
```js
{
  id, name, emoji,
  habitat, habitatEmoji,
  superpower,   // affiché dans la modal (bloc orange)
  fact,         // "Le sais-tu ?" (bloc vert)
  color,        // couleur du header modal (hex)
  weight,       // ex. "120-250 kg"
  origin,       // pays / zone géographique
  diet,         // régime alimentaire
  social,       // "Solitaire" | "En troupe (…)" | …
  lifespan      // ex. "10-14 ans (sauvage)"
}
```

## Serveur de preview
- Lancement via `.claude/launch.json` → `powershell -File serve.ps1` sur le port 3000
- **Ne jamais ajouter de lien Google Fonts** dans `index.html` — cela bloque les screenshots du renderer.
- Après modification des fichiers JS/CSS, appeler `location.reload()` via `preview_eval` puis rouvrir le modal.

## Points d'attention
- `animals.js` commence par `const ANIMALS = [` — si PowerShell réécrit le fichier sans BOM, vérifier que le `c` de `const` n'a pas été supprimé.
- Le modal utilise `shadeColor(a.color, -20)` pour assombrir le dégradé du header.
- La navigation modal (← Précédent / Suivant →) fonctionne sur les animaux **filtrés** (résultat de `getFilteredAnimals()`).
- Le quiz génère 15 questions aléatoires (superpower ou habitat, vrai/faux).

## Lancer l'app
```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
# puis ouvrir http://localhost:3000
```
