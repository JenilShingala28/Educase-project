import React from 'react'
import { FaCamera } from 'react-icons/fa';
import '../App.css';
import '../Account.css'

const AccountSettings = () => {
    return (
        
        <div className="page-wrapper">
      <div className="settings-container">
        <h2 className="settings-title">Account Settings</h2>

        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="profile-image"
            />
            <div className="camera-icon">
              <FaCamera size={12} />
            </div>
          </div>

          <div>
            <h3 className="user-name">Marry Doe</h3>
            <p className="user-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="user-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </div>

        <div className="divider"></div>
        <div className="spacer-divider"></div>
      </div>
    </div>
    );
};

export default AccountSettings;
