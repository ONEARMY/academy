---
id: moules d'injection
title: Conseils sur la fabrication de moules d'injection
sidebar_label: Moules d'injection
---
<style>
:root {
  --highlight: #ffe084;
  --links: rgb(131, 206, 235);
  --hover: rgb(131, 206, 235);
}
</style>

<img style="margin-left:0px;" src="../assets/create/socket-cnc.jpg" />

# Conseils sur la fabrication de moules d'injection

Fondamentalement, toutes les machines ont besoin de moules pour faire quelque chose, que ce soit une feuille, une poutre ou autre chose que vous fabriquerez. La machine la plus polyvalente avec laquelle utiliser des moules est la machine d'injection, mais elle a ses limites. Rien à craindre! Il est tout simplement important de savoir que vos contraintes de design sont en cours. Commençons par les pros et les côtés:

| Pro                                                                       | Cons                                                                                                        |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Idéal pour les petites pièces <150cm3                                     | Les moisissures peuvent être coûteuses                                                                      |
| Temps de cycle courts (<2-5min)                                           | Processus compliqué avec de nombreuses incertitudes                                                         |
| Les cavités multiples permettent une production plus rapide               | Volume insuffisant pour les pièces plus grandes                                                             |
| Production fiable de pièces                                               | Les pièces avec des parois minces ont besoin de plus de pression que ce que la machine actuelle peut offrir |
| Des pièces très détaillées peuvent être réalisées                         | Principalement adapté pour HDPE et PP                                                                       |
| Les pièces avancées peuvent être conçues à l'aide d'inlays et de curseurs |                                                                                                             |



## Matériaux pour fabriquer un moule

Toujours là? Génial ! Le matériau le plus commun pour les petites nappes est l'aluminium car il est plus facile à usiner que l'acier, et a une durée de vie relativement élevée par rapport aux autres matériaux. Il existe également différents procédés de fabrication qui peuvent être sélectionnés pour la fabrication d'un moule, chacun avec certains avantages et inconvénients. Nous avons ici un aperçu :


