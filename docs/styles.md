---
id: styles
title: Styles
sidebar_label: Styles (temp)
---

<iframe width="800" height="400" src="https://www.youtube.com/embed/dP1s7viFZHY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<style>
:root {
  --highlight: #e1e1e1;
  --links: rgb(131, 206, 235);
  --hover: rgb(131, 206, 235);
}
</style>

# Styles (to delete)

<div class="videoChapters">
<div class="videoChaptersMain">

## Build shredder (it's bloody easy)

Hallward glanced round him with a puzzled expression. The room looked as if it had not been lived in for years. A faded Flemish tapestry, a curtained picture, an old Italian cassone, and an almost empty book-case--that was all that it seemed to contain, besides a chair and a table. As Dorian Gray was lighting a half-burned candle that was standing on the mantelshelf, he saw that the whole place was covered with dust and that the carpet was in holes. A mouse ran scuffling behind the wainscoting. There was a damp odour of mildew.

</div>
<div class="videoChaptersSidebar">

### Video Chapters

- 0:11 Introduction
- 00:18 What is plastic?
- 01:15 Different types
- 02:45 Recognize plastics
- 05:18 Transform plastics

</div>
</div>

# title 1

## title 2

### title 3

`This is a quote.`

This is a link to [another document.](intro.md)
This is a link to an [external page.](http://www.example.com)

Button

## Image

To add images in markdown use:

```markdown
![Background](/academy/img/menu-selection-bg.jpg)
```

<div style="text-align: center;">Will produce 👇</div>

![Background](/academy/img/menu-selection-bg.jpg)

If you need to specify the size of the image use an `<img />` tag

When using imagery and icons that we have produced add them to the `docs/assets` folder and include them with the url prefix `assets/`.
Example:
"Saskia wants to add an image `fancy-plastic.jpg` to the folder `docs/assets/fancy-plastic.jpg` and then she uses it in the docs like this:

```markdown
![Fancy Plastic is Fancy](assets/fancy-plastic.jpg)
```

Produces this image below:

![Fancy Plastic is Fancy](assets/fancy-plastic.jpg)

(🤫 She would never do that of course)

#### Example with `<img />`:

```html
<img src="/academy/img/favicon.ico" width="150" height="150" />
```

<div style="text-align: center;">Will produce 👇</div>

<img src="/academy/img/favicon.ico" width="150" height="150" />

## Icons are included in the same way as images

<div class="j-slideshow">

![machine](https://preciousplastic.com/images/Community-machine-3.jpg)

![machine](https://preciousplastic.com/images/Community-machine-1-p-1600.jpeg)

![machine](https://preciousplastic.com/images/Community-machine-6.jpg)

![machine](https://preciousplastic.com/images/Community-machine-5.jpg)

![machine](https://preciousplastic.com/images/Community-machine-2.jpg)

</div>

# Icon list with labels

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

# Icon list with labels and one without

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

## The icon without a label

![pet](assets/plastic/type-pet.svg)

Since this is a Vector graphic it will fill up the available space in the document so it MUST BE CONSTRAINED!

Use the img tag instead:

<img src="assets/plastic/type-pet.svg" width="50" height="50" />
<img style="margin-left: 0;" src="assets/plastic/type-pet.svg" width="100"/>

Or:

<img style="margin-left: 0;" src="./assets/ppimage.jpg" width="300" />

-       Search: what to think about when choosing your space
-       Plan: how to plan your space effectively
-       Build: transforming an empty room into a injection workspace

1. **Lorem ipsum** dolor sit amet, consectetur adipiscing elit. Sed in neque a risus dignissim cursus id et nisi. Sed dignissim, leo et semper fermentum, justo ligula dictum massa, ac ornare arcu felis ut urna. Duis sodales massa ut pharetra tempus. Etiam eu fringilla nisl. Nullam rhoncus et elit a consectetur. Duis nec auctor tellus, ut varius urna. In nunc quam, ornare in suscipit a, iaculis eu tellus. Nunc et vestibulum neque. Sed laoreet justo a magna hendrerit ornare. Nulla facilisi. In sodales, purus in maximus consequat, eros purus sollicitudin purus, sed sagittis libero nunc vel lectus.
1. **Lorem** ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque a risus dignissim cursus id et nisi. Sed dignissim, leo et semper fermentum, justo ligula dictum massa, ac ornare arcu felis ut urna. Duis sodales massa ut pharetra tempus. Etiam eu fringilla nisl. Nullam rhoncus et elit a consectetur. Duis nec auctor tellus, ut varius urna. In nunc quam, ornare in suscipit a, iaculis eu tellus. Nunc et vestibulum neque. Sed laoreet justo a magna hendrerit ornare. Nulla facilisi. In sodales, purus in maximus consequat, eros purus sollicitudin purus, sed sagittis libero nunc vel lectus.
1. **Lorem ipsum dolor** sit amet, consectetur adipiscing elit. Sed in neque a risus dignissim cursus id et nisi. Sed dignissim, leo et semper fermentum, justo ligula dictum massa, ac ornare arcu felis ut urna. Duis sodales massa ut pharetra tempus. Etiam eu fringilla nisl. Nullam rhoncus et elit a consectetur. Duis nec auctor tellus, ut varius urna. In nunc quam, ornare in suscipit a, iaculis eu tellus. Nunc et vestibulum neque. Sed laoreet justo a magna hendrerit ornare. Nulla facilisi. In sodales, purus in maximus consequat, eros purus sollicitudin purus, sed sagittis libero nunc vel lectus.

## Tips and notes

`> Tip: will show up in yellow` will show up like this:

> Tip: will show up in yellow

`<p class="note">Note: will show up in blue</p>` will show up like this:

<p class="note">Note: will show up in blue</p>

## Download Button

`<a class="downloadButton" href="https://github.com/hakkens/precious-plastic-kit/archive/master.zip">↳ DOWNLOAD HERE</a>`

Will produce:

<a class="downloadButton" href="https://github.com/hakkens/precious-plastic-kit/archive/master.zip">↳ DOWNLOAD HERE</a>

