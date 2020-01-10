---
id: extrusion
title: Build an Extrusion Machine
sidebar_label: Extrusion
---

<div class="videocontainer">
  <iframe width="800" height="400" src="https://www.youtube.com/embed/p4NoY33-Tfo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>
:root {
  --highlight: #f29094;
  --hover: #f29094;
}
</style>


<div class="videoChapters">
<div class="videoChaptersMain">

# Build an Extrusion Machine

### What is this machine?

Extrusion is a continuous process where shredded plastic enters the hopper, heated and pressed with a screw through a long barrel. The output is a steady line of plastic, and as this machine runs continuously, if you have enough plastic and a well-streamlined process you could (technically) be recycling 24/7 🎉

> Pro-tip: to increase efficiency and diversity we recommend to [upgrade the extruder](https://www.youtube.com/watch?v=zNGuuSKE1pY) with the compression screw.

</div>
<div class="videoChaptersSidebar">

### Video Chapters

- 00:00 Introduction
- 00:46 Hopper
- 02:22 Barrel
- 04:48 Nozzle
- 07:05 Barrel holder
- 08:44 Framework
- 10:43 Electronics
- 15:03 How it works



</div>
</div>


With this machine you can create filament (challenging but doable), granulate or get creative and spin this continuous line around a mould, and is great for educational purposes as the process is very straightforward and easy to understand. When plastic is extruded it nicely blends different colours together and produces a homogenous and clean colour.

# 📓 Technical information
📓 Type | Extrusion Machine
--- | ---
💎 Version | 2.0
💰 Price new material in NL | +/- €500 + motor
💰 Price scrap material in NL | +/- €200
⚖️ Weight | 35 kg
📦 Dimensions | 500 x 1020 x 1120 mm
⚙️ Screw size | 26 x 600 mm wood auger
⏱ Max running time | 4H/Day
🔌 Voltage | 380V    
⚡️ AMP | 5.8A
♻️ Input Flake Size | Medium, Small  
- Motor | Hollow shaft, 30mm
- Nominal Power | 2.2 kW minimum. 3 kW recommended
- Nominal Torque | 109 Nm
- Output Speed | 40-140 r/min
- Minimum Service Factor | 1,5 (2,2kW) / 1,2 (3kW)

![Extrusion v3](assets/build/extrusionv3.jpg)

# 🌐 3D Model
<iframe width="500" height="500" src="https://b2b.partcommunity.com/community/partcloud/embedded.html?route=embedded-viewer&name=Extrusion+Basic+V2.0&model_id=96651&portal=b2b&noAutoload=true&autoRotate=false&hideMenu=true&topColor=%23FFFFFF&bottomColor=%23ffffff&cameraParams=false&varsettransfer=" frameborder="0" id="EmbeddedView-Iframe-96651" allowfullscreen></iframe>


# 🛠 Required machinery & skills
Build Extrusion  | Machines needed | Skills needed
--- | ---| ---
<img style="margin-left: 0;" src="../assets/build/thumb-extrusion.jpg" width="100"/>  | - Drill press <br> - Welding machine (not specific) <br> - Angle grinder | - Welding (intermediate) <br> - Assembling (intermediate) <br> - Electronics (intermediate)


# ⚡️ Electronic box
Explanation of the electric components inside this machine. More information and schematics can be found in the download-kit.

* <b>PID Controller:</b> the brains of the machine where you can set your desired temperatures. It will send power to the heaters until PV (point variable) matches the SV (set value). It does this using readings from the thermocouple and the SSR.
*  <b>SSR:</b> the Solid State Relay is an electronic ‘switch’ that opens and closes depending on the signal it receives (from the PID).
* <b>Thermocouple:</b> basically a thermometer.
* <b>Band heater:</b> heating element that fits around a pipe.
* <b>Power switch:</b> mechanical switch.
* <b>LED indicator:</b> LED that will shine with power (often found with Power switch).
* <b>Power cable:</b> common household power cable.

> Pro-tip: Here is a [good forum topic about electronics](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/)


# 🛠 Tips & tricks while making
- Alignment of the motor and couplings is key, any misalignment could cause future wear and tear. To do this we recommend drilling holes into the plates and attaching them to the motor. Align and then weld the plate in position to the frame.
- Any bolts used should be used in tandem with locking nuts to prevent them from loosening over time.
- When choosing a gearing system bear in mind that the extrusion screw applies lateral pressure into the gearbox. Avoid using linear systems that don't have a back plate such as motors found in garden mulchers.  
- Choose bearings that can handle directional load (such as a tapered bearing)
- Installing a VFD with this machine makes using it a dream.


# ♻️ Input & Output
<b>Type:</b> HDPE, LDPE, PP, PS<br>
<b>Flake size:</b> <5mm
<b>Output:</b> Depends on nozzle, ±5 kg/h<br>


# ⚙️ Run & maintain
You can set the temperature from the controllers on the electronic box. The heating elements are wired into two groups - nozzle and barrel are marked on top of the controllers. The first three elements (barrel) should be set at a slightly lower temperature than the last one near the nozzle. This is to make sure the plastic gets a last boost of heat right before it comes out. Below you can see a diagram with the best settings for this machine based on our experiments (tip: you could your own to see what works best for you). The optimal temperatures below are drawn using a motor turning at 70rmp. If your motor turns faster you would need higher temperature as the plastic flows faster through the barrel and has less time to melt, vice-versa if the motor is slower.
> Pro-tip: Make a stand for your output/mould to stabilize it and make your life easier.


### How to operate the extruder                
1. Heat the machine to the desired temperature.                    
2. Wait 20 minutes.                            
3. Add desired plastic in the hopper.                            
4. Turn on the motor.                             
5. The material that comes out of the machine for the first 2 minutes is to clean the machine from old plastics from previous sessions.               
6. The machine is now ready for production!



# 🔓 Troubleshooting
- PID settings for K-Type - Change to J-Type (Ask vincent)
- Machine Jams? Change the poles in motor wiring to reverse.

- The most common problem with the extrusion is having an output that is not uniform. There are a few reasons why this could happen:    
1. The plastic can be dirty, clogging the nozzle and making it difficult for the plastic to get out.
2. Two different types of plastic are mixed together, common causes for this can be contamination in the sorting stage or plastic left in the barrel from previous activity. In this case, one plastic type melts while the other doesn’t obstructing the plastic flowing through the nozzle.
3. The temperature is not high enough and the plastic in the barrel does not manage to fully melt.                            
4. You can solve the above problems by checking the integrity and purity of the raw material or by raising the temperature. Upon adjusting your process make sure to empty the entire barrel before attempting to make a new product

# 🌦 Pros & cons
Pros | Cons
--- | ---
Continuous output     | Complex to build
Relatively cheap | Not built to run long
Large products possible |  Output is low
User Friendly |

# 🌎 Built by the community

<div class="j-slideshow">

![Community Extrusion](assets/Build/community/community_extrusion.jpg)

![Community Extrusion](assets/Build/community/deskfactory.jpg)

![Community Extrusion](assets/Build/community/machinehack-ppukraine.jpg)

![Community Extrusion](assets/Build/community/machines-inajason.jpg)

![Community Extrusion](assets/Build/community/tableextrusion.jpg)

</div>

# 🙌 Useful Links
- [Shredder & Extruder - Industrial Electronics ](https://davehakkens.nl/community/forums/topic/shredder-and-extrusion-industrial-electronics-2/)<br>
- [Extrusion Beam Tests](https://davehakkens.nl/community/forums/topic/bean-extrusion-optimization/#post-131338)<br>
- [V4 Beam Production](https://davehakkens.nl/community/forums/topic/beam-production-v4/)<br>
- [V4 Extrusion Products](https://davehakkens.nl/community/forums/topic/extrusion-machine-products-v4/)<br>
- [V4 Tubes & Profiles](https://davehakkens.nl/community/forums/topic/v4-extrusion-tubes-and-profiles/)<br>
- [V4 Extrusion Moulds](https://davehakkens.nl/community/forums/topic/extrusion-moulds-v4/)<br>
- [How-to: Beam Mould](https://community.preciousplastic.com/how-to/make-a-mould-to-extrude-beams)<br>
- [How-to: Flat Nozzle](https://community.preciousplastic.com/how-to/make-a-flat-nozzle-for-the-extrusion-machine)<br>
- [How-to: Different Textures](https://community.preciousplastic.com/how-to/extrude-different-textures)<br>
- [How-to: Bench](https://community.preciousplastic.com/how-to/make-a-bench-with-beams)<br>
- [How-to: Shelf](https://community.preciousplastic.com/how-to/build-a-shelving-system)<br>
- [How-to: Glass Beams](https://community.preciousplastic.com/how-to/make-glasslike-beams)<br>



**If you need help, have questions or looking for someone to talk to in your lonely cold workspace. Head to the [#build](https://discordapp.com/invite/XQDmQVT) channel on Discord. Here we talk nerdy about machines.**
