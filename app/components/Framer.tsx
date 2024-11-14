"use client";
import { motion } from "motion/react";
export const splitString = (inputsring:string):string[]=>{
    const characters:string[] =[]
    const reges = /[\s\S]/gu;
    let match
    while ((match = reges.exec(inputsring))!== null) {
        characters.push(match[0])
    }
    return characters 
}
