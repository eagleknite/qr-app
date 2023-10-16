"use client"
import Lottie from 'lottie-react';
import animationData from '@/public/loading-animation.json'
import './globals.css';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Lottie animationData={animationData} className="lottie-animation" />
    </div>
  );
}

