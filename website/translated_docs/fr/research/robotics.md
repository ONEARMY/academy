---
id: robotics
title: Tri robotique
sidebar_label: Tri robotique
---
<style>
:root {
  --highlight: #798bc5;
  --hover: #798bc5;
}
</style>

# Tri robotique

### Pourquoi trier ?

68% des plastiques du monde ne peuvent pas être triés par des installations de recyclage automatisées. Bien que le recyclage local fonctionne différemment dans chaque pays, les installations de tri typiques peuvent identifier et séparer les plastiques PEP et PEP mais en raison du coût élevé de tri, le reste des plastiques sera probablement mélangé. Ces plastiques mixtes peuvent être envoyés dans d'autres installations de déchets pour être brûlés pour de l'énergie, ils pourraient finir dans une décharge, Certains sont expédiés à l'étranger, et dans le pire des cas, ils sont entassés et brûlés en plein air.

Le recyclage local fonctionne différemment dans chaque pays, mais il y a une variété d'options pour reconnaître le plastique. Cela peut impliquer des machines industrielles de haut de gamme qui coûtent des millions d'installations ou qui coûtent aux gens de trier les déchets à la main. Construire des processus qui s’intègrent prendra du temps et de l’énergie, et c’est à cela que nous travaillons.

## Nous allons maintenant accueillir une arme !

<img style="margin-left: 0; margin-top: 40px; margin-bottom: 40px" src="../assets/gif/robot.gif" width="500" />

Pour qu'un système robotique comme celui-ci puisse choisir et trier le plastique, vous avez besoin de trois choses:

- Un bras, pour ramasser le plastique
- Capteurs (ou yeux), pour savoir où se trouve le plastique
- Un cerveau, programmé pour prendre des décisions en fonction des paramètres choisis

