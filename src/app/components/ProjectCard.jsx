"use client";
import React from 'react'

export default function ProjectCard() {
  return (
    <div background-color="black">
    <div className="container">
    <div className="photo-container"></div>
    <div className="text-container"></div>
    </div>
    <style jsx>{`
      .container{
        min-width: 100%;
        width: 100%;
        height: 570px;
        background-color: red;
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .photo-container{
        height: 100%;
        width: 40%;
        background-color: blue;
        border-radius: 12px 0 0 12px;
        border-style: solid;
        border-width: 4px 0px 4px 4px;
        border-color: white;
      }
      .text-container{
        height: 100%;
        width: 60%;
        background-color: green;
        border-style: solid;
        border-radius: 0 12px 12px 0;
        border-width: 4px;
        border-color: white;
      }
    `}</style>
    </div>
  )
}
