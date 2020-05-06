---
id: styles
title: Styles
sidebar_label: Styles (temp)
---

<iframe width="800" height="400" src="https://www.youtube.com/embed/dP1s7viFZHY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

<style>
:root {
  --highlight: #e1e1e1;
  --links: rgb(131, 206, 235);
  --hover: rgb(131, 206, 235);
}
</style>

# Styles (à supprimer)

<div class="videoChapters">
<div class="videoChaptersMain">

## Construire un déchiqueteur (c'est facile de sang)

Tournage vers lui avec une expression perplexe. Le personnel de la réception était très aimable et serviable. Une tapisserie flamande défaite, une image ondulée, un vieux casson italien, et un cas de livre presque vide, qui était tout ce qu'il semblait contenir, en plus d'une chaise et d'une table. Alors que Dorian Gray allumait une bougie à moitié brûlée qui se tenait sur les étagères, Il a vu que tout le lieu était recouvert de poussière et que le tapis était en trous. Une souris courut derrière le wainscoting. Il y avait une odeur humide de mildew.

</div>
<div class="videoChaptersSidebar">

### Chapitres Vidéo

- 0:11 Introduction
- 00:18 Qu'est-ce que le plastique ?
- 01:15 Différents types
- 02:45 Reconnaître les plastiques
- 05:18 Transformer les plastiques

</div>
</div>

# titre 1

## titre 2

### titre 3

`C'est une citation.`

