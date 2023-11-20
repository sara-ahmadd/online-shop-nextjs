"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Refresh() {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
  return null;
}

export default Refresh;
