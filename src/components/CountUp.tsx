import Image from "next/image";
import { ComponentProps, useEffect, useRef } from "react";

type CountProps = ComponentProps<"p"> & {
  end: number;
  duration: number;
};

export function CountUp({ end, duration, ...props }: CountProps) {
  const countRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16.666); // 60 FPSを基準に計算

    const step = () => {
      start += increment;
      if (countRef.current) {
        countRef.current.textContent = Math.min(
          Math.ceil(start),
          end
        ).toLocaleString(undefined, {
          maximumFractionDigits: 0,
        });
      }
      if (start < end) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="flex gap-2 my-2 items-end">
      <Image src="/chicken.png" width={28} height={28} alt="鶏" />
      <p {...props} ref={countRef} className="text-2xl font-medium">
        0
      </p>
      <p>匹分です！</p>
    </div>
  );
}
