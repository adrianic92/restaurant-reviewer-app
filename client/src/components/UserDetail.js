import React from 'react';
import '../UserDetail.css';

function UserDetail({ user }) {
  return (
    <div className="user-detail-container">
      <h2 className="user-detail-heading">User Detail</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Location:</strong> {user.location}</p>
      {/* Additional user details */}
    </div>
  );
};

export default UserDetail;