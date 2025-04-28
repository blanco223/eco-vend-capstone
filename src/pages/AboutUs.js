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
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/484592930_2171456426604643_2264460787469723952_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEhWRgQsWZCx-js5BEG-E2TS_39lAZNE3ZL_f2UBk0TdgclbYVDBi8b--NbaiBFaFo8ebXV8SF0co-lw83rJHFX&_nc_ohc=F_buOX-Vfv0Q7kNvwF7XolK&_nc_oc=AdkCDcW3duEYnXhJNnuKHp0YI1gjuFCfNT5CZC9iLtvEViYg2m67s6jzPeqH-CtGneE&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=wfyDpf6dBQbIHB85lmgSjg&oh=00_AfFVqB70JOPfnThBG75w6XvbViIdqrGP7H9dHFhbVMWTYw&oe=67FAF496" alt="Image 2" className="photo-img" />
          <p className="photo-description">Mark Manio</p>
          <p>Email: manio11@gmail.com</p>
          <p>Birth Date: nov 11, 2003</p>
        </div>


        <div className="photo-item">
          <img src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/435384893_1861585890980413_3120838583473350861_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF3Z8RyOP929pcqzeWT1FXVBUwgcIM5qFkFTCBwgzmoWccid-xlHrf_A0nH66z_PcNEiDxZOkeLw9tZR0Vhy6FO&_nc_ohc=Fr0hl3zYFK0Q7kNvwEl0SSn&_nc_oc=AdkOpa-wOmWoaWb9cnEU-w1OaAAFhRQ2KacHzCu1erFXuNtGxSyjGmDCisS_usl00vY&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=8sFghVDaFezAMhLfJoEMLw&oh=00_AfElOW9LkW99cupivdumjcm3f0AA_Hg2X9bha3x0v4mtHA&oe=67FABF2F" alt="Image 3" className="photo-img" />
          <p className="photo-description">Jacob Valdez</p>
          <p>Email: valdez123@gmail.com</p>
          <p>Birth Date: sept 6, 2004</p>
        </div>


        <div className="photo-item">
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-1/453161578_1883624212106031_2026619860567686972_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGFvraA6N4MGiw5YxY4wyKtTqOriTzxu1JOo6uJPPG7UjHa8BI67UtgJUlz20PJRYzmBmNRlfP6QLOXy-TE3T2G&_nc_ohc=vUVv0ER5t9sQ7kNvwHtLyCl&_nc_oc=Adl6rp9WLTa8mEJE11MBXWW_LRCA9PyMGw1uwx7MYKorYp1_p1COW2LqjT3HkAjgRCQ&_nc_zt=24&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=t9gFtN3LLf6jM9epIqavkQ&oh=00_AfFNJ1FYolbsnn_3-uVYDWjuU2NOndtJ72Zn0cDvOwuA-w&oe=67FAB0B2" alt="Image 4" className="photo-img" />
          <p className="photo-description">Vince</p>
          <p>vince33@gmail.com</p>
          <p>Birth Date: jan 3, 2002</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



