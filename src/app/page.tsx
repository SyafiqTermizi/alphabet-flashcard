"use client";

import { motion } from "framer-motion"
import { useState } from "react";

import { Left, Right } from "@/components/arrows";

interface AnimationProp { x: number | number[], opacity: number | number[] };


export default function Home() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [cardColorClass, setCardColorClass] = useState<string>("card-color-red");
    const [args, setArgs] = useState<AnimationProp>({ x: 0, opacity: 1 });


    const cardColorClasses = [
        "card-color-red",
        "card-color-blue",
        "card-color-orange",
        "card-color-purple"
    ];
    const alphabets = [
        "A", "B", "C", "D",
        "E", "F", "G", "H ",
        "I", "J", "K", "L",
        "M", "N", "O", "P",
        "Q", "R", "S", "T",
        "U", "V", "W", "X",
        "Y", "Z"
    ];


    function handleClick(val: 1 | -1) {
        let newCount = currentIndex + val;

        if (newCount > alphabets.length - 1) {
            newCount = alphabets.length - 1
        } else if (newCount < 0) {
            newCount = 0
        }

        setArgs({ x: -100 * val, opacity: 0 });
        setTimeout(
            () => {
                setArgs({ x: [100 * val, 0], opacity: [1, 1] });
                setCurrentIndex(newCount);
                setCardColorClass(cardColorClasses[newCount % 4])
            },
            500
        );
    }


    return <div className="row justify-content-center" style={{ paddingTop: "17vh" }}>
        <div className="col-3 pt-5">
            <button
                disabled={currentIndex <= 0}
                className="btn btn-lg text-white btn-nav"
                onClick={() => handleClick(-1)}
            >
                <Left />
            </button>
        </div>
        <div className="col-4 text-center">
            <motion.div
                className={`card ${cardColorClass}`}
                initial={{ x: 0, opacity: 1 }}
                animate={args}
            >
                <div className="card-body">
                    <h1 className="card-title" style={{ fontSize: "15vh" }}>
                        {alphabets[currentIndex]}
                    </h1>
                </div>
            </motion.div>
        </div>
        <div className="col-3 text-end pt-5">
            <button
                disabled={currentIndex >= alphabets.length - 1}
                className="btn btn-lg text-white btn-nav"
                onClick={() => handleClick(1)}
            >
                <Right />
            </button>
        </div>
    </div>
}