import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="border-t-2 p-4 w-full text-center">All rights reserved &copy;{year}</div>
  );
}
