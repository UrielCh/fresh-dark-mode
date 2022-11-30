// import {
//   MdBrightnessAuto,
//   MdDarkMode,
//   MdOutlineWbSunny,
// } from "https://deno.land/x/react_icons@0.1.3/md/mod.ts";
import { BsMoon, BsSun } from "https://deno.land/x/react_icons@0.1.3/bs/mod.ts";
import { GrSystem } from "https://deno.land/x/react_icons@0.1.3/gr/mod.ts";

/**
 * pure browser side dark mode javascript switcher
 * @param props
 * @returns
 */
export default function DarkMode() {
  return (
    <div class="flex gap-12 w-full">
      <a href="javascript:global_dark('on');">
        <BsMoon />
        Force Dark
      </a>

      <a href="javascript:global_dark('auto');">
        <GrSystem />
        System
      </a>

      <a href="javascript:global_dark('off');">
        <BsSun />
        Force light
      </a>
    </div>
  );
}
