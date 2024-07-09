"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { CountUp } from "@/components/CountUp";
import { calculateValue } from "@/utils/calculateValue";

export default function Results() {
  const searchParams = useSearchParams();
  const age = searchParams.get("age") ? Number(searchParams.get("age")) : 20;
  const height = searchParams.get("height")
    ? Number(searchParams.get("height"))
    : 110;
  const hairlength = searchParams.get("hairlength");
  const eyecolor = searchParams.get("eyecolor");
  const boobsize = searchParams.get("boobsize");

  const beardlength = searchParams.get("beardlength");
  const bodysize = searchParams.get("bodysize");

  const chickens = calculateValue({
    height,
    hairlength,
    eyecolor,
    boobsize,
    age,
    beardlength,
    bodysize,
  });

  return (
    <div className="py-16 h-full flex flex-col items-center">
      <Image
        src="/chikenchicken.png"
        width={180}
        height={180}
        alt="ローストチキン"
      />
      <h1 className="my-8">結果！</h1>
      <div className="flex flex-col items-center">
        <p>おめでとう！🥳</p>
        <p className="flex">あなたはニワトリ</p>
        <CountUp end={chickens} duration={2500} />

        <small className="mt-2">友達にシェアしてみてね！</small>
      </div>

      <Link href="/" className="mt-12 underline text-blue-800">
        もう一回計算してみる？
      </Link>
    </div>
  );
}