Ceci est un lien vers un [autre document.](intro.md) Ceci est un lien vers une [page externe.](http://www.example.com)

Bouton

## Image

Pour ajouter des images dans markdown, utilisez :

```markdown
![Background](/academy/img/menu-selection-bg.jpg)
```

<div style="text-align: center;">Produira 👇</div>

![Arrière-plan](/academy/img/menu-selection-bg.jpg)

Si vous devez spécifier la taille de l'image, utilisez une balise `<img />`

Lorsque nous utilisons des images et des icônes que nous avons produites, ajoutez-les au dossier `docs/assets` et incluez-les avec le préfixe d'url `assets/`. Exemple: "Saskia veut ajouter une image `fantaisie en plastique. pg` au dossier `docs/assets/fancy-plastic.jpg` puis elle l'utilise dans la documentation comme ceci:

```markdown
![Fancy Plastic is Fancy](assets/fancy-plastic.jpg)
```

Produit cette image ci-dessous:

![Fancy Plastic is Fancy](assets/fancy-plastic.jpg)

(🤫 Elle ne ferait jamais cela bien sûr)

#### Exemple avec `<img />`:

```html
<img src="/academy/img/favicon.ico" width="150" height="150" />
```

<div style="text-align: center;">Produira 👇</div>

<img src="/academy/img/favicon.ico" width="150" height="150" />

## Les icônes sont incluses de la même manière que les images

<div class="j-slideshow">

![machine](https://preciousplastic.com/images/Community-machine-3.jpg)

![machine](https://preciousplastic.com/images/Community-machine-1-p-1600.jpeg)

![machine](https://preciousplastic.com/images/Community-machine-6.jpg)

![machine](https://preciousplastic.com/images/Community-machine-5.jpg)

![machine](https://preciousplastic.com/images/Community-machine-2.jpg)

</div>

# Liste d'icônes avec étiquettes

<div class="icon-list">

<div data-label="40kg">

![Weight](assets/icons/weight.svg)

</div>
<div data-label="€300">

![Money](assets/icons/money.svg)

</div>
<div data-label="Hard">

![Difficulty](assets/icons/difficulty.svg)

</div>
<div data-label="14 days">

![Time](assets/icons/time-needed.svg)

</div>

</div>

# Liste d'icônes avec étiquettes et une sans

<div class="icon-list">

<div data-label="Bottle">

![hdpe](assets/plastic/type-hdpe.svg)

</div>
<div data-label="Bottle">

![ldpe](assets/plastic/type-ldpe.svg)

</div>
<div data-label="Bottle">

![other](assets/plastic/type-other.svg)

</div>
<div data-label="Bottle">

![pet](assets/plastic/type-pet.svg)

</div>
<div data-label="Bottle">

![pp](assets/plastic/type-pp.svg)

</div>
<div data-label="Bottle">

![ps](assets/plastic/type-ps.svg)

</div>
<div data-label="Bottle">

![pvc](assets/plastic/type-pvc.svg)

</div>

</div>

## L'icône sans étiquette

![animal de compagnie](assets/plastic/type-pet.svg)

Étant donné qu'il s'agit d'un graphique vectoriel, il remplira l'espace disponible dans le document de sorte qu'il DOIT ÊTRE CONSTRAINÉ !

Utiliser la balise img à la place :

<img src="assets/plastic/type-pet.svg" width="50" height="50" />
<img style="margin-left: 0;" src="assets/plastic/type-pet.svg" width="100" />

Ou:

<img style="margin-left: 0;" src="./assets/ppimage.jpg" width="300" />

-       Recherche: quoi penser lors du choix de votre espace
-       Planifier : comment planifier efficacement votre espace
-       Construction : transformation d'une pièce vide en un espace de travail d'injection

1. **Lorem ipsum** dolor sit amet, consectetur adipiscing elit. Sed in neque a risus dignissim cursus id et nisi. Sed dignissim, leo et semper fermentum, justo ligula dictum massa, ac ornare arcu felis ut urna. Duis sodales massa ut pharetra tempus. Etiam eu fringilla nisl. Nullam rhoncus et elit a consectetur. Duis nec auctor tellus, ut varius urna. In nunc quam, ornare in suscipit a, iaculis eu tellus. Nunc et vestibulum neque. Sed laoreet justo a magna hendrerit ornare. Nulla facilisi. In sodales, purus in maximus consequat, eros purus sollicitudin purus, sed sagittis libero nunc vel lectus.
1. **Lorem** ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque a risus dignissim cursus id et nisi. Sed dignissim, leo et semper fermentum, justo ligula dictum massa, ac ornare arcu felis ut urna. Duis sodales massa ut pharetra tempus. Etiam eu fringilla nisl. Nullam rhoncus et elit a consectetur. Duis nec auctor tellus, ut varius urna. In nunc quam, ornare in suscipit a, iaculis eu tellus. Nunc et vestibulum neque. Sed laoreet justo a magna hendrerit ornare. Nulla facilisi. In sodales, purus in maximus consequat, eros purus sollicitudin purus, sed sagittis libero nunc vel lectus.
1. **Lorem ipsum dolor** sit amet, consectetur adipiscing elit. Sed in neque a risus dignissim cursus id et nisi. Sed dignissim, leo et semper fermentum, justo ligula dictum massa, ac ornare arcu felis ut urna. Duis sodales massa ut pharetra tempus. Etiam eu fringilla nisl. Nullam rhoncus et elit a consectetur. Duis nec auctor tellus, ut varius urna. In nunc quam, ornare in suscipit a, iaculis eu tellus. Nunc et vestibulum neque. Sed laoreet justo a magna hendrerit ornare. Nulla facilisi. In sodales, purus in maximus consequat, eros purus sollicitudin purus, sed sagittis libero nunc vel lectus.

## Conseils et notes

`> Astuce pro : apparaîtra en jaune` comme ceci :

> Astuce pro : s'affichera en jaune

`<p class="note">Note : apparaîtra en bleu</p>` comme ceci :

<p class="note">Note: sera affiché en bleu</p>

## Bouton de téléchargement

`<a class="downloadButton" href="https://github.com/hakkens/precious-plastic-kit/archive/master.zip"><unk> TÉLÉCHARGER ICI</a>`

Produire :

<a class="downloadButton" href="https://github.com/hakkens/precious-plastic-kit/archive/master.zip"><unk> TÉLÉCHARGER ICI</a>

