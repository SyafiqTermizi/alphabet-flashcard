"use client";

import { motion } from "framer-motion"
import { useState } from "react";

import { Left, Right } from "@/components/arrows";

interface AnimationProp { x: number | number[], opacity: number | number[] };


export default function Home() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [args, setArgs] = useState<AnimationProp>({ x: 0, opacity: 1 });

    const alphabets = [
        "A", "B", "C", "D",
        "E", "F", "G", "H ",
        "I", "J", "K", "L",
        "M", "N", "O", "P",
        "Q", "R", "S", "T",
        "U", "V", "W", "X",
        "Y", "Z"
    ]


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
            },
            500
        )
    }


    return <>
        <div className="row justify-content-center" style={{ paddingTop: "35vh" }}>
            <div className="col-3 pt-5">
                <button
                    style={{ height: "10vh" }}
                    disabled={currentIndex <= 0}
                    className="btn btn-lg btn-outline-success"
                    onClick={() => handleClick(-1)}
                >
                    <Left />
                </button>
            </div>
            <div className="col-4 text-center">
                <motion.div
                    style={{ height: "25vh" }}
                    className="card"
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
                    style={{ height: "10vh" }}
                    disabled={currentIndex >= alphabets.length - 1}
                    className="btn btn-lg btn-outline-success"
                    onClick={() => handleClick(1)}
                >
                    <Right />
                </button>
            </div>
        </div>
        <div className="row justify-content-center">
        </div></>
}