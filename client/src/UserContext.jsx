import { createContext } from "react";

const UserContext = createContext({
  token: null,
  role: "guess",
  userId: "",
  internshipsList: [],
  handleUserId: () => {},
  handleRole: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
  handleInternshipsList: () => {},
});

export default UserContext;