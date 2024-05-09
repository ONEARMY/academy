---
id: shredderprorun
title: Run a Shredder Pro
sidebar_label: - Run it
---
<style>
:root {
  --highlight: #f29094;
  --hover: #f29094;
}
</style>

![Shredder](assets/build/shredderpro-run1.jpg)

# Run and Maintain the Shredder Pro
Congrats, you've built a Shredder Pro! Time to chop some plastic. Below we explain how to do this, the settings to use, and an ideal workflow.  Remember that maintenance is also important!

## 🏃‍♀️ Time to shred some plastic!

### How to Start

1. With the main switch off, the emergency stops off, and the direction switch in the stop position plug in the shredder (if it was not plugged in) to a 16A three-phase plug.
2. Check that the hopper and the sieve (if it is needed) are mounted properly.
3. Check the hopper is empty of parts that could damage the machine.
4. Turn on the main switch, then the display will turn on.
5. If the display reads “READY”, turn on the emergency stop.
6. Run the shredder in reverse mode for a few seconds to check everything works properly. The display should show “REVERSING”.
7. Run the shredder in shredding/forward mode. The display should show “SHREDDING”.
8. The machine is ready to use.

>If you hear or see something unexpected, stop the machine immediately and check what the issue is. The machine has enough power to damage the components by itself if they are not assembled properly.

### Pour plastic

The output of the shredder depends on, among other things, the shape of the plastic. CD cases, sheets, bottle caps, extrusion/injection leftovers… are easy to shred. Round shapes or big pieces are hard for the blades to grab. To increase the productivity of the shredder, try to pour the plastic in a way that the shredder can grab it. For example, for most of the bottles, a good way is to pour them upside down, so they can be grabbed from the nozzle.

For a second shred, just fill the hopper with the shredded plastic.

### Run

Depending on the motor’s power, you may need to check the load of the motor (shown on the display while the machine is shredding). The motor load also depends on the material, shape, and thickness of the pieces to be shred.

For example, PS CD Cases (brittle plastic) don’t require much power. Big bottles of HDPE (elastic-plastic) require much more power.

Depending on your motor, you may be running at different nominal power / amperage. Make sure that you always run your motor under its rated amperage on average. If your motor is under dimensioned for the work and your shredding amperage is above its rated power, ensure enough break time to let it cool down.

During the shredding process, we recommend keeping an eye on the temperature of the blades, bearings, box, and motor with a temperature gun. The temperature will depend on the load of the motor and the running time. Stop the machine if the temperature of the blades exceeds 90 ºC or your plastic will start melting. The other components shouldn’t heat up too much unless you're doing very intense shredding or the weather is fairly hot. Check manufacturer recommended temperature, but in general don’t let other components go over 55°C.

### Deep clean

It is recommended to do the following cleaning steps if you are going to change the material. It is not necessary to clean if you change the color but not material type (as always, this depends on your desired output).

1. Before cleaning the machine, push the emergency stop and turn off the main switch.
2. Remove the sieve (if it is mounted).
3. Remove the hopper.
4. Remove the top plate of the box.
5. Remove the fixed blades.
6. Clean between the blades. The bottom of the machine has to be cleaned as well.
7. Clean the hopper, fixed blades, sieve and the interior of the box.
8. Mount the fixed blades, top plate, hopper and sieve (if required).

### Change the material or color to shred

Shredding plastic of the same material and color is recommended. If you want to change the material or color, you will need to clean the machine. Follow the steps about “Deep clean”.
If you want to change only the color, but you don’t mind if there are some flakes with a different color, you could clean the shredder, lightly, with a brush and a flat screwdriver to remove the plastic between the static blades.

# 🔓 Troubleshooting
Arduino or the display doesn’t works properly

1. Check the wiring.
2. Connect the arduino board to a computer and upload the code. Set up the code.

# ⏳ Maintain

### Before starting

Check the oil level of the motor gearbox. Usually, the quantity of oil depends on the mount position of the motor. Check the manufacturer's instructions.

Ensure bearing and gears are greased properly.

![Shredder](assets/build/shredderpro-maintain.jpg)

### Weekly

- Deep clean the shredder
- Once you remove all the blade, inspect both fixed and moving blade : they should not have any scratches. If you see scratches, dismantle the shredder and sand / sharpen damaged blades.
- Check for plastic stuck in between blade. If this is the case, disassemble the axis, clean blade and reassemble.

### Monthly

- Disassemble gears, clean them and reassemble with new grease.
- Inspect bearings looking for any cracks and add extra grease if needed.
- Disassemble the box, sand or sharpen damaged part and oil all plates. If teeth are too damaged, replace them. We recommend ordering extra blades to allow this maintenance easily.
- Depending on the coupling that the machine uses, you may need to replace some rubber components. Check the manufacturer’s instructions.
- Check the paint, and repaint damage to prevent long term corrosion issues.

<p class="note">Are you interested to connect with the Precious Plastic community? Perhaps you want to learn more or share your own knowledge. Well you're in luck! We have created a <a href="https://community.preciousplastic.com/questions">Questions</a> section for the community to collaborate. Now if you want to chat with people locally and globally, check out the [Discord](https://discord.gg/gwkbpsWbAB).</p>

