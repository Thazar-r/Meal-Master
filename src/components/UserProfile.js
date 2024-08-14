import React from 'react';

function UserProfile() {
  // For demo purposes
  const user = {
    name: "Melchior",
    email: "melchior@example.com",
    bio: "Food lover | Recipe creator | Meal planner",
    profilePicture: "https://via.placeholder.com/150",
    posts: 120,
    followers: 340,
    following: 180
  };

  const recentPosts = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300",
      caption: "Delicious breakfast!",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      caption: "Healthy salad bowl.",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      caption: "Yummy dessert.",
      timestamp: "1 day ago"
    }
  ];

  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <div className="profile-header">
          <img 
            src={user.profilePicture} 
            alt="User Profile" 
            className="profile-picture" 
          />
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <p className="profile-bio">{user.bio}</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <h3>{user.posts}</h3>
            <p>Posts</p>
          </div>
          <div className="stat">
            <h3>{user.followers}</h3>
            <p>Followers</p>
          </div>
          <div className="stat">
            <h3>{user.following}</h3>
            <p>Following</p>
          </div>
        </div>

        <div className="recent-posts">
          <h3>Recent Posts</h3>
          <div className="posts-grid">
            {recentPosts.map(post => (
              <div key={post.id} className="post-card">
                <img src={post.imageUrl} alt={post.caption} className="post-image" />
                <p className="post-caption">{post.caption}</p>
                <p className="post-timestamp">{post.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
