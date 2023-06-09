"use client";

import { useSupabase } from "../utils/supabase-provider";

export default function Login() {
  const { supabase } = useSupabase();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "pbhalesain@gmail.com",
      password: "sup3rs3cur3",
    });
  };

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: "pbhalesain@gmail.com",
      password: "sup3rs3cur3",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}