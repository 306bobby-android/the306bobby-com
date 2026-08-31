---
title: crDroid for the Pixel 10 Pro
summary: Bringing up crDroid on Google's Tensor G5 hardware — official builds for the Pixel 10 Pro and Pro XL.
date: 2026-06-07
tags: ["crdroid", "aosp", "pixel", "tensor", "bringup"]
link: https://xdaforums.com/t/rom-official-16-0-crdroid-12-x-for-pixel-10-pro-pro-xl-blazer-mustang.4785628/
status: active
featured: true
---

Official crDroid for the Pixel 10 Pro (`blazer`) and Pro XL (`mustang`), on crDroid 12.x /
Android 16.

New-generation Pixel bringup is a different problem from maintaining a mature tree. The
hardware is current, so there's no accumulated community knowledge to lean on — the device
tree gets written against whatever the factory images reveal, and every subsystem has to be
proven working rather than assumed.

## Getting there

[`blazer-dump`](/projects/blazer-dump/) came first: a full firmware dump, which is what
makes it possible to see how the stock system is actually configured before trying to
replace it. From there it's the usual bringup sequence — device tree, vendor blob
extraction, kernel, then the long tail of SELinux policy and HAL wiring that separates
"boots" from "usable as a daily driver."

Discussion and downloads live in the
[XDA thread](https://xdaforums.com/t/rom-official-16-0-crdroid-12-x-for-pixel-10-pro-pro-xl-blazer-mustang.4785628/).
