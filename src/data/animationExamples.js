

export const animationExamples = [
  {
    "title": "Linear Motion",
    "text": "Linear motion, also known as rectilinear motion, is a one-dimensional motion along a straight line, and can therefore be described mathematically using only one spatial dimension. It can occur in one dimension or 'line' with a constant velocity. The motion continues in the same direction unless the object is acted upon by an external force. This is in contrast to circular motion or rotational motion where an object moves along a circular path or rotates around a central point.",
    "code": `<!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            background-color: black;
            overflow: hidden;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
      
          #square {
            background-color: red;
            width: 100px;
            height: 100px;
            position: relative;
            animation: move 4s linear infinite;
          }
      
          @keyframes move {
            0% { left: 0; }
            100% { left: 100%; }
          }
        </style>
      </head>
      <body>
        <div id="square"></div>
      </body>
      </html>
      `
  },

  {
    "title": "Easing",
    "text": `Easing in animation is a transition method that modifies motion to make it less pronounced and jarring. It lends a natural, organic movement to motion. A linear animation — one built without easing — will move mechanically without slowing down or speeding up. As this kind of consistency in speed doesn’t occur in nature, we perceive the movement as unnatural.

        Objects in real life don’t start moving and maintaining the same speed throughout — they start slowly, pick up speed and slow down as they come to a halt. These motions are reflected in the main easing functions you might come across in your animation work. They make motions feel a lot more organic.`,
    "code": `<!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              background-color: black;
              overflow: hidden;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
        
            #square {
              background-color: red;
              width: 100px;
              height: 100px;
              position: relative;
              animation: move 4s infinite;
            }
        
            @keyframes move {
              0% { left: 0; }
              25% { left: 50%; transform: translateX(-50%); }
              50% { left: 50%; transform: translateX(-50%); }
              75% { left: 100%; transform: translateX(-50%); }
              100% { left: 0; }
            }
          </style>
        </head>
        <body>
        MOOOOOOOOO
          <div id="square"></div>
        </body>
        </html>
        `
  },
  {
    "title": "Elastic Motion",
    "text": "Elastic motion, also known as spring motion, is a type of motion where an object oscillates back and forth around an equilibrium position. This type of motion is typically caused by an elastic restoring force that is proportional to the displacement and acts in the direction opposite to that of displacement. Elastic motion can be observed in various physical phenomena such as the oscillation of a spring or the vibration of a guitar string.",
    "code": `<!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          background-color: black;
          overflow: hidden;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
    
        #square {
          background-color: red;
          width: 100px;
          height: 100px;
          position: relative;
          animation: move 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }
    
        @keyframes move {
          0% { left: 0; }
          50% { left: 75%; }
          100% { left: 100%; }
        }
      </style>
    </head>
    <body>
      <div id="square"></div>
    </body>
    </html>
    `
},
{
  "title": "Sequential Motion with Offset & Delay",
  "text": "Sequential motion with offset and delay is a type of motion where multiple objects move one after the other, each starting their motion after a certain delay. This creates a cascading effect, where each object starts and ends its motion at a different time. This type of motion is commonly used in web animations to create a sense of depth and dynamism.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        background-color: black;
        overflow: hidden;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
  
      .square {
        background-color: red;
        width: 100px;
        height: 100px;
        position: relative;
        left: 0;
      }
  
      #square1 {
        animation: move 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
      }
  
      #square2 {
        animation: move 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1s infinite;
      }
  
      #square3 {
        animation: move 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) 2s infinite;
      }
  
      @keyframes move {
        0% { left: 0; }
        50% { left: 50%; }
        100% { left: 0; }
      }
    </style>
  </head>
  <body>
    <div id="square1" class="square"></div>
    <div id="square2" class="square"></div>
    <div id="square3" class="square"></div>
  </body>
  </html>
  `
},
{
  "title": "Motion with Parenting",
  "text": "Parenting in animation is a concept where one object (the child) is linked to another object (the parent), so that when the parent object moves, the child object moves with it. This is often used to create complex animations where multiple objects move together in a coordinated way. In this example, we have two rectangles. The parent rectangle shrinks while the child rectangle under it stays the same size.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        background-color: black;
        overflow: hidden;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
  
      #parent {
        background-color: red;
        width: 200px;
        height: 200px;
        position: relative;
        animation: shrink 2s linear infinite;
      }
  
      #child {
        background-color: blue;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50px;
        left: 50px;
      }
  
      @keyframes shrink {
        0% { transform: scale(1); }
        50% { transform: scale(0.5); }
        100% { transform: scale(1); }
      }
    </style>
  </head>
  <body>
    <div id="parent">
      <div id="child"></div>
    </div>
  </body>
  </html>
  `
},
{
  "title": "Transformation",
  "text": "Transformation in animation is a concept where one object morphs into another object over time. This is often used to create complex animations where an object changes its shape, size, position, or other properties. In this example, we have a square that shrinks and morphs into a circle, and then transforms back into a square.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        background-color: black;
        overflow: hidden;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
  
      #square {
        background-color: red;
        width: 200px;
        height: 200px;
        position: relative;
        animation: morph 2s linear infinite;
        border-radius: 0;
      }
  
      @keyframes morph {
        0% { transform: scale(1); border-radius: 0; }
        50% { transform: scale(0.5); border-radius: 50%; }
        100% { transform: scale(1); border-radius: 0; }
      }
    </style>
  </head>
  <body>
    <div id="square"></div>
  </body>
  </html>
  `
}, 
{
  "title": "Particle Animation",
  "text": "Particle animation is a technique in computer graphics that uses a large number of very small sprites or other graphic objects to simulate certain kinds of 'fuzzy' phenomena, which are otherwise very hard to reproduce with conventional rendering techniques. Examples of such phenomena include fire, explosions, smoke, moving water, sparks, falling leaves, clouds, fog, snow, dust, meteor tails, stars and galaxies, or abstract visual effects like glowing trails, magic spells, etc. In this example, we have a particle animation where little squares fly all over the page.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        background-color: black;
        overflow: hidden;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .particle {
        background-color: red;
        width: 10px;
        height: 10px;
        position: absolute;
        animation: move 5s linear infinite;
      }

      @keyframes move {
        0% { transform: translate(calc(100vw * var(--x)), calc(100vh * var(--y))); }
        100% { transform: translate(calc(100vw * var(--x2)), calc(100vh * var(--y2))); }
      }
    </style>
  </head>
  <body>
    <script>
      for (let i = 0; i < 100; i++) {
        let div = document.createElement('div');
        div.classList.add('particle');
        div.style.setProperty('--x', Math.random());
        div.style.setProperty('--y', Math.random());
        div.style.setProperty('--x2', Math.random());
        div.style.setProperty('--y2', Math.random());
        document.body.appendChild(div);
      }
    </script>
  </body>
  </html>
  `
},{
  "title": "Cloning Circle Animation",
  "text": "This effect demonstrates a cloning animation where one circle morphs into two circles that come back together. This can be used to create a variety of effects, such as simulating cell division, creating transitions, or simulating depth and perspective.",
  "code": `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        background-color: black;
        overflow: hidden;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #container {
        position: relative;
        width: 300px;
        height: 300px;
      }

      .circle {
        background-color: red;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50px;
        top: 50px;
        animation: clone 2s linear infinite;
      }

      @keyframes clone {
        0% { transform: translateX(0); }
        50% { transform: translateX(100px); }
        100% { transform: translateX(0); }
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div class="circle"></div>
      <div class="circle" style="animation-delay: 1s;"></div>
    </div>

    <script>
      let container = document.querySelector('#container');
      let circles = document.querySelectorAll('.circle');

      container.addEventListener('click', () => {
        circles.forEach((circle, index) => {
          setTimeout(() => {
            circle.style.transform = 'translateX(100px)';
          }, index * 1000);
        });

        setTimeout(() => {
          circles.forEach((circle, index) => {
            setTimeout(() => {
              circle.style.transform = 'translateX(0)';
            }, index * 1000);
          });
        }, 2100);
      });
    </script>
  </body>
  </html>
  `
},
{
  "title": "Partial Obscuration Animation",
  "text": "Partial obscuration animation involves creating an effect where a semi-transparent element moves in front of another shape, partially obscuring it. In this example, we will create a simple animation where a cloud with partial opacity floats in front of a sun, partially obscuring it to create a cloud covering the sun effect.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        background-color: #87CEEB; /* Sky blue background */
        overflow: hidden;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sun {
        background-color: #FFD700; /* Yellow sun */
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        top: 30%;
        left: 30%;
        animation: rotateSun 10s linear infinite;
      }

      .cloud {
        background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white cloud */
        width: 150px;
        height: 60px;
        position: absolute;
        top: 20%;
        left: 0;
        animation: moveCloud 10s linear infinite;
      }

      @keyframes rotateSun {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes moveCloud {
        0% {
          left: 0;
        }
        100% {
          left: 80%;
        }
      }
    </style>
  </head>
  <body>
    <div class="sun"></div>
    <div class="cloud"></div>
  </body>
  </html>
  `
},

{
  "title": "Dolly and Zoom 3D Scene",
  "text": "A dolly and zoom effect is used to simulate camera movement in a 3D scene. In this example, we'll create a simple 3D scene with a cube, and we'll apply dolly (move the camera closer/further) and zoom (change field of view) effects to the camera.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        background-color:black;
        width: 100%;
        margin: 0;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
      // Create a scene
      const scene = new THREE.Scene();

      // Create a camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Create a WebGLRenderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Create a cube
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Apply dolly (move camera closer/further) and zoom (change field of view) effects
      function animate() {
        requestAnimationFrame(animate);

        // Apply dolly effect (move the camera closer/further)
        camera.position.z += 0.5; // Increase or decrease for dolly effect

        // Apply zoom effect (change field of view)
        camera.fov += 0.1; // Increase or decrease for zoom effect
        camera.updateProjectionMatrix();

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      }

      animate();
    </script>
  </body>
  </html>
  `
},

{
  "title": "Floating Elements Animation",
  "text": "In this example, we'll create an animation where elements appear to float on water by applying a subtle vertical bobbing motion.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        margin: 0;
        overflow: hidden;
        height: 100vh;
        background-color: #87CEEB; /* Sky blue background */
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .floating-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .floating-element {
        width: 50px;
        height: 50px;
        background-color: #3498db;
        border-radius: 50%;
        margin: 10px;
        animation: float 3s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
    </style>
  </head>
  <body>
    <div class="floating-container">
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <!-- Add more floating elements as needed -->
    </div>
  </body>
  </html>
  `
},
 {
  "title": "3D Flip Card Animation",
  "text": "In this example, we'll create a 3D flip card effect where a shape or card flips to reveal content on the back side.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        margin: 0;
        overflow: hidden;
        height: 100vh;
        background-color: #222;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .flip-card {
        width: 200px;
        height: 300px;
        perspective: 1000px;
      }

      .flip-card-inner {
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform-style: preserve-3d;
      }

      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }

      .flip-card-front,
      .flip-card-back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3498db;
        color: white;
        font-size: 24px;
      }

      .flip-card-back {
        transform: rotateY(180deg);
      }
    </style>
  </head>
  <body>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">Front</div>
        <div class="flip-card-back">Back</div>
      </div>
    </div>
  </body>
  </html>
  `
},
{
  "title": "Gooey Effect with Floating Container",
  "text": "This example creates a gooey effect with multiple circles randomly appearing through the edges of a floating container.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        margin: 0;
        overflow: hidden;
        background-color: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .gooey-container {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: transparent;
        border: 2px solid #3498db;
        border-radius: 50%;
        animation: float 4s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% {
          transform: translate(calc(-50% + 10px), calc(-50% + 10px));
        }
        50% {
          transform: translate(calc(-50% - 10px), calc(-50% - 10px));
        }
      }

      .circle {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #e74c3c;
        border-radius: 50%;
        opacity: 0;
        animation: stretch 2s linear infinite, appear 2s linear infinite;
      }

      @keyframes stretch {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(2);
        }
      }

      @keyframes appear {
        0%, 100% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <div class="gooey-container">
      <!-- Add multiple circles inside the container -->
      <div class="circle" style="top: -10px; left: 50px;"></div>
      <div class="circle" style="top: 50px; left: -10px;"></div>
      <div class="circle" style="bottom: -10px; left: 50px;"></div>
      <div class="circle" style="top: 50px; right: -10px;"></div>
    </div>
  </body>
  </html>
  `
}
,
{
  "title": "2D to 3D Plane Transition",
  "text": "This example demonstrates a transition from a 2D flat plane to a 3D shape. We'll create a simple animation where a flat plane folds and transforms into a 3D cube.",
  "code": `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        margin: 0;
        overflow: hidden;
        background-color: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        width: 200px;
        height: 200px;
        perspective: 800px;
      }

      .plane {
        width: 100%;
        height: 100%;
        background-color: #3498db;
        transform-style: preserve-3d;
        transition: transform 2s ease-in-out;
      }

      .cube {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transform: rotateY(0deg);
      }

      .cube-face {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #e74c3c;
        opacity: 0.9;
        border: 1px solid #c0392b;
      }

      .front {
        transform: translateZ(100px);
      }

      .back {
        transform: rotateY(180deg) translateZ(100px);
      }

      .right {
        transform: rotateY(90deg) translateZ(100px);
      }

      .left {
        transform: rotateY(-90deg) translateZ(100px);
      }

      .top {
        transform: rotateX(90deg) translateZ(100px);
      }

      .bottom {
        transform: rotateX(-90deg) translateZ(100px);
      }

      .unfolded {
        transform: rotateY(180deg);
      }
    </style>
  </head>
  <body>
    <div class="container" id="container">
      <div class="plane" id="plane">
        <div class="cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face right"></div>
          <div class="cube-face left"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </div>
    </div>

    <script>
      const container = document.getElementById('container');
      const plane = document.getElementById('plane');

      plane.addEventListener('click', () => {
        plane.classList.toggle('unfolded');
      });
    </script>
  </body>
  </html>
  `
},















]