| Matériel                                            | Application                                        | Précision         | Accessibilité | Coûts           | Durée de vie (tirs)   |
| --------------------------------------------------- | -------------------------------------------------- | ----------------- | ------------- | --------------- | --------------------- |
| Bois / MDF                                          | Non recommandé (bâtons en plastique pour le moule) | Faible - Moyen    | Élevé         | Faible (<100€)  | -                     |
| Acryl (CNC/ Lasercut)                               | Démonstrations/prototypage                         | Faible - Moyen    | Élevé         | Faible (<100€)  | 5-10                  |
| Casting en silicone                                 | Prototypage                                        | Bas               | Élevé         | Faible (<100€)  | Jusqu'à 20            |
| Impression SLA (résine haute température)           | Prototyping, petites séries                        | Moyenne           | Moyenne       | Moyenne (>200€) | Jusqu'à 100           |
| [Aluminium (Casting)](https://youtu.be/5LhHUBz9uL0) | Moulages pour la géométrie biologique              | Bas - Moyen       | Élevé         | Faible (<100€)  | Jusqu'à 2000 - 10.000 |
| [Aluminium (Machiné)](https://youtu.be/ZYFoWP-3MYE) | Séries petites, Séries moyennes                    | Élevé             | Bas           | Moyenne (>200€) | Jusqu'à 2000 - 10.000 |
| [Acier (2D Lasercut)](https://youtu.be/P_zCIXsHkVI) | Prototypage - Grande Série                         | Moyenne (découpe) | Moyenne       | Faible (<100€)  | Jusqu'à 100.000       |
| [Acier (soudé)](https://youtu.be/dYG7qcGp5mc)       | Prototypage - Grande Série                         | Faible - Moyen    | Élevé         | Faible (<100€)  | Jusqu'à 100.000       |
| Acier (Machiné)                                     | Grandes séries                                     | Très haut         | Bas           | Haut (>1.000€)  | Jusqu'à 100.000       |



# Dimensions de la pièce et du moule

La taille maximale possible de la pièce est définie par plusieurs variables :

1. Volume maximum -> le volume de la pièce (printemps inclus, portes et coureurs) est-il inférieur à 150g ? (pour la machine d'injection standard v3). En allant vers l'extrémité supérieure de la plage de volume >130 g, on fera une compression supplémentaire du plastique nécessaire et on réduira le temps de cycle. Les flocons ont un volume plus grand que le volume en fusion du plastique: <br><br> <img style="margin-left:0px;" src="../assets/create/volume.jpg" width="500" /><br>

2. Taille totale du moule -> peut-il être utilisé avec ma machine d'injection ? (v3 Injection: Diamètre: 380mm x 170mm) Si vous utilisez une buse à vis et un moule rectangulaire, considérez la distance en diagonale pour la largeur/longueur maximale! <br><br> <img style="margin-left:0px;" src="../assets/create/sizes.jpg" width="500" /><br>

3. Profondeur des pièces -> Plus facile si moins de ~40mm, car les terminaux standard peuvent être utilisés pour l'usinage. La plupart des terminaux sont limités à environ 100 mm de longueur. Peut être pertinent si des machines à commande numérique de style passe-temps avec peu de Z-Travel sont utilisées. Le moule peut généralement être usiné à partir d'un seul bloc si vous restez en dessous de 80mm. Cela peut être un gros économiseur de coûts dans le processus. <br><br> <img style="margin-left:0px;" src="../assets/create/milling.jpg" width="500" /><br>

4. Zone projetée de toutes les cavités, coureurs et portes vers la direction d'ouverture du moule. Ceci détermine la force de serrage nécessaire. Ce n'est pas un problème pour les conceptions de pièces injectées avec des machines à injection manuelle. Si votre pièce est fabriquée sur une machine à injection à haute pression, vous devrez peut-être considérer cela plus près. <br><br> <img style="margin-left:0px;" src="../assets/create/mould.jpg" width="500" /><br>



> Un pourboire : penser aux restrictions de fabrication de votre produit au début du processus vous fera gagner du temps et de l'argent sur la route. Pour réduire les coûts de la fabrication des moules, vous devez concevoir toutes les caractéristiques les plus grandes et les moins profondes possibles - il permet l'utilisation de plus gros outils et de vitesses plus rapides dans la fabrication du moule.

## Rétrécissement et tolérance

Tous les polymères thermoplastiques ont une rétractation lorsqu'ils se refroidissent à partir d'un état en fusion (voir le tableau ci-dessous).

Le taux de rétractation est très important pour la planification des matériaux et des moules: le matériau se rétrécit généralement vers le centre d'une pièce et cela signifie que toute découpe ou haute caractéristique au centre peut entraîner une pièce qui se coincera dans le moule.

La prise en compte de la rétractation est très importante, en particulier pour les caractéristiques fines où les tolérances pour les autres pièces sont minces. Le rétrécissement peut également varier à l'intérieur de la gamme donnée en fonction d'additifs (inconnus) à l'intérieur du matériau.
<br>
| Matériel      | Taux de rétrécissement |
| ------------- | ---------------------- |
| PEHD          | 3,3%                   |
| LDPE          | 3,8%                   |
| PP            | 2,6%                   |
| ABS, PC, PMMA | 0,6%                   |
| PP            | 0,5%                   |
<br>
<img style="margin-left:0px;" src="../assets/create/shrinkage.jpg" width="500" /><br>


## Angle du brouillon

Pour éjecter facilement les pièces des moules, toutes les surfaces parallèles à la direction d'ouverture ont besoin d'un angle de tracé. Cela permet un démoulage facile de la pièce.

La valeur courante pour démarrer est de 2°, les fonctions élevées peuvent utiliser un angle de brouillon jusqu'à 5°. Il est recommandé d'ajouter un angle de 1° pour chaque 25mm de hauteur. Plus l'angle est ébauché, mieux il est pour éjecter une partie du moule. L'ajout d'angles brouillons à une pièce n'est pas une considération « naturelle » et est souvent en conflit avec les objectifs de conception de l'ingénierie mécanique ou de la conception industrielle, le but est donc d'inclure autant que possible tout en atteignant vos objectifs de conception et d'ingénierie. Même un angle de brouillon de 0,5° peut faire une grande différence dans la production.

> Astuce pro : si vous ajoutez de la texture à vos surfaces, faites attention à augmenter l'angle d'ébauche à 3-5°.

De nombreux logiciels sur le marché offrent une fonction d'analyse de brouillons utile, et cela peut être très pratique, surtout si vous devez vérifier plusieurs surfaces sur une seule pièce pour un angle de brouillon. Vous pouvez définir la plage des angles de brouillons lisibles. Voir l'image ci-dessous.

<img style="margin-left:0px;" src="../assets/create/draft-angle-1.jpg" width="500" />
<br>

<p class="note">Remarque : s'il n'y a pas de possibilité d'ajouter un angle de brouillon à votre design, envisagez de travailler avec des curseurs ou des inserts pour rendre les surfaces droites possibles. Gardez à l'esprit que cela augmentera considérablement les coûts de fabrication.
</p>

## Épaisseur du mur
La bonne épaisseur de paroi est très importante pour l'injection réussie de votre pièce pendant la fabrication. L'épaisseur du mur correspond au choix du matériau, ou plus précisément au MFI (indice de fusion). Donc, selon votre matériau, il y a une gamme d'épaisseurs de paroi possibles (voir le tableau ci-dessous)

Sachez que les machines à injection manuelle sont principalement limitées par la pression qu'ils peuvent accumuler - sélectionnez une valeur à l'extrémité supérieure de la gamme pour vous assurer que la pièce peut être injectée avec succès. Une épaisseur de paroi éprouvée est supérieure à 2,5mm qui, dans la plupart des applications, a bien fonctionné. Dans l'image que vous voyez le cas iPhone 7 du dernier kit de démarrage, il montre une simulation de plusieurs épaisseurs de paroi et montre la raison pour laquelle il est devenu 2,5mm d'épaisseur.

<img style="margin-left:0px;" src="../assets/create/wall-thickness.jpg" width="500" />

Les valeurs maximales sont des valeurs recommandées par l'industrie. Gardez à l'esprit que c'est une option valable de les dépasser autant que vous le souhaitez. Cela peut être une option pour injecter des pièces solides comme une poignée de couteau, de petites plaques ou d'autres objets. L'inconvénient est que vous allez faire face à de plus grandes marques d'écoulement, rétrécissement plus élevé et durée de cycle plus longue parce que les pièces doivent refroidir plus longtemps avant de pouvoir être retirées du moule.

<img style="margin-left:0px;" src="../assets/create/wall-thickness-1.jpg" width="500" />

L'épaisseur de la paroi combinée à la distance de débit (la porte vers l'espace de cavité le plus loin) est le facteur le plus important dans la conception des pièces pour déterminer la force d'injection nécessaire.

Par rapport à l'industrie, La plupart des espaces de travail avec des machines à injection manuelles n'ont pas la possibilité d'augmenter la pression d'injection en basculant la machine d'injection. Faites donc très attention à la conception de pièces à parois minces (<1,5mm) et si vous le pouvez, demandez à votre fournisseur de moules de nous faire part de vos commentaires si la force d'injection nécessaire est suffisante pour remplir votre moule.

L'épaisseur du mur doit être la même sur toute la partie pour plusieurs raisons :
- Débit non perturbé dans la pièce
- Prévention des marques d'évier

Raisons pour augmenter l'épaisseur du mur :

- Pression nécessaire réduite
- Force structurelle ajoutée
- (La géométrie de la pièce doit être solide)

Motifs de réduction de l'épaisseur du mur :

- Empêcher les marques d'évier
- Réduire l'utilisation des matériaux (volume d'injection nécessaire)
- Réduire le temps de cycle

<br>
| Matériel  | Gamme complète - industrielle (mm) | Machines manuelles - Recommandées (mm) |
| --------- | ---------------------------------- | -------------------------------------- |
| PP        | 0,8 - 3,8                          | 2,5 - 5                                |
| HDPE/LDPE | 0,8 - 4                            | 2,5 - 5                                |
| PP        | 1 - 4                              | 2,5 - 5                                |
| ABS/PC    | 1,2 - 3,5                          | 2,5 - 4,5                              |
| POM       | 0,8 - 3                            | 2,5 - 4                                |
| PMMA      | 0,6 - 3,8                          | 2,5 - 5                                |


## Fillets
Toutes les pièces en plastique autour de vous ont des filets sur leurs bords. La seule exception est les bords qui sont formés à l'intersection de chaque moitié, ou celles formées par des curseurs et des inserts en combinaison avec d'autres parties. Cela permet d'une part de libérer facilement la pièce et d'autre part un flux de matériau uniforme dans le moule. De plus, il réduit les coûts de fabrication de moules dans le processus de fabrication.

> Astuce pro : essayez de garder le minimum de filets à l'intérieur supérieur à 0,5 mm pour vous assurer que les outils standards peuvent être utilisés pour la fabrication.

<br>
<img style="margin-left:0px;" src="../assets/create/fillets.jpg" width="500" />

Gardez à l'esprit que l'épaisseur de la paroi doit également être maintenue sur le fil.

<img style="margin-left:0px;" src="../assets/create/fillets-1.jpg" width="500" />

Pour assurer un flux de matériaux facile, essayez d'éviter les bris durs dans la conception des pièces.

<img style="margin-left:0px;" src="../assets/create/fillets-2.jpg" width="500" />


## Texte et graphismes

Avec la gravure, vous pouvez ajouter du texte et des graphiques à votre produit de manière très économique. Cela évite les processus postérieurs comme l'estampage et l'impression et rend inutile l'utilisation d'étiquettes supplémentaires. Dans ce processus, le type de plastique peut être ajouté facilement et avec un détail précis.

Le texte et le graphique peuvent être intégrés de deux manières, soit embossés soit débossés:

- Le texte débossé est l'option la plus économique car le matériel autour du texte n'a pas besoin d'être enlevé par un petit moulin fini.
- Bien que le gaufrage soit plus facile à lire, parce que la zone s'assombrit des ombres qui se jettent à l'intérieur.

<img style="margin-left:0px;" src="../assets/create/text-engrave.jpg" width="500" />

La valeur la plus pertinente est le rapport entre la largeur minimale de ligne et la profondeur. Vous voyez dans l'image ci-dessous à quoi ressemble la forme d'un bit de gravure. En raison de la forme géométrique la ligne avec s'agrandit au fur et à mesure que la coupe devient plus profonde. Il y a des bits de gravure dans une plage de 10° à 90° et l'avantage est que vous obtenez déjà un angle de brouillon par défaut. Sur les plus petites hauteurs des polices, l'angle d'ébauche est à peine visible.

La profondeur du texte gravé et des graphiques doit être supérieure à >0,2 à 0,5 mm. Des caractéristiques plus profondes peuvent être usinées à l'aide de petits moulins. Les machines de base ne peuvent utiliser que des terminaux de plus grande taille ~>0,5mm et la largeur de ligne doit être assortie en conséquence.

Tous les embouts de gravure ont une pointe plate ou ronde et la plus petite taille de pointe commence à partir de 0,1mm.

<img style="margin-left:0px;" src="../assets/create/text-graphics.jpg" width="500" />

## Trous et découpes

Des trous intégrés ou des découpes dans des pièces d'injection vous font gagner du temps dans le post-traitement de vos pièces avec des opérations secondaires.

Mais ils courent le risque de créer des lignes soudées/tricotées lorsque le plastique coule autour d'eux et se refroidit sur le chemin. Ces lignes tricotées peuvent ajouter une faiblesse structurelle à leur emplacement. Par conséquent, il est important de savoir s'il y a une charge appliquée à la zone derrière eux où le plastique se fusionne.

<img style="margin-left:0px;" src="../assets/create/socket-holes.jpg" width="500" />

Le même effet se produira si vous travaillez avec plusieurs portes d'injection.

Si les forces appliquées dans ce domaine sont critiques, vous pouvez également envisager des méthodes de post-traitement telles que le perçage, la découpe laser, le fraisage à commande numérique ou le découpage de moule. Cependant cela ajoute une nouvelle étape de processus et augmentera les coûts de fabrication.


## Côtes

Pour augmenter la solidité de la structure tout en maintenant la même épaisseur de paroi, des côtes peuvent être ajoutées pour augmenter la rigidité d'une pièce. Il peut s'agir d'un processus de conception qui demande beaucoup de temps (contrairement à l'augmentation de l'épaisseur du mur) mais qui empêche les marques d'évier d'une meilleure manière et réduit l'utilisation des matériaux.

<img style="margin-left:0px;" src="../assets/create/socket-rib.jpg" width="500" />

L'épaisseur des côtes doit être autour d'un facteur de 0,4 - 0, x épaisseur de paroi de la pièce - rester sur l'extrémité inférieure pour éviter les marques d'évier. La hauteur des côtes de surface doit être inférieure à celle du facteur 3x d'épaisseur de la paroi.

<img style="margin-left:0px;" src="../assets/create/socket-rib-1.jpg" width="500" />

Si vous concevez les côtes, assurez-vous de tenir compte de la direction des forces appliquées - en particulier pour les pièces longues.

<img style="margin-left:0px;" src="../assets/create/ribbon.jpg" width="500" />

Pour éviter les marques d'évier sur les surfaces esthétiques pertinentes, la structure du ruban peut être décalée aux points d'intersection, où plus de matériaux sont présents. Veillez à ce que l'angle d'ébauche et les filets soient appliqués à tous les rubans afin d'assurer une éjection facile de la pièce. Le filet du bas des côtes est un choix difficile. Essayez de réduire le stress dans la pièce tout en évitant l'accumulation de matériaux et les marques d'évier.

<img style="margin-left:0px;" src="../assets/create/material-flow.jpg" width="500" />

## Texture de surface

Vous pouvez ajouter une texture de surface aux pièces. Des détails plus larges peuvent être mis en œuvre dans votre modèle CAO et peuvent être gravés pendant la production. Pour des méthodes de post-traitement de la structure de surface plus fine, comme la projection de sable peut être utilisée pour obtenir une texture de surface brute.

Si vous ajoutez de la texture à vos surfaces, prenez soin d’augmenter l’angle de brouillon à 3-5°. Ci-dessous est un exemple de moule en aluminium avec une finition sablée à l'intérieur.

<img style="margin-left:0px;" src="../assets/create/texture-sandblast.jpg" width="500" />


## Réduire les coûts de la fabrication de moules

| Suggestion                                                      | Effet                                                                                                            |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Réduire le nombre de cavités                                    | Le temps d'usinage est multiplié par le nombre de cavités dans un moule. L'heure de configuration reste la même. |
| Éviter les soulignements                                        | Sauvegarde la nécessité des curseurs ou des insertions                                                           |
| Évitez les petites fonctionnalités de moins de 1 mm de taille   | Permet d'usiner le moule sans utilisation de EDM                                                                 |
| Optimiser la géométrie de la pièce et du moule pour le fraisage | Enregistre la communication et accélère le processus de fabrication des moisissures                              |
| Utiliser les finitions de niveau inférieur                      | Économise du travail dans le post-traitement du moule                                                            |
| Considérer les opérations secondaires après l'injection         | Permet d'économiser des curseurs coûteux ou des difficultés dans la fabrication du moule                         |
| Réduire le nombre de parties du moule                           | Réduit la complexité de la fabrication du moule                                                                  |


## Rendre votre moule prêt à être partagé

Enfin, le plus cool des moules d'injection est qu'ils proviennent souvent de fichiers CAO et peuvent être partagés sur le Web. Un fichier numérique permet aux autres de reproduire le moule 🎉 Vous devriez transférer vos fichiers CAO ou en .step .

En cas de simple géométrie .svg ou .dxf des fichiers peuvent être utilisés pour faciliter le transfert de fichiers vers le fabricant de moules. Si vous utilisez des fichiers .svg, assurez-vous d'ajouter un dessin technique pour que le fabricant de moules connaisse la profondeur de toutes les caractéristiques. Considérez l'effort supplémentaire pour la génération du fichier CAO 3D.

Pour vous assurer que les fichiers 3d sont des géométries fermées solides, vous pouvez accélérer le processus. Des programmes comme Rhino peuvent causer des erreurs dans la génération de modèles. Vous pouvez ouvrir votre . fichiers tep dans différents visualisateurs de fichiers et programmes CAD facilement accessibles comme Fusion 360, Solidworks eDrawings, A360 ou onShape pour vérifier si une seule pièce solide est dans le dossier.

Les logiciels polygonaux comme 3ds max, Cinema 4D, (Blender) et openSCAD ne sont pas suffisants pour construire une géométrie fermée. Ils peuvent être utilisés dans de rares cas comme des modèles organiques complexes, mais le processus complet devient alors plus compliqué dans la fabrication.

<b>Vous voulez partager vos commentaires, discuter sur les produits/la conception de produits ou en apprendre davantage de la communauté? Rendez-vous sur le canal [#Create](https://discordapp.com/invite/yhmfzTZ) sur Discord. Ici, nous parlons du design du produit, de la moulure, des mélanges de couleurs, de la finition. tout pour créer des objets précieux !</b>