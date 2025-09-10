import React from "react";
import SkillTag from "./SkillTag";

interface Skill {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

interface UserData {
  id: number | string;
  name: string;
  email: string;
  avatarUrl?: string;
  isOnline: boolean;
  skills: Skill[];
}

interface UserProfileCardProps {
  user: UserData;
  onViewDetails: (userId: number | string) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
  return (
     <div className="user-card">
      <img
        src={user.avatarUrl || "https://via.placeholder.com/100"}
        alt="avatar"
        style={{ borderRadius: "50%", width: "80px", height: "80px" }}
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>
        <span
          style={{
            color: user.isOnline ? "green" : "gray",
            fontWeight: "bold",
          }}
        >
          ● {user.isOnline ? "Online" : "Offline"}
        </span>
      </p>
      <div style={{ marginBottom: "10px" }}>
        <strong>Skills:</strong>
        <div>
          {user.skills.map((s: Skill, index: number) => (
            <SkillTag key={index} skillName={s.name} level={s.level} />
          ))}
        </div>
      </div>
      <button
        onClick={() => onViewDetails(user.id)}
        style={{
          padding: "5px 10px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default UserProfileCard;
