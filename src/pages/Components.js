import React, { useEffect } from 'react';
import './Components.css';

const Components = () => {
  useEffect(() => {
    const title = document.querySelector('.components-title');
    title.classList.add('animate-title');
  }, []);

  return (
    <section id="components" className="components-container">
      <h2 className="components-title">Components</h2>
      <p className="components-description">
        Explore the amazing components of the Eco-Vend vending machine system, designed to promote recycling and reward students.
      </p>

      <p className="compolist">Here is all the lists of the Components and Apps that used in our Project:</p>

      <div className="components-photos-container">
        <div className="component-item">
          <img 
            src="https://www.sparkfun.com/media/catalog/product/cache/a793f13fd3d678cea13d28206895ba0c/1/1/11026-Jumper_Wires_Standard_7in._M_M_-_30_AWG__30_Pack_-01.jpg" 
            className="component-img"
          />
          <h3 className="component-name">Jumper wires (generic)</h3>
          <p className="component-details"></p>
        </div>


        <div className="component-item">
          <img 
            src="https://microless.com/cdn/products/c8174e071162ec234c21728a06b2c39a-hi.jpg" 
             
            className="component-img"
          />
          <h3 className="component-name">GPS Module (Generic)</h3>
          <p className="component-details"></p>
        </div>


        <div className="component-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYDktGTSNAjGqxwIzCSGNHVgVgYiBikbX-Q&s" 
            
            className="component-img"
          />
          <h3 className="component-name">Inductive Proximity Sensor, 15 mm</h3>
          <p className="component-details"></p>
        </div>


        <div className="component-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UVRCvegU9OguILiVU6JP2ozOCCW-KjY3TQ&s" 
             
            className="component-img"
          />
          <h3 className="component-name">Single Turn Potentiometer- 100k ohms</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F6173097-01?pgw=1" 
             
            className="component-img"
          />
          <h3 className="component-name">Buzzer, Piezo</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://www.sparkfun.com/media/catalog/product/cache/a793f13fd3d678cea13d28206895ba0c/1/5/15569-Ultrasonic_Distance_Sensor_-_HC-SR04-01a.jpg" 
            
            className="component-img"
          />
          <h3 className="component-name">Ultrasonic Sensor - HC-SR04 (Generic)</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://www.electroschematics.com/wp-content/uploads/2013/01/Arduino-Mega-2560-Pinout.jpg" 
             
            className="component-img"
          />
          <h3 className="component-name">Arduino Mega 2560</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://circuit.rocks/cdn/shop/products/servo-mini-tower-pro-9g-sg-90-76.jpg?v=1689317054" 
             
            className="component-img"
          />
          <h3 className="component-name">SG90 Micro-servo motor</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrLyDb9j_PzpIXCK8izizDdi5NPB00Ygkog&s" 
            
            className="component-img"
          />
          <h3 className="component-name">Battery, 12 V</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG6aA7cBV3dcUPxuJrE3VOyqJF9Xc9JB46g&s" 
             
            className="component-img"
          />
          <h3 className="component-name">Alphanumeric LCD, 16 x 2</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://www.sparkfun.com/media/catalog/product/cache/a793f13fd3d678cea13d28206895ba0c/1/2/12002-Breadboard_-_Self-Adhesive__White_-01.jpg" 
             
            className="component-img"
          />
          <h3 className="component-name">Breadboard (generic)</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://www.electronics-lab.com/wp-content/uploads/2018/10/113990105_1_1024x1024.jpg" 
             
            className="component-img"
          />
          <h3 className="component-name">NodeMCU ESP8266 Breakout Board</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://robu.in/wp-content/uploads/2018/04/robu.in_9V-Battery-1-1.jpg" 
            
            className="component-img"
          />
          <h3 className="component-name">9V battery (generic)</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTX_CGqRDJivMz4gwMwPNDwtogdqnVY6Ytg&s" 
            
            className="component-img"
          />
          <h3 className="component-name">Switch Actuator, Head for spring return push-button</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://alannabi.qa/wp-content/uploads/2023/01/5mm1.jpg" 
            
            className="component-img"
          />
          <h3 className="component-name">5 mm LED: Red</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJ_rddXlkkcM-Ussxz_QUfMgQ2fy8nTlLXQ&s" 
            
            className="component-img"
          />
          <h3 className="component-name">Capacitive Proximity Sensor, 12 mm</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQwcFyPx84O2AXgilLa7W5mlckJPQ84-nrA&s" 
            
            className="component-img"
          />
          <h3 className="component-name">Wire Stripper & Cutter, 18-10 AWG / 0.75-4mm² Capacity Wires</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://m.media-amazon.com/images/I/31TxIz5M2KL._AC_UF1000,1000_QL80_.jpg" 
            
            className="component-img"
          />
          <h3 className="component-name">Soldering iron (generic)</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://cdn11.bigcommerce.com/s-7gavg/images/stencil/1280x1280/products/123/5582/Pro-DMM-kit-1000__93458.1670977696.png?c=2&_gl=1*1shxzx0*_gcl_au*MzYyMzUwNzYuMTc0NDIwMDc5MQ..*_ga*NDIzMzQzMTcyLjE3NDQyMDA3OTE.*_ga_JSPEFFCPBT*MTc0NDIwMDc5MS4xLjAuMTc0NDIwMDc5MS42MC4wLjI3MjY4NDc1Ng.." 
            
            className="component-img"
          />
          <h3 className="component-name">Mastech MS8217 Autorange Digital Multimeter</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://hackster.imgix.net/uploads/attachments/570466/blynk_logo_new_svAWbywyIp.png?auto=compress%2Cformat&w=255&h=170&fit=fill&bg=fff&dpr=2.625" 
             
            className="component-img"
          />
          <h3 className="component-name">BLYNK</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://blog.indobot.co.id/wp-content/uploads/2022/01/4-2.png" 
             
            className="component-img"
          />
          <h3 className="component-name">ThingSpeak API</h3>
          <p className="component-details"></p>
        </div>

        <div className="component-item">
          <img 
            src="https://external-preview.redd.it/psa-arduino-plc-ide-is-now-updated-to-support-opta-v0-Bd60rnOFew21fPXvGJ2D1DxL5w27_ZW7Vdjtt4jWqtA.jpg?auto=webp&s=29257bbadd650aeefbde657298392cd39282d84a" 
            
            className="component-img"
          />
          <h3 className="component-name">Arduino IDE</h3>
          <p className="component-details"></p>
        </div>

      </div>
    </section>
  );
};

export default Components;
