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
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/484592930_2171456426604643_2264460787469723952_n.jpg?stp=cp6_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeEhWRgQsWZCx-js5BEG-E2TS_39lAZNE3ZL_f2UBk0TdgclbYVDBi8b--NbaiBFaFo8ebXV8SF0co-lw83rJHFX&_nc_ohc=cjVRE2soVX0Q7kNvwHd2J7g&_nc_oc=AdnyDPsinwiAqxnDjPr_xOZV3YVCUZwG6N2f7APNSsljrMlZdPOVWSdnuTEcbTOcors&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=x4zg2jcB-7r0vah2A5iAXQ&oh=00_AfET87kcNqTKAktuq_D97I987lE56p3HI35FukIWcxRgKA&oe=6814A9D6" alt="Image 2" className="photo-img" />
          <p className="photo-description">Mark Manio</p>
          <p>Email: manio11@gmail.com</p>
          <p>Birth Date: nov 11, 2003</p>
        </div>


        <div className="photo-item">
          <img src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/435384893_1861585890980413_3120838583473350861_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF3Z8RyOP929pcqzeWT1FXVBUwgcIM5qFkFTCBwgzmoWccid-xlHrf_A0nH66z_PcNEiDxZOkeLw9tZR0Vhy6FO&_nc_ohc=duOc70-6DkAQ7kNvwE7FR7h&_nc_oc=AdkutWCTDe6GYoeOnYgs1PIavifc3X9I6oZHa0YFtY2eB1kikBcz0w3oycpOuExXwRs&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=xiwwUHHNkW54OJcAMyKddw&oh=00_AfGjii37kG17Cu6me6DjiJ99exp5UaSm2OcjmvMyFMNdlw&oe=6814ACAF" alt="Image 3" className="photo-img" />
          <p className="photo-description">Jacob Valdez</p>
          <p>Email: valdez123@gmail.com</p>
          <p>Birth Date: sept 6, 2004</p>
        </div>


        <div className="photo-item">
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-1/453161578_1883624212106031_2026619860567686972_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGFvraA6N4MGiw5YxY4wyKtTqOriTzxu1JOo6uJPPG7UjHa8BI67UtgJUlz20PJRYzmBmNRlfP6QLOXy-TE3T2G&_nc_ohc=HEFu0eAKA0MQ7kNvwHllPvc&_nc_oc=AdmVj1g_Qh8jos01DSsRMmRnUMAc_xYBRFcOMXjdShK2j6yE4ZRNImdv1kVCEBS2sUw&_nc_zt=24&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=gzVDVm6LPlku3m0uL5GeUg&oh=00_AfGL-RKXpO3igNNv0wjR0VK7Gdcc5vFWvv0Cuy5BOay26Q&oe=68149E32" alt="Image 4" className="photo-img" />
          <p className="photo-description">Vince</p>
          <p>vince33@gmail.com</p>
          <p>Birth Date: jan 3, 2002</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



