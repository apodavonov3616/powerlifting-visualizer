# Powerlifting Visualizer
This is a powerlifting website that teaches proper form and muscular utilization during powerlifting movements.
[Visit Live Site](https://apodavonov3616.github.io/powerlifting-visualizer/)

![squat](squat-trim.gif)

This app was created to teach lifting techniques on the three powerlifting movements: squat, bench, and deadlift. 
As a powerlifter, I have extensive knowledge on the sport and have created both the images and the data. 
Unlike bodybuilding, which focuses on appearance above all else, powerlifting focuses on strength above all else. 
Using the interactive demo, you can progress through different points in the lift to know exactly how to lift heavy weights. 
I've noted useful tips to think about during the exercise and my chart represents utilization/exertion of various muscles at 
the different points in the lift. For example, when it comes to the squat, most muscles are all worked hardest at the bottom of
the lift and my data shows that. However, contraction is not uniform throughout the whole lift so my data shows how much you should
activating each muscle group to produce the best results for lifting lots of weight. 

![bench](bench-trim.gif)


## In the Powerlifting Visualizer, users will be able to:
- Click on squat, bench, and deadlift sections in order to go to each of the three lifts
- Click through different stages of the lift with the back and next buttons, changing 
the information that gets rendered: picture, tip, and chart data.
- Hover over the picture to see the tips recommended at the current portion of the lift

![deadlift](deadlift-trim.gif)

## Key Pointers in Code

Whenever the exercise (ie. squat, bench, deadlift) option was clicked, that class connected to the 
exercise rendered the first portion of a movement. The source of the image that is rendered on canvas
also changed, causing the image on the website to change as well. Initially, the first tip is saved as a
variable, and that variable changes based upon the current exercise and phase of exercise. 

![image-2](powerlifting-visualizer-image-2.png)

Once the next or last button is clicked, it prompts the class associated with the current lift to change its
current image number and using ```%``` allows each button to be clicked indefinitely. Additionally, I passed
this.ctx in order to not lose access to the canvas when creating the new photo.

![image-1](powerlifting-visualizer-image-1.png)

## Technologies:
This demo utilizes ```vanilla javascript```, ```HTML```, ```CSS```, ```D3.js```, ```webpack```, and ```canvas```. The data and images were created by myself.
