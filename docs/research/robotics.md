---
id: robotics
title: Robotic sorting
sidebar_label: 🚫 Robotic sorting
---
<div class="videocontainer">
  <iframe width="800" height="400" src="https://www.youtube.com/embed/NpEaa2P7qZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>
:root {
  --highlight: #798bc5;
  --hover: #798bc5;
}
</style>

# Robotic Sorting

<div class="videoChapters">
<div class="videoChaptersMain">

Sorting plastic remains one of the most difficult aspects of the plastic recycling and processing chain. As we learnt in the Plastic section, there are different types of plastic - some unmarked and with similar properties - which is difficult to differentiate on our own. So we did what anyone else would do, we turned to robots. 

Robotics for sorting and scanning is a very experimental project at Precious Plastic, it’s more like an ongoing research project to find out if we can optimise sorting. There’s two parts to this research: working with a robot to pick the products, as well as a scanner to see if we can easily identify the type of plastic that it is.

`Pro: This is something to remember.`


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

## First, let's welcome Bradford, and One Arm!

<img style="margin-left: 0; margin-top: 40px; margin-bottom: 40px" src="../assets/gif/robot.gif" width="500"/>

For a robotic system like this one to pick and sort plastic you need three things: 

- An arm, to pick the plastic up
- Sensors (or eyes), to know where the plastic is
- A brain, that’s programmed to make decisions based on chosen parameters 

Sounds simple, right? Each component has their own set of unique challenges, including getting them all to work together as a unit. Many robotic systems that are provided by companies come with their own operating systems, but these are closed systems (and we like open-source!) so, we went with a system called Robotic Operating System (or ROS). ROS creates this whole framework that allows each part - arms, sensors, brains - to send messages to each other to function properly. The ROS framework is entirely modular (🎉) so you can swap out different components or algorithms. 

## The Sensor

The robot needs a sensor so it can understand what’s going on in front of it. In the case of the Precious Plastic One Arm Robot, we use a 3D camera, it takes infrared depth data, and combines it with a regular 2D image and that creates a 3D world (check out the video to see it in action!) but while it looks cool, you might not need a fancy 3D camera for the sensor to recognize objects. You could use a 2D camera and achieve similar goals. 

## The Brain

Ok, so there’s a lot of data coming in from the sensor but the arm doesn’t know what to do with it yet. On our computer screen we can see there are plastic objects on the belt, identified by groups of pixels. 

Here you can see on the left the rendering of the plastic on the belt, and on the right  we can pull the resolution right down to make it super easy to recognize objects:

![Robotic Belt](assets/roboticbelt1.png)

On the top view, we can remove the belt and so it’s easier to focus on specific objects (left) and then with the clusters that are left, the brain identifies them as unique objects (right).

![Robotic Belt](assets/roboticbelt2.png)

With our unique objects identified, the brain can then analyse the centre point of the object (which is also the “pick point” for the arm) and using some inbuilt backend ROS technology can define a pathway - once it picks up an object, where it goes after that.

## The Arm (the action stage)
So we bought a second-hand industrial robot, which was not that cheap (but every year they are getting cheaper and easier to find), ours has a 1.5m reach and a 10kg payload capacity. It operates on a 6-axis, it’s not going to win any awards for speed but we chose this because _____. We also use a vacuum-gripper, like a mini vacuum cleaner pipe to suck and hold objects and blow it out to release it. 

<img style="margin-left: 0; margin-top: 40px; margin-bottom: 40px" src="../assets/gif/suck_small.gif" width="500"/>

Another key part of this stage is how the plastic is delivered to the system and implementing a conveyor belt would make this an entirely autonomous loop of plastic recycling 🎉🎉🎉

So what’s next? One Arm is picking up and dropping off plastic, it knows where to go - a great result! From here we’ll be improving the suck and blow gripper and thinking about installing a conveyer belt. If you want to learn more about this research project, <a href="url">visit the forums</a> and discuss plastic sorting. We’re also going to post our segmenting code on Github to see if anyone wants to improve on it (you?)

< end of robot >

# Ok, but how does it know what is HDPE and what is PS?

