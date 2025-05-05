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
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-1/467741366_2081705465579740_6975305210520851779_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF3LNKQiEYHlH1Q3VsZ0j2Ae5yGPuGXXbB7nIY-4ZddsA3OdvuS8WThlSH21hWYQfQ8zKOX9HM3OZawT9w7LoaO&_nc_ohc=Z94Z9UzdFc4Q7kNvwGb0tXk&_nc_oc=Adl-fos8fHgUf6bAtjQ75CehZhGuxYJyNR2iBSA8iNUGefvYC0suKOBKnNruExIl4bU&_nc_zt=24&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=gPzKgoKWPC_ghQzUq4O8Iw&oh=00_AfGhmIdUaPiqXFZkSX9s16E-Ps2_QRNhx-Xxx2aQ9-vnWQ&oe=681E18C1" alt="Image 2" className="photo-img" />
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
          <img src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-1/453161578_1883624212106031_2026619860567686972_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGFvraA6N4MGiw5YxY4wyKtTqOriTzxu1JOo6uJPPG7UjHa8BI67UtgJUlz20PJRYzmBmNRlfP6QLOXy-TE3T2G&_nc_ohc=ajWD1eBXJmUQ7kNvwFSp5U5&_nc_oc=AdnjlwQfeUigbwGWNyG678LgypIH6ZVFvDwSFfnR70bCj1-8nT7anz04Tb1NZ4FCoB8&_nc_zt=24&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=NPsKAM53Fl4MGXPemSzrew&oh=00_AfFhmtfYOaCxAAYWUivM_5GJxBs--mngjoYPnBFY9FTa7Q&oe=681E10F2" alt="Image 4" className="photo-img" />
          <p className="photo-description">Vince</p>
          <p>vince33@gmail.com</p>
          <p>Birth Date: jan 3, 2002</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



