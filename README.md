3UI lets you create interactive 3D elements to make your website a little more fun. It's currently made for beginner developers building websites with HTML, CSS, and Javascript. 3UI's elements dynamically react to different sized divs, or containers as I'll call them here. 3UI uses three.js to render scenes, I encourage you to take a look at three.js's official documentation if you want to understand what's going on under the hood.
https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

**How To Use:**

Creating these interactive elements can be done in 3 steps:
1) Create a shape with one of the shape functions. Currently, 3UI supports three shapes: Cube, Sphere, and Diamond
2) Create a scene with the Scene function
3) Render the scene with the createScene function

**Full Documentation**

This is my first time attempting any sort of docs, please bear with me. I'll also be copy pasting some lines directly from three.js's official documentation, so again I encourage you to take a look if you want to understand what's happening.

**Cube(color: hexadecimal number, wireframe: boolean)**

Returns a Mesh object that looks like a cube.

color - Hexadecimal number representing the color of the shape. Default is 0xff0000 (red)

wireframe - Render geometry as wireframe. Default is false (i.e. render as flat polygons).



**Sphere(color: hexadecimal number, wireframe: boolean)**

Returns a Mesh object that looks like a sphere.

color - Hexadecimal number representing the color of the shape. Default is 0xff0000 (red)

wireframe - Render geometry as wireframe. Default is false (i.e. render as flat polygons).


**Diamond(color: hexadecimal number, wireframe: boolean)**

Returns a Mesh object that looks like a diamond.

color - Hexadecimal number representing the color of the shape. Default is 0xff0000 (red)

wireframe - Render geometry as wireframe. Default is false (i.e. render as flat polygons).



**Scene(color: hexadecimal number)**

Returns a Scene object that makes up the background of the render.

color - Hexadecimal number representing the background color of the scene. Default is 0xffffff (white)


**createScene(shape: object, scene: object, id: string)**

Renders a shape and scene and fits them into a container.

shape - Mesh object representing your shape

scene - Scene object representing your background color
id - string representing the id property of the container interface representing the container's identifier, reflecting the id global attribute

**Example Code**

The following code creates a red cube on a white background contained in a div with the id "animation-container"

```
import * as ThreeUI from "3ui-aleguy02"

const shape = ThreeUI.Cube()
const scene = ThreeUI.Scene()
ThreeUI.createScene(shape, scene, "animation-container")
```