That's a great question! Another very important part to making this work is to actually identify what type of plastic it is. A robot is smart, but unfortunately it's not smart enough own it's own (probably a good thing) to identify different materials. This is where our friend Alejandro comes in and talks to us about the Scanner. 

As we have learnt already there are 7 major types of plastic, but there is still a lot of plastic that is unmarked, degraded or shredded, so using the marking isn’t going to be accurate enough. Another approach uses spectroscopy, which is the ongoing study of the interaction between matter and electromagnetic radiation. But this is rather complex, so something that we can use is optical spectroscopy which is much more achievable and accessible.

![Spectroscopy](assets/spectroscopy.png)


Riiiiiight. So how does it work? Well, it’s pretty simple: you throw light at objects, and depending on the response, it will categorise the object - every plastic type has a kind of fingerprint. There are a few options we have to do this:

The first is <i>near-infrared spectroscopy</i>, which uses wavelengths close to the infrared spectra. We have some research going on in the forums about this, but the problem with this way is that is has difficulty with thick plastics, coloured plastics and microplastics. And there is quite a lot of that :/  

The other option we have is <i>raman spectroscopy</i>, which is more complex but if it’s done correctly, the results are great: we can be precise at identifying plastic, get more information about colours, you can see any contamination with other materials as well as receive information on degradation of the plastic - this method is used widely by large industrial recyclers. Wow, that’s amazing! But wait, there’s even more: with this method we can even use it with microplastic and in water streams 🤯

The possibilities are really exciting with raman spectroscopy, and so that’s why we decided to break our heads with it. And of course, all of the research is available open source online for free. So let’s get into it!

The relationship between material and light has been studied for a long time. In 1930, Indian physicist C. V. Raman was awarded the Nobel Prize for his contribution to this field. And those in the field have learnt a lot since then. For example, we’ve learnt that when you throw light at an object, some molecules gain energy and some lose energy, and this is a great way to identify plastic.

<img style="margin-left: 0; margin-top: 40px; margin-bottom: 40px" src="../assets/raman.png" width="500"/>

Before we go further, some respects to be paid. At Precious Plastic we’re pretty resourceful, we like making and fixing things, developing machines. But this experimental research into using raman spectroscopy wouldn’t be possible without the work of C.V. Raman (obviously) and to all the scientists and researchers out there who publish their findings online open source. We couldn’t do it without you (please keep going!) 

So with all of this information out there, Alejandro has been working on a prototype for a sensor that can be used all around the world so we can tackle this problem together 💪

First things first. Optical equipment is very sensitive to dust so to work with it you will need to have a very clean environment  - need help on building a clean space? Head to the forums to learn how to build one with a box, some 3D printed parts and bits from a vacuum cleaner.

So let’s dive in! The system is composed of two main stages, the excitation stage and the spectrograph stage. 

![Scanner](assets/scanner.png)

The excitation stage is so we can direct a light source into the material we are trying to identify and direct its response into the spectrograph. In order to measure the energy shift in molecules we need to provide a known wavelength light source, and this is our first component in the spectrograph. Then we use a beam splitter to direct that light into a microscope lens where we can concentrate photons onto a tiny spot so they interact with our unknown plastic. The same microscope lens is used to capture the response from the material. Since the molecules inside a material that presents raman effect are low (compared to the ones that remain in the same energy level), we need to filter out the original signal so that we are able to see the actual response. 

For the spectrograph stage we are using a ______ configuration. This is where the light will be spread into all of its different components, ready to be collected and digitised by the sensor so we can compare and identify. The light enters the entrance component - the purpose of this part is to restrict light access so we only get the material response and nothing else. Then the first mirror is used to colonnade the light to a diffraction grading, with a function similar to a prism, so we can record every wavelength of the response. Then a second mirror is used to focus the light spectra into a CCD array where we can capture the signal and transfer it to a computer for further analysis. 

With this set up it is possible to exide molecules and measure their response, and then transfer the information to a computer for further analysis. Wow, thank you Alejandro (and glad you didn’t break your head too much!) - the Precious Plastic scanner is still very much a work in progress, but what’s exciting are the capabilities and possibilities of the system, and all of our research and learning along the way. Keen to learn more? <a href="url">Head to the forums.</a>


