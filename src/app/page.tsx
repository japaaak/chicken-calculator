"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-16 h-full flex flex-col items-center ">
      <Image
        src="/chikenchicken.png"
        width={180}
        height={180}
        alt="ローストチキン"
      />
      <h1 className="my-8">にわとり計算機</h1>
      <p>
        壁に当たったときや人生について悩んでるとき、ふと立ち止まった時に自分はどのぐらいの価値があるのだろう？と考えるときありますよね。
        <br />
        作者もちょうど同じように考えてたので、自分がニワトリ何羽分の価値か計算してみよう！！
      </p>

      <p className="text-left w-full mt-4">
        ↓ まずは調べる方の性別を選択しよう！
      </p>
      <div className="flex w-full gap-3 py-4 mx-auto ">
        <Link
          href="/man"
          className="flex flex-1 items-center justify-center h-32 bg-blue-400 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg px-5 py-2.5"
        >
          <p>男性</p>
        </Link>

        <Link
          href="/woman"
          className="flex flex-1 items-center justify-center h-32 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 text-center"
        >
          <p>女性</p>
        </Link>
      </div>
    </div>
  );
}
