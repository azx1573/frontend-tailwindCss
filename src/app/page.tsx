"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isHovering] = useState(false);
  const classes = clsx("rounded bg-blue-500 px-4 py-2 text-base text-white", {
    "bg-blue-700 text-gray-100": isHovering,
  });
  const poetry = `所有的结局都已写好， 所有的泪水也都已启程，
                却忽然忘了是怎么样的一个开始， 在那个古老的不再回来的夏日。
                无论我如何的去追索， 年轻的你只如云影掠过，
                而你微笑的面容极浅极淡，渐隐没在日落后的群岚。
                遂翻开那发黄的扉页， 命运将它装订的极为拙劣，
                含着泪，我一读再读， 却不得不承认， 青春是一本太仓促的书`;
  const poetry2 = `所有的结局都已写好， 所有的泪水也都已启程，却忽然忘了`;
  const poetr3 = `       所有的结局都已写好，       所有的泪水也都已启程，
        却忽然忘了是怎么样的一个开始，            在那个古老的
        不再回来的夏日。`;

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-fuchsia-600">Hello TailwindCss</h1>
        <h3 className="bg-pink-400">Tailwind CSS有点意思哈~</h3>
        <div className="h-[80px] w-[190px] border-cyan-300 bg-sky-300 text-center text-indigo-600">
          这是一个div容器
        </div>
        <div className="p- ml-4 flex h-24 border-2 border-gray-300 bg-amber-300 p-3 text-gray-700 shadow-md">
          cesh
        </div>
        <button className={classes}>测试按钮</button>
        <div className="h-14 w-52 bg-blue-300 text-yellow-300">
          我是TailwindCss样式容器
        </div>
        {/* 自定义任意数值 */}
        <div className="text-[14px]">
          <div className="h-[80px] w-[200px] bg-pink-400 text-center text-blue-600">
            方括号定义任意数值-px
          </div>
          <div className="mt-5 h-[8rem] w-[20rem] bg-pink-400 text-center text-blue-600">
            方括号定义任意数值-rem
          </div>
          <div className="mt-5 h-[8em] w-[20em] bg-pink-400 text-center text-blue-600">
            方括号定义任意数值-em
          </div>
        </div>
        {/* 自定义百分比数值 */}
        <div className="w-[600px]">
          <div className="h-20 w-1/2 bg-pink-400 text-blue-600">
            w-1/2，代表50%
          </div>
          <div className="h-20 w-1/3 bg-pink-400 text-blue-600">
            w-1/3，代表33.33%
          </div>
          <div className="h-20 w-1/4 bg-pink-400 text-blue-600">
            w-1/4，代表25%
          </div>
        </div>
        {/* w-full和w-screen */}
        <div className="w-[300px]">
          <div className="h-20 w-full max-w-52 bg-pink-400 text-blue-600">
            w-full，代表撑满父容器的100%
          </div>
        </div>
        <div className="h-20 w-screen bg-pink-400 text-blue-600">
          w-screen，代表撑满屏幕的100%,相当于100vw
        </div>
        {/* 通过size可快速创建一个正方形 */}
        <div className="size-52 bg-pink-400"></div>
        {/* space-定义元素间间距 */}
        <div className="w-[600px] space-y-4">
          <div className="h-20 w-1/2 bg-pink-400 text-blue-600">
            w-1/2，代表50%
          </div>
          <div className="h-20 w-1/3 bg-pink-400 text-blue-600">
            w-1/3，代表33.33%
          </div>
          <div className="h-20 w-1/4 border-2 border-b bg-pink-400 text-blue-600">
            w-1/4，代表25%
          </div>
        </div>
        {/* 边框相关-定义线形 */}
        <div className="flex space-x-6">
          <div className="size-20 border-[.4rem] border-solid border-pink-400 bg-green-500">
            border-solid
          </div>
          <div className="size-20 border-[.4rem] border-dashed border-pink-400 bg-green-500">
            border-dashed
          </div>
          <div className="size-20 border-[.4rem] border-dotted border-pink-400 bg-green-500">
            border-dotted
          </div>
          <div className="size-20 border-[.4rem] border-double border-pink-400 bg-green-500">
            border-double
          </div>
        </div>
        {/* 边框相关-定义边框弧度 */}
        <div>
          <h1 className="mb-2 text-green-500">边框相关-定义边框弧度</h1>
          <div className="flex space-x-6">
            <div className="size-20 rounded border-[.4rem] border-pink-400 bg-green-500">
              rounded
            </div>
            <div className="size-20 rounded-md border-[.4rem] border-pink-400 bg-green-500">
              rounded-md
            </div>
            <div className="size-20 rounded-lg border-[.4rem] border-pink-400 bg-green-500">
              rounded-lg
            </div>
            <div className="size-20 rounded-full border-[.4rem] border-pink-400 bg-green-500">
              rounded-full
            </div>
          </div>
        </div>
        {/* 边框相关-divide */}
        <div>
          <h1 className="mb-2 text-green-500">边框相关-divide</h1>
          <div className="grid grid-cols-3 divide-x bg-green-500 text-center">
            <div className="h-10 w-32 border-pink-400 leading-10">01</div>
            <div className="border-pink-400 leading-10">02</div>
            <div className="border-pink-400 leading-10">03</div>
          </div>
        </div>
        {/* 字体文本 */}
        <div>
          {/* 文本相关-fontSize-xs */}
          <div>
            <h1 className="text-green-500">字体相关-fontSize</h1>
            <div className="text-xs text-pink-400">
              text-xs-12px：In me the tiger, sniff the roses
            </div>

            {/* fontSize-sm */}
            <div className="text-sm text-pink-400">
              text-sm-14px：In me the tiger, sniff the roses
            </div>

            {/* fontSize-base */}
            <div className="text-base text-pink-400">
              text-base-16px：In me the tiger, sniff the roses
            </div>

            {/* fontSize-lg */}
            <div className="text-lg text-pink-400">
              text-lg-18px：In me the tiger, sniff the roses
            </div>

            {/* fontSize-xl */}
            <div className="text-xl text-pink-400">
              text-xl-20px：In me the tiger, sniff the roses
            </div>
          </div>

          {/* 文本相关-fontStyle */}
          <div className="mt-8">
            <h1 className="text-green-500">字体相关-fontStyle</h1>
            <div className="text-base italic text-pink-400">
              text-base-16px-with-italic：In me the tiger, sniff the roses
            </div>

            <div className="text-base not-italic text-pink-400">
              text-base-16px-with-no-italic：In me the tiger, sniff the roses
            </div>
          </div>

          {/* 文本相关-字符间距 */}
          <div className="mt-8">
            <h1 className="text-green-500">字体相关-字符间距</h1>
            <div className="tracking-tighter text-pink-400">
              tracking-tighter：In me the tiger, sniff the roses
            </div>
            <div className="tracking-tight text-pink-400">
              tracking-tight：In me the tiger, sniff the roses
            </div>
            <div className="tracking-normal text-pink-400">
              tracking-normal：In me the tiger, sniff the roses
            </div>
            <div className="tracking-wide text-pink-400">
              tracking-wide：In me the tiger, sniff the roses
            </div>
            <div className="tracking-wider text-pink-400">
              tracking-wider：In me the tiger, sniff the roses
            </div>
          </div>
          {/* 文本相关-行高 */}
          <div className="mt-8 space-y-8">
            <h1 className="mb-1 text-green-500">文本相关-行高</h1>
            <div className="w-[50rem] text-pink-400">
              <h1 className="text-center text-green-500">
                青春-席慕蓉-leading-tight-1.25
              </h1>
              <div className="leading-tight">{poetry}</div>
            </div>

            <div className="w-[50rem] text-pink-400">
              <h1 className="text-center text-green-500">
                青春-席慕蓉-leading-normal-1.5
              </h1>
              <div className="leading-normal">{poetry}</div>
            </div>

            <div className="w-[50rem] text-pink-400">
              <h1 className="text-center text-green-500">
                青春-席慕蓉-leading-relaxed-1.625
              </h1>
              <div className="leading-relaxed">{poetry}</div>
            </div>

            <div className="w-[50rem] text-pink-400">
              <h1 className="text-center text-green-500">
                青春-席慕蓉-leading-loose-2
              </h1>
              <div className="leading-loose">{poetry}</div>
            </div>
          </div>
        </div>
        {/* 文本相关-文本 */}
        <div className="mt-8">
          <h1 className="text-green-500">文本相关-文本</h1>
          <div className="mt-1 w-[50rem] space-y-4 border p-3">
            <div>
              <h1 className="text-center text-green-500">
                文本对齐方式-向左对齐
              </h1>
              <div className="text-left text-pink-400">{poetry2}</div>
            </div>

            <div>
              <h1 className="text-center text-green-500">文本对齐方式-居中</h1>
              <div className="text-center text-pink-400">{poetry2}</div>
            </div>

            <div>
              <h1 className="text-center text-green-500">
                文本对齐方式-向右对齐
              </h1>
              <div className="text-right text-pink-400">{poetry2}</div>
            </div>

            <div>
              <h1 className="text-center text-green-500">
                文本对齐方式-justify
              </h1>
              <div className="text-justify text-pink-400">{poetry2}</div>
            </div>

            <div>
              <h1 className="text-center text-green-500">文本对齐方式-start</h1>
              <div className="text-start text-pink-400">{poetry2}</div>
            </div>

            <div>
              <h1 className="text-center text-green-500">文本对齐方式-end</h1>
              <div className="text-end text-[#4e80ee]">{poetry2}</div>
            </div>
          </div>
        </div>

        {/* 文本相关-内容超出时的展示方式 */}
        <div className="mt-8 w-[45rem] space-y-4">
          <h1 className="mb-20px text-green-500">文本相关-TextOverflow</h1>
          <div className="text-pink-400">
            <h1 className="text-center text-green-500">truncate</h1>
            <div className="truncate">{poetry}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">text-ellipsis</h1>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              {poetry}
            </div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">text-clip</h1>
            <div className="overflow-hidden text-clip whitespace-nowrap">
              {poetry}
            </div>
          </div>
        </div>

        {/* 文本相关-换行方式 */}
        <div className="mt-8 w-[45rem] space-y-4">
          <h1 className="mb-2 text-green-500">文本相关-文本换行-TextWrap</h1>
          <div className="text-pink-400">
            <h1 className="text-center text-green-500">换行：text-wrap</h1>
            <div className="text-wrap">{poetry}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">不换行：text-nowrap</h1>
            <div className="text-nowrap">{poetry}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">
              平衡的换行：text-balance
            </h1>
            <div className="text-balance">{poetry}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">
              平衡的换行：text-pretty
            </h1>
            <div className="text-pretty">{poetry}</div>
          </div>
        </div>

        {/* 文本相关-文本空白字符处理方式 */}
        <div className="mt-8 w-[60rem] columns-2 break-after-column space-y-4">
          <h1 className="mb-2 text-green-500">文本相关-空白字符-WhiteSpace</h1>
          <div className="border text-pink-400">
            <h1 className="text-center text-green-500">whitespace-normal</h1>
            <div className="whitespace-normal">{poetr3}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">whitespace-nowrap</h1>
            <div className="whitespace-nowrap border">{poetr3}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">whitespace-pre</h1>
            <div className="whitespace-pre border">{poetr3}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">whitespace-pre-line</h1>
            <div className="whitespace-pre-line border">{poetr3}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">whitespace-pre-wrap</h1>
            <div className="whitespace-pre-wrap border">{poetr3}</div>
          </div>

          <div className="text-pink-400">
            <h1 className="text-center text-green-500">
              whitespace-break-spaces
            </h1>
            <div className="whitespace-break-spaces border">{poetr3}</div>
          </div>
        </div>

        {/* 布局-Aspect-ratio */}
        <div className="mt-8 w-[20rem] space-y-4">
          <h1 className="mb-2 text-green-500">布局-Aspect-ratio</h1>
          <div className="aspect-auto bg-pink-400 text-center text-blue-600">
            aspect-auto: 宽高比自动，由内容决定
          </div>
          <div className="aspect-square bg-pink-400 text-center text-blue-600">
            aspect-square: 1:1
          </div>
          <div className="aspect-video bg-pink-400 text-center text-blue-600">
            aspect-video: 16:9
          </div>
        </div>

        {/* 布局-container */}
        <div className="mt-8 space-y-8">
          <h1 className="mb-2 text-green-500">布局-container</h1>
          <div className="w-[40rem] border text-pink-400">
            <h1 className="mb-2 text-center text-green-500">
              mx-auto实现元素在父容器内水平居中
            </h1>
            <div className="container mx-auto w-[20rem]">{poetr3}</div>
          </div>
        </div>
        {/* 布局-Flex-Flex-Basic布局 */}
        <div className="mt-8 space-y-8">
          <div>
            <h1 className="mb-2 text-green-500">
              布局-Flex布局-Flex-Basic布局
            </h1>
            <div className="flex w-[40rem] space-x-4 text-pink-400">
              <div className="basis-1/4 bg-green-500">flex-1/4</div>
              <div className="basis-1/4 bg-green-500">flex-1/4</div>
              <div className="basis-1/2 bg-green-500">
                flex-1/2：给我生成一大段文字占位给我生成一大段文字占位给我生成一大段文字占位给我生成一大段文字占位给我生成一大段文字占位给我生成一大段
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-2 text-green-500">布局-Flex布局-flex</h1>
            <div className="space-x-4 text-pink-400">
              <div className="space-y-4">
                flex-1：放大+缩小且忽略初始大小
                <div className="flex w-[40rem] space-x-4 border">
                  <div className="w-14 flex-none bg-green-500">
                    w-14(56px)-flex-none
                  </div>
                  <div className="w-32 flex-none bg-green-500">
                    w-32(128px)-flex-none
                  </div>
                  <div className="w-64 flex-none bg-green-500">
                    w-64(256px)-flex-none
                  </div>
                </div>
                <div className="flex w-[40rem] space-x-4 border">
                  <div className="w-14 flex-none bg-green-500">
                    w-14(56px)-flex-none
                  </div>
                  <div className="w-32 flex-1 bg-green-500">
                    w-32(128px)-flex-1
                  </div>
                  <div className="w-64 flex-1 bg-green-500">
                    w-64(256px)-flex-1
                  </div>
                </div>
                <div className="flex w-[40rem] space-x-4 border">
                  <div className="w-14 flex-none bg-green-500">
                    w-14(56px)-flex-none
                  </div>
                  <div className="w-32 flex-auto bg-green-500">
                    w-32(128px)-flex-auto
                  </div>
                  <div className="w-64 flex-auto bg-green-500">
                    w-64(256px)-flex-auto
                  </div>
                </div>
                <div className="flex w-[20rem] space-x-4 border">
                  <div className="w-14 flex-none bg-green-500">
                    w-14(56px)-flex-none
                  </div>
                  <div className="w-32 flex-initial bg-green-500">
                    w-32(128px)-flex-initial
                  </div>
                  <div className="w-64 flex-initial bg-green-500">
                    w-64(256px)-flex-initial
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* justify-content案例 */}
          <div>
            <h1 className="mb-2 text-green-500">
              布局-Flex布局-justify-content
            </h1>
            <div className="space-y-4 text-pink-400">
              <div className="flex w-[40rem] border">
                <div className="w-32 bg-green-500">justify-normal效果展示</div>
                <div className="w-32 bg-green-500">justify-normal</div>
                <div className="w-32 bg-green-500">justify-normal</div>
              </div>
              <div className="flex w-[40rem] justify-start border">
                <div className="w-32 flex-none bg-green-500">
                  justify-start效果展示
                </div>
                <div className="w-32 flex-none bg-green-500">justify-start</div>
                <div className="w-32 bg-green-500">justify-start</div>
              </div>
              <div className="flex w-[40rem] justify-end border">
                <div className="w-32 flex-none bg-green-500">
                  justify-end效果展示
                </div>
                <div className="w-32 flex-none bg-green-500">justify-end</div>
                <div className="w-32 bg-green-500">justify-end</div>
              </div>
              <div className="flex w-[40rem] justify-center border">
                <div className="w-32 bg-green-500">justify-center效果展示</div>
                <div className="w-32 bg-green-500">justify-center</div>
                <div className="w-32 bg-green-500">justify-center</div>
              </div>
              <div className="flex w-[40rem] justify-between border">
                <div className="w-32 bg-green-500">justify-between效果展示</div>
                <div className="w-32 bg-green-500">justify-between</div>
                <div className="w-32 bg-green-500">justify-between</div>
              </div>
              <div className="flex w-[40rem] justify-around border">
                <div className="w-32 bg-green-500">justify-around效果展示</div>
                <div className="w-32 bg-green-500">justify-around</div>
                <div className="bg-green-500">justify-around</div>
              </div>
              <div className="flex w-[40rem] justify-evenly border">
                <div className="w-32 bg-green-500">justify-evenly效果展示</div>
                <div className="w-32 bg-green-500">justify-evenly</div>
                <div className="w-32 bg-green-500">justify-evenly</div>
              </div>
              <div className="grid w-[40rem] grid-flow-col justify-stretch border">
                <div className="w-32 bg-green-500">
                  justify-stretch效果展示-只能在grid布局中使用
                </div>
                <div className="w-32 bg-green-500">justify-stretch</div>
                <div className="w-32 bg-green-500">justify-stretch</div>
              </div>
            </div>
          </div>
        </div>

        {/* break-after */}
        {/* <div>
          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-auto">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-avoid">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-all">Sure, go ahead, laugh...</p>

            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-avoid-page">Sure, go ahead, laugh...</p>

            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-page">Sure, go ahead, laugh...</p>

            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-left">Sure, go ahead, laugh...</p>

            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-right">Sure, go ahead, laugh...</p>

            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-column">Sure, go ahead, laugh...</p>

            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-before-column">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-alter-column">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>

          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-inside-avoid-column">
              Sure, go ahead, laugh...
            </p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>
          <div className="w-[50rem]">
            <div className="... bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white">
              Hello
              <br />
              World
            </div>
            <div className="... bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-clone px-2 text-white">
              Hello
              <br />
              World
            </div>
          </div>
        </div> */}

        {/* Object.fit */}
        {/* 踩坑一：图片url拉取失败，必须要在配置文件中注册一下 */}
        {/* <div className="space-y-4">
          <div className="h-[320px] w-[30rem] border">
            <img
              src="https://github.com/user-attachments/assets/1f6bb471-14e8-45e6-bc53-0e5cc1ae3c63"
              className="object-contain"
              alt=""
            />
          </div>

          <div className="h-[20rem] w-[30rem] border">
            <img
              src="https://github.com/user-attachments/assets/1f6bb471-14e8-45e6-bc53-0e5cc1ae3c63"
              className="object-cover"
              alt=""
            />
          </div>

          <div className="h-[20rem] w-[30rem] border">
            <img
              src="https://github.com/user-attachments/assets/1f6bb471-14e8-45e6-bc53-0e5cc1ae3c63"
              className="object-scale-down"
              alt=""
            />
          </div>

          <div className="h-[20rem] w-[30rem] border">
            <img
              src="https://github.com/user-attachments/assets/1f6bb471-14e8-45e6-bc53-0e5cc1ae3c63"
              className="object-none"
              alt=""
            />
          </div>

          <div className="h-[20rem] w-[30rem] border">
            <img
              src="https://github.com/user-attachments/assets/1f6bb471-14e8-45e6-bc53-0e5cc1ae3c63"
              className="object-fill"
              alt=""
            />
          </div>
        </div> */}
      </main>
    </div>
  );
}
