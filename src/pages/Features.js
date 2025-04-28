import React, { useEffect } from 'react';
import './Features.css';

const Features = () => {
  useEffect(() => {
    const title = document.querySelector('.features-title');
    title.classList.add('animate-title');
  }, []);

  return (
    <section id="features" className="features-container">
      <h2 className="features-title">Features</h2>
      <p className="features-description">
        Explore the amazing features of the Eco-Vend vending machine system, designed to promote recycling and reward students.
      </p>

      <div className="features-photos-container">
        <div className="feature-item">
          <img 
            src="https://renouvo.net/wp-content/uploads/2024/02/what-does-eco-friendly-mean-new-cover.jpg" 
            alt="Eco-Friendly Design" 
            className="feature-img"
          />
          <h3 className="feature-name">Eco-Friendly Design</h3>
          <p className="feature-details">Designed to reduce waste and encourage recycling, the Eco-Vend system is an environmentally conscious choice.</p>
        </div>


        <div className="feature-item">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Candy_in_Damascus.jpg/960px-Candy_in_Damascus.jpg" 
            alt="Eco-Friendly Design" 
            className="feature-img"
          />


          <h3 className="feature-name">Student Rewards</h3>
          <p className="feature-details">Students can earn rewards for recycling, motivating them to take part in sustainable actions.</p>
        </div>

        <div className="feature-item">
        <img 
            src="https://www.easepdf.com/images/pdf-tips/easy-to-use.jpg" 
            alt="Eco-Friendly Design" 
            className="feature-img"
          />
          <h3 className="feature-name">User-Friendly Interface</h3>
          <p className="feature-details">The system is designed with ease of use in mind, making recycling a simple and rewarding experience for students.</p>
        </div>


        <div className="feature-item">
        <img 
            src="https://cdn.bap-software.net/2024/02/29181848/realtime1.png" 
            alt="Eco-Friendly Design" 
            className="feature-img"
          />
          <h3 className="feature-name">Real-Time Tracking</h3>
          <p className="feature-details">Track your recycling progress in real-time and see the rewards accumulate instantly.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
