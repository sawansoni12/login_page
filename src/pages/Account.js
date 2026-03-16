import React from "react";

function Account() {

  return (
    <div className="card">

      <div className="header">
        <h3>Account Settings</h3>
        {/* <span className="logout">Logout</span> */}
      </div>

      <div className="profile">
       <img
src="https://i.pravatar.cc/150?img=3"
alt="profile"
/>

        <div>
          <h4>Sawan Soni</h4>
          <p>sosawan053@gmail.com</p>
        </div>
      </div>

      <p className="about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>

    </div>
  );
}

export default Account;