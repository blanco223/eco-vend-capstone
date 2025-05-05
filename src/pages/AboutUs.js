import React, { useEffect } from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  useEffect(() => {
    const title = document.querySelector('.aboutus-title');
    title.classList.add('animate-title');
  }, []);
  

  return (
    <section id="about" className="aboutus-container">
      <h2 className="aboutus-title">About Us</h2>
      <p className="aboutus-description">
        You put trash, We give you a Reward.
      </p>

      <div className="photos-container">
        <div className="photo-item">
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.6435-9/37596890_1756288964456519_976980913810309120_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHOmMDupfyULgzz0hyKjNzIZKqGMmvqv9BkqoYya-q_0GqbMvYKndITY8X7XUikLr6JoiY5oIuZLOfAl2aiQK4v&_nc_ohc=ni9WSWTrkFQQ7kNvwGYC4XO&_nc_oc=Adm3mHPTfnj2Kj2i0-Uu22quPeDHY0lZYbfOQJgmW9RbKyzwwvNucNqrXg8QYGhUxAM&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=EbTIg4i4PIK6vI1LI8c6Iw&oh=00_AfFl8WvMr6z6UP011RMybBhFgm7uXKh0zkARuCqwyd7UgQ&oe=681CA81C" alt="Image 1" className="photo-img" />
          <p className="photo-description">R-Gen Cuevo</p>
          <p>Email: rcuevo11@gmail.com</p>
          <p>Birth Date: mar 29, 2002</p>
        </div>


        <div className="photo-item">
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/484592930_2171456426604643_2264460787469723952_n.jpg?stp=cp6_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeEhWRgQsWZCx-js5BEG-E2TS_39lAZNE3ZL_f2UBk0TdgclbYVDBi8b--NbaiBFaFo8ebXV8SF0co-lw83rJHFX&_nc_ohc=W_9Yy_96YR0Q7kNvwHF3hud&_nc_oc=AdkxkjS9-3M5hBgwAiDAVX8_lEiRxPclggJ0VGKOwQOxFYay5oFYOPDLT_31hKutfRc&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=ZEnGS7fnaATl_CCZz5vBTw&oh=00_AfGjJ5XRSKNB2J7DKmZ0SeUNG5PkbVWYsqNEv0Qr_LVA4Q&oe=681E1C96" alt="Image 2" className="photo-img" />
          <p className="photo-description">Mark Manio</p>
          <p>Email: manio11@gmail.com</p>
          <p>Birth Date: nov 11, 2003</p>
        </div>


        <div className="photo-item">
          <img src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/435384893_1861585890980413_3120838583473350861_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF3Z8RyOP929pcqzeWT1FXVBUwgcIM5qFkFTCBwgzmoWccid-xlHrf_A0nH66z_PcNEiDxZOkeLw9tZR0Vhy6FO&_nc_ohc=MtgOFKpBupsQ7kNvwEe795e&_nc_oc=Adnv34jpulkspGSCnOsSd6jbGpWtWZeh2RmmiNG5WrhGIultauLQKzoVQVUEKIT7tB0&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=nDTW8iFD-mUivl0Dlysw0w&oh=00_AfHPEuSw22ZlQHAgPOqe9bHZyj_GoQsHBs5sFtEfjKooFQ&oe=681E1F6F" alt="Image 3" className="photo-img" />
          <p className="photo-description">Jacob Valdez</p>
          <p>Email: valdez123@gmail.com</p>
          <p>Birth Date: sept 6, 2004</p>
        </div>


        <div className="photo-item">
          <img src="https://scontent.fcrk2-4.fna.fbcdn.net/v/t39.30808-6/484350863_2053312681803849_4644735285606899765_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeH00KOHKd98u12iqwXfuqqZGrGJlR9ewBQasYmVH17AFH-P8E-jNnAAdrzY4anuPnIWRoR0du0rN509FmXHmls0&_nc_ohc=RvJHA4jF9SAQ7kNvwGoWjOF&_nc_oc=Adn6qDKzY3YkM38aLJNRtz6hUAZR1UmvgWGKk1Yi7bzu7QuibhG5FLI2EG1MVVAy3-s&_nc_zt=23&_nc_ht=scontent.fcrk2-4.fna&_nc_gid=jjFcOd4bSo_asCpd7TinRw&oh=00_AfHAuo6ocl46FzJJky03KaKqCSARJmnPaILUlrCk0KtgXg&oe=681E2523" alt="Image 4" className="photo-img" />
          <p className="photo-description">Vince</p>
          <p>vince33@gmail.com</p>
          <p>Birth Date: jan 3, 2002</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