Ça semble simple, non ? Chaque composant a son propre ensemble de défis uniques, y compris le fait de les amener à travailler ensemble en tant qu'unité. De nombreux systèmes robotiques fournis par les entreprises sont fournis avec leurs propres systèmes d'exploitation, mais ce sont des systèmes fermés (et nous aimons le open-source! , nous sommes allés avec un système appelé Robotic Operating System (ou ROS). ROS crée tout ce cadre qui permet à chaque pièce - bras, capteurs, cerveaux - de s'envoyer des messages pour fonctionner correctement. Le framework ROS est entièrement modulaire (🎉) donc vous pouvez échanger différents composants ou algorithmes.

![Ceinture robotisée](assets/robotic_ros.png)

## Les yeux

Le robot a besoin d’un capteur pour comprendre ce qui se passe devant lui. Dans le cas du Robot en plastique Precious pour un arme, nous utilisons une caméra 3D, il prend des données de profondeur infrarouge, et les combine avec une image 2D régulière et qui crée un monde 3D. Nous utilisons un Kinect pour nos tests. Avoir des données 3D facilite la compréhension de toute la forme d'un objet et vous permet de mieux planifier comment le récupérer.

Selon le système que vous utilisez pour déplacer le plastique, il se peut que vous n’ayez pas besoin d’une caméra 3D sophistiquée pour reconnaître les objets. Il y a des systèmes qui utilisent des caméras 2D régulières combinées à une technologie d'apprentissage automatique pour cibler et reconnaître les objets à récupérer.

## Le cerveau

Ok, donc il y a beaucoup de données provenant de la caméra 3D, mais le bras ne sait pas encore quoi en faire. Lorsque nous regardons la visualisation des points, les humains peuvent comprendre que chaque groupe de pixels peut être un objet différent, mais nous avons besoin de guider notre cerveau informatique à travers plusieurs étapes avant de pouvoir reconnaître la même chose.

Ici vous pouvez voir à gauche la résolution complète des points venant de l'appareil. Avec ces nombreux points de données, il sera difficile pour le cerveau de tout traiter rapidement, ainsi à droite vous voyez comment nous tirons la résolution vers le bas pour accélérer le traitement.

![Ceinture robotisée](assets/Research/roboticbelt1.png)

Sur la vue supérieure, nous pouvons retirer la ceinture et il est donc plus facile de se concentrer sur des objets spécifiques (à gauche) puis avec les grappes qui sont restantes, le cerveau utilise un algorithme qui regroupe les points dans l'espace ensemble pour les reconnaître comme des objets uniques (à droite).

![Ceinture robotisée](assets/Research/roboticbelt2.png)

Avec nos objets uniques identifiés comme amas de points, notre cerveau trouve le centre et le point le plus haut de l’objet pour créer un « point de pioche » pour que la poignée de notre bras puisse se déplacer. Avec ce point dans l'espace connu, une fonction ROS est capable de créer un chemin sûr que le robot peut suivre pour atteindre ce point. Une fois qu'il se rend à ce point et qu'il ramasse un objet, il le déplace ensuite vers un emplacement de but déterminé.

## Les Armes

Nous avons acheté un robot d'occasion industriel, qui n'était pas exactement bon marché (mais chaque année ils deviennent moins chers et plus faciles à trouver). La nôtre possède une portée de 1,5 mètre et une capacité de charge utile de 10 kg. Il opère sur 6 axes pour atteindre une grande variété de poses. Ce n’est pas tout à fait prêt à gagner des prix pour la vitesse, mais nous avons choisi cela parce qu’ils sont plus faciles à développer. D'autres géométries de robots (comme un delta ou SCARA) sont mieux adaptées pour atteindre des vitesses élevées qui sont idéales pour les opérations de pick and place.

Pour attraper les déchets en plastique, nous utilisons une poignée à vide. C’est comme un mini tuyau aspirateur qui peut sucer et tenir des objets. Nous utilisons un générateur d'aspirateur qui utilise de l'air comprimé pour générer le vide. Notre générateur d'aspiration nous permet également d'accélérer le processus de dépose en activant un éclat d'air rapide pour faire sauter l'objet saisi.

<img style="margin-left: 0; margin-top: 40px; margin-bottom: 40px" src="../assets/gif/suck_sort.gif" width="500" />

Une autre partie clé de cette étape est la façon dont le plastique est livré au système. Mettre en œuvre une ceinture de convoyeur ferait de cette boucle entièrement autonome de recyclage plastique 🎉🎉🎉🎉

Alors que se passe-t-il ? Un Arme est en train de ramasser et de déposer du plastique, il sait où aller - un excellent résultat! À partir d’ici, nous améliorerons la poignée de sucer et de souffler et réfléchirons à l’installation d’une courroie de convoyeur. Si vous voulez en savoir plus sur ce projet de recherche, <a href="https://davehakkens.nl/community/forums/topic/sorting-plastic-with-robotics-v4/">visitez les forums</a> et discutez du tri en plastique. Nous avons également posté notre code de segmentation sur Github pour voir si quelqu'un veut l'améliorer. <a href="https://github.com/HbirdJ/plastic_picker">Regardez-le ici !</a>

# Ok, mais comment est-ce que c'est HDPE et qu'est-ce que c'est PS?

C'est une excellente question! Un autre élément très important pour réaliser ce travail est d'identifier réellement le type de plastique. Un robot est intelligent, mais malheureusement il n'est pas assez intelligent de posséder (probablement une bonne chose) pour identifier différents matériaux. C'est là que nos recherches sur les techniques d'identification plastique entrent en jeu.

Comme nous l'avons déjà appris, nous utilisons les numéros 1-7 pour étiqueter différents types de plastique, mais il y a encore beaucoup de plastique non marqué, dégradé ou déchiqueté, donc nous ne pouvons pas toujours nous fier à voir ce nombre.

## Apprentissage automatique

Ok, donc les machines ne sont pas assez intelligentes à elles seules, mais elles peuvent être entraînées pour reconnaître différents objets en utilisant des techniques connues comme l'apprentissage automatique. Fondamentalement, cela signifie que vous créez un grand jeu de données d'objets étiquetés avec un type de plastique, et puis alimenter cela dans un algorithme qui commence à reconnaître des modèles dans les données brutes et peut ensuite appliquer ces modèles à de nouveaux points de données inconnus.

Nous avons implémenté une version de base de cela dans notre recherche avec One Arm, et cela a parfaitement fonctionné sur notre petit ensemble de données inconnues ! Nous avons montré les objets connus de la caméra 3D et lui avons dit d'enregistrer leur forme, leur taille et leur couleur dans une variété d'orientations. Nous lui avons également dit quel type de plastique il était avant. Ensuite, nous avons alimenté toutes ces informations brutes dans un algorithme d'entraînement le modèle produit <a href="https://en.wikipedia.org/wiki/Support-vector_machine">une machine vectorielle de support (SVM)</a>. Ce modèle SVM a été capable de reconnaître les 15 objets connus que nous avons entraînés sur 100% du temps !

C'est génial, mais malheureusement, il y a plus de 15 objets plastiques différents dans le monde. Il est très possible d'utiliser des ensembles de données plus larges et des modèles améliorés pour trier toutes sortes de plastiques dans le futur, et il ya des installations de tri en plastique là-bas en utilisant cette méthode. Il y a encore des problèmes majeurs pour reconnaître le type de plastique dans un objet qui n'a pas été vu auparavant.

## Spectroscopie

Une autre approche consiste à utiliser la spectroscopie, en observant l’interaction entre la matière et le rayonnement électromagnétique. La vraie spectroscopie est plutôt complexe et coûteuse, donc nous pouvons l’utiliser plus facilement : la spectroscopie optique.

![Spectroscopie](assets/Research/spectroscopy.png)


Riiiiight. Comment cela fonctionne-t-il? Eh bien, c’est assez simple : vous lancez de la lumière sur les objets, et selon la réponse, il va catégoriser l'objet - chaque type de plastique a une sorte d'empreinte digitale. Il y a quelques options à faire:

Le premier est <i>spectroscopie presque infrarouge</i>, qui utilise des longueurs d'onde proches du spectre infrarouge. C’est une méthode largement utilisée dans l’industrie, et des recherches sont en cours dans la communauté Plastique Precious à ce sujet. L'inconvénient de cette méthode est qu'elle a des difficultés avec les plastiques épais, les plastiques de couleur foncée et les microplastiques. Il y en a plusieurs

L'autre option que nous avons est <i>spectroscopy raman</i>, qui est plus complexe mais a moins de inconvénients : il est plus précis dans l'identification du plastique, nous obtenons plus d'informations sur les couleurs, vous pouvez voir la contamination d'autres matériaux, et il peut donner des informations sur la dégradation du plastique. Wow, c’est incroyable! Mais attendez, il y en a encore plus: avec cette méthode on peut même l'utiliser pour reconnaître le microplastique dans l'eau

Les possibilités sont vraiment excitantes avec la spectroscopie raman, et c’est pourquoi nous avons décidé de nous briser la tête. Et bien sûr, toutes les recherches sont disponibles gratuitement en ligne open source. Alors entrons-y !

La relation entre le matériel et la lumière a été étudiée depuis longtemps. En 1930, le physicien indien C. V. Raman a reçu le Prix Nobel pour sa contribution à ce domaine. Et ceux qui sont sur le terrain ont appris beaucoup depuis lors. Par exemple, nous avons appris que lorsque vous lancez de la lumière sur un objet, quelques molécules gagnent de l'énergie et certaines perdent de l'énergie, et c'est une excellente façon d'identifier le plastique.

En termes simples, cela signifie que si nous lançons, par exemple, la lumière verte, à certains matériaux, nous obtiendrons surtout un retour de lumière verte, mais nous obtiendrons également d'autres couleurs, peut-être violet ou rouge, et de cette différence il est possible d'identifier ce qui est fait et donc de quel type de plastique il est.

<img style="margin-left: 0; margin-top: 40px; margin-bottom: 40px" src="../assets/Research/raman.png" width="500" />

Avant d'aller plus loin, il y a un certain nombre de points à respecter. Chez Precious Plastic nous sommes plutôt débrouillardés, nous aimons faire et réparer des trucs, développer des machines. Mais cette recherche expérimentale sur l’utilisation de la spectroscopie raman ne serait pas possible sans le travail de C.V. Raman (évidemment) et à tous les scientifiques et chercheurs qui publient leurs conclusions open source en ligne. Nous n'avons pas pu le faire sans vous (veuillez continuer!)

Donc, avec toutes ces informations là-bas, nous avons travaillé sur un prototype pour un capteur qui peut être utilisé partout dans le monde pour résoudre ce problème ensemble 💪

D'abord les choses. Les équipements optiques sont très sensibles à la poussière et il faut donc travailler avec les composants un environnement très propre. Besoin d'aide pour construire un espace propre? Rendez-vous sur les forums pour apprendre à en construire une avec une boîte, quelques pièces imprimées en 3D et des morceaux à partir d'un aspirateur.

Alors plongeons dans le scanner ! Le système se compose de deux étapes principales, la phase d'excitation et la phase spectrographique.

![Scanner](assets/Research/scanner.png)

La phase d'excitation est conçue pour briller une source de lumière sur le matériau que nous essayons d'identifier et d'orienter sa réponse dans le spectrographe. Afin de mesurer le changement d'énergie des molécules nous devons fournir une source de lumière connue de longueur d'onde et c'est le premier composant du spectrographe. Pour cela, notre spectrographe utilise un laser vert.

Nous utilisons un séparateur de faisceaux pour diriger la lumière laser vers une lentille à microscope où nous pouvons concentrer les photons sur une petite tache afin qu'ils interagissent avec notre plastique inconnu. Le même objectif de microscope est utilisé pour capturer la réponse du matériau. Puisque les molécules à l'intérieur d'un matériau qui présente l'effet de raman sont faibles (comparé à celles qui restent dans le même niveau d'énergie), nous devons filtrer le signal original avant de l'envoyer au spectrographe.

Pour le spectrographe, nous utilisons une configuration Czerny Turner, c'est là que la lumière sera répandue dans tous ses composants pour qu'elle soit collectée et numérisée par le capteur, pour que nous puissions le comparer et

La lumière entre dans la fente d'entrée qui limite l'accès à la lumière de sorte que nous n'obtenons que la réponse matérielle et rien d'autre. Un premier miroir est utilisé pour collimater la lumière à un grillage de diffraction (similaire à un prisme) afin de pouvoir enregistrer chaque longueur d'onde de la réponse. Ensuite, un second miroir est utilisé pour focaliser le spectre lumineux dans un tableau CCD où nous pouvons capturer le signal et le transférer sur un ordinateur pour une analyse plus approfondie. Un tableau CCD semble fantaisiste, mais c’est la même technologie que celle utilisée dans la caméra de votre téléphone cellulaire. Pour les signaux de structure moléculaire que nous recherchons, il faut être plus précis. C’est pourquoi le dernier composant du spectromètre est un refroidisseur thermoélectrique qui contrôle la température du tableau CCD.

Grâce à cette configuration, il est possible d'exduire les molécules et de mesurer leur réponse, puis de transférer l'information à un ordinateur pour une analyse plus approfondie. Merci à notre membre de notre équipe, Alejandro pour son travail jusqu'ici. Le scanneur Precious Plastic est encore un travail en cours, mais ce qui est passionnant, ce sont les capacités et les possibilités du système.

<b>Vous voulez en savoir plus ou partager vos connaissances? Rendez-vous sur les canaux [#robotics](https://discordapp.com/invite/5UYM4Sd) et [#plastic scanner](https://discordapp.com/invite/Khxfgg7) sur Discord. Ici, nous parlons d'efficacité, de tri, de balayage et, bien sûr, de robots 🤖</b>
