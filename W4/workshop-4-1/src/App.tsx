import UserProfileCard from "./components/UserProfileCard";

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

function App() {
  const users: UserData[] = [
    {
      id: "user1",
      name: "Alice Wonderland",
      email: "alice.w@example.com",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      isOnline: true,
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "CSS", level: "Advanced" },
      ],
    },
    {
      id: "user2",
      name: "Bob The Builder",
      email: "bob.b@example.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/46.jpg",
      isOnline: false,
      skills: [
        { name: "Project Management", level: "Advanced" },
        { name: "Construction", level: "Beginner" },
      ],
    },
    {
      id: "user3",
      name: "Charlie Chaplin",
      email: "charlie.c@example.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg",
      isOnline: true,
      skills: [
        { name: "Vue.js", level: "Beginner" },
        { name: "Node.js", level: "Intermediate" },
      ],
    },
  ];

  const handleViewDetails = (userId: number | string): void => {
    alert(`User ID clicked: ${userId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          user={user}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
}

export default App;
