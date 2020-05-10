---
id: components
title: Overview of components
sidebar_label: components
---


<style>
:root {
  --highlight: #f29094;
  --hover: #f29094;

}
</style>

# Overview of components (draft 1.1)


### Electronics

| Component                                                                                      | Name                                                                                                              | Used in                                       | Buy                     | Learn more                                                                         |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| <img src="../assets/Build/components/cartridge-heater.png" width="100" />     | __Cartridge heater__ <br> Used to heat the aluminium blocks in the sheetpress                               | Sheetpress                                    | online, online          | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/pid-photo.png" width="100" />            | __PID controller__ <br> Measures the temperature from thermocouples and uses it to turn on heating elements | Extruders, injection, sheetpress, compression | online, online          | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/thermocouple.png" width="100" />         | __Thermocouple (type K)__ <br> Measures the temperature and send it to the PID                              | Extruders, injection, sheetpress, compression | online, online          | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/plug-32.png" width="100" />              | __3 Phase Plug__ <br> Connects the powercord with the wall socket                                           | Extruders, Shredders, injection, sheetpress   | hardware store, online  |                                                                                    |
| <img src="../assets/Build/components/relais.png" width="100" />               | __Relais__ <br> Uses a low output from the PID controller and Arduino to switch high current (230V)         | Shredders, Extruder Pro, Sheetpress           | electronic shop, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/ssr.png" width="100" />                  | __Solid state Relais__ <br> Uses the low (5V) output from the PID controller to switch heating elements     | Extruders, injection, sheetpress, compression | online, online          | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/band-heater-small.png" width="100" />    | __Heatbands small__ <br> Used the heat up the barrel                                                        | Extruder, injection                           | online, online          | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/band-heater-large.png" width="100" />    | __Heatbands large__ <br> Used the heat up the barrel                                                        | Extruder Pro                                  | online, online          | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/frequency-controller.png" width="100" /> | __Frequency Controller__ <br> Control the speed of motor                                                    | Extruder Pro, optionally extruder             | online, online          | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |


### Mechanics
| Component                                                                                    | Name                                                                                                            | Used in                           | Buy            | Learn more                                                                         |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| <img src="../assets/Build/components/motor-shredder.png" width="100" />     | __Motor Shredder__<br> Powers the shredder                                                            | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/motor-extruder.png" width="100" />     | __Motor Extruder__<br> Motor that powers the extruder                                                 | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/motor-shredder-pro.png" width="100" /> | __Motor Shredder Pro__<br> Big motor that powers the shredder Pro                                     | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/motor-extruder-pro.png" width="100" /> | __Motor Extruder Pro__<br> Big motor that powers the extruder Pro                                     | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/screw_auger.png" width="100" />        | __Wood auger__<br> Screw inside the extrusion barrel                                                  | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/screw.png" width="100" />              | __Compression screw small__ <br> Screw that can be optionally used in the extrusion to give more pressure | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/screw_pro.png" width="100" />          | __Compression screw large__ <br> Screw used inside the barrel of the Extruder Pro                         | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/bearing.png" width="100" />            | __Bearing small__ <br> UCFL 204 bearings used to make things runs smooth                                  | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
| <img src="../assets/Build/components/bearing_pro.png" width="100" />        | __Bearing large__ <br> UCFL 209 bearings used to for heavy duty                                           | Extruder Pro, optionally extruder | online, online | [forums](https://davehakkens.nl/community/forums/topic/the-big-electronics-topic/) |
