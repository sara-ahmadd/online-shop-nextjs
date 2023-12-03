import React from "react";
import DashBoard from "./components/DashBoard";
import Refresh from "../components/Refresh";

export default async function DashboardPage() {
  return (
    <div className="mx-auto flex flex-col items-center gap-5 relative">
      <Refresh />
      <div className="pt-16 flex flex-col items-center gap-5 w-full">
        <DashBoard />
      </div>
    </div>
  );
}
