---
id: extrusionprorun
title: Build an extrusion Pro
sidebar_label: - Run it
---

<style>
:root {
  --highlight: #f29094;
  --hover: #f29094;
}
</style>

![Shredder](assets/build/extruderpro-run.jpg)

# Run and Maintain the Extrusion Pro
Hooray! You build yourself an Extruder Pro! Let's have some fun and make some beams and bricks. .Below we explain how to do this, which temperatures to use, how the workflow should be etc.  But also the practical things to take in account like maintenance.

## 🏃‍♀️ Extruder some Plastic

### How to Start

1. Turn on the main switch
2. Select the desired temperature on the 3 PIDs
3. Pour the plastic inside the hopper
4. Wait until you reach the desired temperature (around 15/20 min)
5. Put your mask / put ventilation on
6. Turn on the motor at slow speed to check for plastic flow
7. <i>(optional)</i> If you change the material from the previous session, you need to clean the barrel from old plastics by letting it run until the old plastic is replaced by the new one.
8. The machine is now ready for production.

### Production

1. If a mould is required for the desired product, attach it to the nozzle
2. The flow can be adjusted by increasing or decreasing the speed on the VFD (0 to 50/60HZ)
3. You can start and press run on the VFD
4. Keep enough plastic flakes in the hopper while extruding to reduce chances of bubbles in the extruded plastic.

# 👌 Tips & tricks while using

Before setting up your mold, check the nozzle to see if the plastic looks homogeneous, fluid and check the viscosity and color.

If you change plastic let the machine run for a minute to make sure the barrel is clean from the previous plastic type.

Shredded flakes smaller than 7 mm and rounded feed through the hopper very well. Longer and thinner flakes tend to stay stuck in the hopper. You can either granulate them to smaller grains or install a hopper vibrator to improve the feeding. Plastic granules generally allow for better feeding.

No plastic exiting the nozzle and abnormally high temperature readings means that a lot of friction is happening in the barrel and that the pressure is rising. Immediately shut off the machine as there is probably a clog somewhere preventing the plastic to flow out.

### ⚠️ Always be careful and use suitable gloves when handling hot plastic!

Make sure there is always plenty of plastic in the hopper. you can hear a high-pitched squeak noise or metal on metal rubbing sounds if the barrel is empty. In that case, refill the hopper of stop extrusion to prevent excess wear.

# ⏳ Maintain

The extruder is a simple and robust machine. However, if you wish to keep it for a long time, we will now give you a few maintenance tips for your machine:

### Bearing lubrication

Make sure there is plenty of grease in the bearing housing. You can add a little grease with the greasing nozzle every month to make sure they are always well lubricated.

### Gear box lubrification

Depending on the type, the gear unit can be lubricated with grease or oil. Each gear unit is equipped with a lubrication plate. Check and follow the maintenance instructions from your motor and gearbox supplier.

### Barrel maintenance

Your barrel is made out of mild steel, and designed to be easy to build. You’ll want to avoid rust from getting on the inner part of the barrel. Letting the plastic cool down inside the barrel will prevent rust in the barrel. If you don’t use it for a long time, you can add a little silicon oil after having emptied plastic from the barrel to avoid rust. The screw is hardened and expected to last longer then the barrel. Make a new barrel if required.

### Check the tightening torque of the screws

Frequently check the tightening torque of the screws (coupler,motor adaptor etc) of the extruder.

# 🔓 Troubleshooting

### 2 heating elements stopped working together

If you notice that 2 heating elements wired together are not working anymore, chances are that your Solid State Relay (SSR) is the problem. Open the electronics box and verify that the wires are well connected. If the wiring is good and the LED light doesn’t turn ON on the relay, you probably need to change it.

If you change it and it still doesn’t work with the new Solid State Relay, you need to change your PID controller.

### A heating element stopped working

If you notice that a heating element is not working anymore, open the electronics box and verify that the wires are well connected and that the SSR connected to it has his LED working when you start your extruder. If you  checked that, the problem is therefore the heating collar and you need to change it.

The heating collars may stop working if you bend them out of shape too much, be careful when putting them in or removing them from the barrel.
Also don’t go over the maximum temperature of the heating collar.

### Engine overheating

If you notice your engine overheating, test your motor in a warm surrounding environment or let it run for a long time on low speed ( <20 Hz). If the motor fan is then not sufficient to cool it an additional fan should be installed at the top of the motor.

### Extrusion Screw doesn’t turn

An overload of the motor is often the main cause of a motor malfunction. Checking the error message on the VFD will guide you to the reasons for the shutdown ( In the case of the bosch rexroth efc 5610 and a converter overload there will be the code OL-1)

You can also check the conformity of the connection on the terminal plate, depending on your connection to the mains, you must connect your three-phase motor in Delta or Star mode. It affects the torque that the motor provides. Check the tightening torque of the extrusion screw coupler also if the shaft is turning and not the extrusion screw.

It can be also the plastic you put in the hopper that didn’t melt enough and is still solid or has a too low MFI to be used by the machine.

### Foreign object in the hopper

If  something falls in the hopper and blocks the screw, you should try to slowly reverse the motor : You can reverse the direction of the motor by physically swapping any two motor phases. Or by changing the frequency driver parameters.

Be careful not to drop metal parts in the hopper. You can remove magnetic objects from your shredded plastic by probing with a magnet. Remove the barrel to take out any debris is necessary.

### Output plastic not uniform

The most common problem with the extrusion is having an output that is not uniform. There are a few reasons why this could happen :

1. Dirty plastic may have clogged the nozzle making it difficult for the clean plastic to get out.
2. Two different types of plastic are mixed together, common causes for this can be contamination in the sorting stage or plastic left in the barrel from previous activity. In this case, one plastic type melts while the other doesn’t and obstructs the plastic flowing through the nozzle.
3. The temperature is not high enough and the plastic in the barrel does not manage to fully melt.
4. You can solve the above problems by checking the integrity and purity of the raw material or by raising the temperature. Upon adjusting your process make sure to empty the entire barrel before attempting to make a new product.
