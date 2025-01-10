"use client";

import { MotionDiv } from "@/components/motion/motion-div";
import { animationConfig } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { Star, StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    photo: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <MotionDiv
    variants={animationConfig.variants}
    viewport={animationConfig.viewport}
    initial="toBottomOffScreen"
    whileInView="toBottomOnScreen"
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full shadow-lg relative rounded-xl border border-b-0 px-8 py-6 md:w-[450px] bg-white"
            key={item.name}
          >
            <blockquote className="flex flex-col gap-4 h-full">
              <div className="flex">
                  <StarIcon fill="#FF520E" stroke="none" size={16}/>
                  <StarIcon fill="#FF520E" stroke="none" size={16}/>
                  <StarIcon fill="#FF520E" stroke="none" size={16}/>
                  <StarIcon fill="#FF520E" stroke="none" size={16}/>
                  <StarIcon fill="#FF520E" stroke="none" size={16}/>
              </div>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-foreground font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 flex flex-row items-center gap-2 mt-auto">
                <Image alt={`Foto de ${item.name}`} src={item.photo} width={40} height={40} className="rounded-full"/>
                <span className="flex flex-col">
                  <span className="text-sm leading-[1.6] text-indigo-900 font-bold">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};
