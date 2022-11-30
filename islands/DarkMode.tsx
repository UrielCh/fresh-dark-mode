import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
// import {
//   MdBrightnessAuto,
//   MdDarkMode,
//   MdOutlineWbSunny,
// } from "https://deno.land/x/react_icons@0.1.3/md/mod.ts";
import { BsMoon, BsSun } from "https://deno.land/x/react_icons@0.1.3/bs/mod.ts";
import { GrSystem } from "https://deno.land/x/react_icons@0.1.3/gr/mod.ts";

interface CounterProps {
  start: number;
}

export default function DarkMode(props: CounterProps) {
  /**
   * Used to format mode as text in screen
   */
  function getMode(): "light" | "dark" | "system" {
    if (!IS_BROWSER) {
      return "system";
    }
    if (localStorage.theme === "dark") {
      return "dark";
    }
    if (localStorage.theme) {
      return "light";
    }
    return "system";
  }

  function updateMode() {
    const w = (window as unknown as { isDark: boolean });
    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
  }

  const [mode, setMode] = useState(getMode());

  const setDarkModeOn = () => {
    localStorage.theme = "dark";
    updateMode();
    setMode("dark");
  };

  const setDarkModeAuto = () => {
    delete localStorage.theme;
    updateMode();
    setMode("system");
  };

  const setDarkModeOff = () => {
    localStorage.theme = "light";
    updateMode();
    setMode("light");
  };

  return (
    <div class="flex gap-2 w-full">
      <Button onClick={setDarkModeOn}>
        <BsMoon />
        Force Dark
      </Button>

      <Button onClick={setDarkModeAuto}>
        <GrSystem />
        System
      </Button>

      <Button onClick={setDarkModeOff}>
        <BsSun />
        Force light
      </Button>
      <div>
        Current Mode: <b class="text-3xl">{mode}</b>
      </div>
    </div>
  );
}
