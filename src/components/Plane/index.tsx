// @ts-nocheck
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./index.css";

export default function Plane() {
  const [checked, setChecked] = useState(false);

  const handlePointerMove = (e: PointerEvent) => {
    const BOUNDS = 50;
    const newX = gsap.utils.mapRange(
      0,
      window.innerWidth,
      -BOUNDS,
      BOUNDS,
      e.clientX
    );
    const newY = gsap.utils.mapRange(
      0,
      window.innerHeight,
      BOUNDS,
      -BOUNDS,
      e.clientY
    );
    gsap.set(document.documentElement, {
      "--rotate-x": newY,
      "--rotate-y": newX,
    });
  };

  const handlePointerDown = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [checked]);

  useEffect(() => {
    document.documentElement.style.setProperty("--dark", checked ? 1 : 0);
  }, [checked]);

  return (
    <div class="scene-container">
      <div class="scene">
        <div class="cloud cloud--one">
          <div class="cloud__shift">
            <div class="cloud__body">
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side">Winwoo</div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cloud cloud--two">
          <div class="cloud__shift">
            <div class="cloud__body">
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side">Winwoo</div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cloud cloud--three">
          <div class="cloud__shift">
            <div class="cloud__body">
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side">Winwoo</div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div>
                <div class="cuboid cuboid--cloud">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="plane__floater">
          <div class="plane__looper">
            <div class="plane">
              <div class="plane__wheels">
                <div class="plane__axle">
                  <div class="cuboid cuboid--axle">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
                <div class="plane__wheel plane__wheel--left">
                  <div class="cuboid cuboid--wheel-left">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
                <div class="plane__wheel plane__wheel--right">
                  <div class="cuboid cuboid--wheel-right">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
              </div>
              <div class="plane__body">
                <div class="cuboid cuboid--body">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div class="plane__nose">
                <div class="cuboid cuboid--nose">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div class="plane__propellor">
                <div class="propellor"></div>
              </div>
              <div class="plane__screen">
                <div class="cuboid cuboid--screen">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div class="plane__wings wings">
                <div class="wings__top">
                  <div class="cuboid cuboid--wings-top">
                    <div class="cuboid__side good__study">好好学习</div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
                <div class="wings__ghost">
                  <div class="cuboid cuboid--wings-ghost">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
                <div class="wings__bottom">
                  <div class="cuboid cuboid--wings-bottom">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
                <div class="wings__strobe wings__strobe--left">
                  <div class="cuboid cuboid--strobe">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
                <div class="wings__strobe wings__strobe--right">
                  <div class="cuboid cuboid--strobe">
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                    <div class="cuboid__side"></div>
                  </div>
                </div>
              </div>
              <div class="plane__tail">
                <div class="cuboid cuboid--tail">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div class="plane__stabilizer plane__stabilizer--horizontal">
                <div class="cuboid cuboid--horizontal-stabilizer">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div class="plane__stabilizer plane__stabilizer--vertical">
                <div class="cuboid cuboid--vertical-stabilizer">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
              <div class="plane__beacon">
                <div class="cuboid cuboid--beacon">
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                  <div class="cuboid__side"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
