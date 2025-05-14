"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

interface SummaryProps {
  className?: string;
}

const DummyContent: FC<SummaryProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      
    </div>
  )
}