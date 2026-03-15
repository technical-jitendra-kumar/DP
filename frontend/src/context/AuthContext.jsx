import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, logoutUser, getMe } from "../api/auth.api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // On app load, verify token is still valid against backend
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getMe()
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch(() => {
          logoutUser();
          setUser(null);
        });
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await loginUser({ email, password });
      setUser(res.data);
      return res;
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed. Check your credentials.";
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await registerUser(userData);
      return res;
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed.";
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  // Role helpers — backend uses uppercase: ADMIN, TRAINER, COUNSELOR, STUDENT
  const isAdmin     = user?.role === "ADMIN";
  const isTrainer   = user?.role === "TRAINER";
  const isCounselor = user?.role === "COUNSELOR";
  const isStudent   = user?.role === "STUDENT";

  // Returns lowercase role for routing e.g. "admin", "trainer"
  const roleRoute = user?.role ? user.role.toLowerCase() : null;

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, register, logout, isAdmin, isTrainer, isCounselor, isStudent, roleRoute }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
