import React from "react";
import DashBoard from "./components/DashBoard";

export default async function DashboardPage() {
  return (
    <div className=" flex flex-col items-center gap-5 relative">
      <div className="pt-16 flex flex-col items-center gap-5 w-full h-full">
        <DashBoard />
      </div>
    </div>
  );
}
