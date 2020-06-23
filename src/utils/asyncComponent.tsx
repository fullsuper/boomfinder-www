import dynamic from 'next/dynamic';
import CircularProgress from "@/components/CircularProgress";
import React from "react";

export default (importComponent: any) =>{

  return dynamic(importComponent,
    {
      loading: () => <CircularProgress/>
    });
};
