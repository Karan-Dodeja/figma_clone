"use client";

import { signOut } from "../actions/auth";

export default function Page() {
  return (
    <div>
      <p>Ny Dashboard</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
