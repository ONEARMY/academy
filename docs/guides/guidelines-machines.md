# Machines How-to guidelines

By sharing a machine How-to you’re contributing to develop the largest, decentralised, open source library of recycling machines. Big up on that 🤙

When it comes to  machines How-to, the most important thing is to provide a complete download file with all the necessary files to replicate the machine. We understand that most of the work for your how-to will go in designing your machine and documenting it thoroughly, so a short 3-4 step how-to will be enough! If you want to add more steps for giving some tips and tricks regarding the machine manufacturing process it’s very valuable.

Regarding the documentation, we see CAD + a bill of material + schematic (if electric components) as the **minimum requirement** to share a machine how-to. This being said, it helps a lot if you can provide additional part and assembly drawings, laser cut files, manuals or any other relevant information to replicate this machine. 

## Main requirements for these how-tos are:

- Getting the files (at least at a minimum).
- Describe the content you are providing 
For example:
*In this folder you will find:*
    *- 3D CAD (.step and .f3d)*
    *- Laser cut files (.dxf)*
    *- Blueprints (.pdf)*
    *- Schematics*
    *- BOM*
    *... and more :)*
- List of skills required (welding, soldering, etc..)
- List of machinery required for manufacturing (welder, drill, grinder etc..).
- Proof of the machine having been built.
- Proof of the machine working/outcome (tested).

For the machine files, here’s what to remember:

## Download files folder structure
![Fold structure example](assets/guides/machines-1.png)

- Including the original format for 3D files is good but should always come together with a **STEP** file so that people can open it in different 3D Modelling softwares.
- For laser cut files, **.DXF** generally works best and if there’s any engraving, make sure to include that information in your steps.
- Blueprints individual **.PDF** for parts and assembly drawings. 
- Bill of materials (if needed) is best in **.PDF** or **excel** format.
- Schematics in **PDF.** 
- Any image format (JPEG, PNG)
- You can always include in the “Others” folders things like: instruction manuals, pictures, renders, add-ons, etc.
- Bundle all your files into **one .zip file.** Or a public link to make it easier to share around :)


# Steps structure:
## How to title: 
Ex. “Solar powered injection machine” (just the name of what it is, keep it simple).
![Names examples](assets/guides/machines-2.png)
*DO NOT USE PRECIOUS PLASTIC’S OFFICIAL MACHINE MODELS NUMBERING SYSTEM. 

## How to cover: 
### Text:
- Explain what machine it is. 
*Tip: check “information about naming” for more details below.
- Explain what this machine is for and specify if it's an upgrade or based on an existing design, if so, which one and what are the main improvements.
- Add any other important or interesting information about the product/mould.

### Cover picture:
![Cover image examples](assets/guides/machines-3.png)
It can be a render or a picture of the built machine in front of a clean background (or as clean as possible).

### Step #1 - Title:  Download.
#### Text:
Describe the content you are providing 
For example:
In this folder you will find:
- 3D CAD (.step and .f3d)
- Laser cut files (.dxf)
- Blueprints (.pdf)
- Schematics
- BOM
... and more :)

#### Picture:
![Picture example](assets/guides/machines-4.png)
Picture can be a render or a blueprint sample.


### Step #2 - Title: Build it.
#### Text:
Now describe the needed skills to build this machine. Here is a non-exhaustive list that you could include if applicable:
-  General metalworking (cutting, drilling)
- Welding
- Turning (machining on a lathe)
- Milling (machining on a mill)
- General woodworking (cutting, drilling)
- General electrical work (wiring safety switch, temperature controllers…)
- Motor electrical work (wiring motor, contactor, overload protection…)
- Programming (arduino, VFD…)
- Advanced assembly work (require specific tools, measurement  instruments and tolerances knowledge to align and assemble)
- Pneumatic
- Hydraulic
- …

⚙️List the machinery you used for the built (Optional but useful):
- Grinder, chop saw, MIG/MAG, TIG, drill press
- Lathe, mill (precise if manual or CNC)
- Table saw, router, planner
- …

#### Picture:
![Machine example](assets/guides/machines-5.png)
Picture should be of the machine built, **not** a render.

### Step 3: Run, create and sell :)   
#### Text:
- Explain how the machine should be operated.
- Explain what product you obtain with the machine.
- Give the relevant input / output of the machine (type of plastic, thickness, productivity, electric consumption…).
- Link relevant how-tos.
- Invite to sell and or buy in the Bazar.

#### Picture:
![Operation example](assets/guides/machines-6.png)
Picture of the machine running and/ or of the product obtained


### Step 4: Share back and feedback   
#### Text:
If you have feedback on the machine design or build process, share it with the community in the comments. Constructive feedback can help improve the quality of the machines and tools available on the platform.

If you have expertise in a particular area of machine building or plastic recycling, share it with the community. This can be in the form of tutorials, guides, or best practices. By sharing your knowledge, you can help others learn and grow in their plastic recycling journey.

Join discussions on the Community Platform on the Questions module and share your thoughts and opinions on machine building and plastic recycling. This is a great way to connect with other community members and learn from their experiences.

By sharing back and providing feedback, you can help strengthen the Precious Plastic community and contribute to its mission of reducing plastic waste. So, don't be afraid to speak up and share your thoughts with the community!

# Tips on naming your machine:
- Machines developed directly by the Precious Plastic core team are documented with specific names (Shredder, Extruder PRO, Sheet-press…) that are sometimes shortened to few letters as a simplification. Then to keep track of changes, our machines are numbered with 2 digits. The first one symbolises a significant change in the design or the concept, while the second is to symbolise small changes and/or optimisations :
**For example:** We designed the Sheet-press 2.0 (SPR - 2.0) based on the V4 Sheet-press design (SPR - 1.0). We considered the changes made there significant (We increased the total dimensions of the machine from 1,2 m to 1,5m and disassembly ability), therefore we increased the first digit value.
Then we improved out design slowly, with small iterations:
- SPR 2.1 Integrated spacer in the side frame.
- SPR 2.2 Integrated lifting point for manufacturing and assembly.
- And lately SPR 2.3 integrated CE required guards.

While we highly recommend you to use a similar system to be able to track your change, this is not mandatory. 

However, we ask you to use a **different name** when you release a machine, and **not an iteration of our numbering system**. This is to avoid confusion as it is very likely that multiple people will develop their own version simultaneously, sometimes with different advantages that are difficult to evaluate. 
For example, your machine name can:
- Include the specificity of the design (Hand crank Shredder, Solar Injection machine…)
- Include the country / region where you built it (Shredder India, extruder Texas…)
- Include your workspace name (Shredder PRO LRF, Injection sustainable studio…)
- Include an adaptation of the design (Shredder 2.1 imperial …)

## Check some good machine how-tos for some inspiration:
- [SPR - 2.3](https://community.preciousplastic.com/how-to/spr---23)
- [SHR - 2.3](https://community.preciousplastic.com/how-to/shr---33-)
- [INJ - 2.1](https://community.preciousplastic.com/how-to/inj---21-)
- [EXTPRO - 1.2 ](https://community.preciousplastic.com/how-to/extpro---12)



