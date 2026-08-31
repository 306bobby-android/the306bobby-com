---
title: crDroid for the Pixel 10 family
summary: Official crDroid across all four Pixel 10 models — the 10, 10 Pro, 10 Pro XL, and 10 Pro Fold — on Google's Tensor G5 hardware.
date: 2026-06-07
tags: ["crdroid", "aosp", "pixel", "tensor", "bringup"]
link: https://xdaforums.com/t/rom-official-16-0-crdroid-12-x-for-pixel-10-pro-pro-xl-blazer-mustang.4785628/
category: android
status: active
featured: true
---

Official crDroid for every model in the Pixel 10 line, on crDroid 12.x / Android 16.

| Device | Codename | Thread |
| --- | --- | --- |
| Pixel 10 | `frankel` | [XDA](https://xdaforums.com/t/rom-official-16-0-crdroid-12-x-for-pixel-10-frankel.4785629) |
| Pixel 10 Pro | `blazer` | [XDA](https://xdaforums.com/t/rom-official-16-0-crdroid-12-x-for-pixel-10-pro-pro-xl-blazer-mustang.4785628/) |
| Pixel 10 Pro XL | `mustang` | [XDA](https://xdaforums.com/t/rom-official-16-0-crdroid-12-x-for-pixel-10-pro-pro-xl-blazer-mustang.4785628/) |
| Pixel 10 Pro Fold | `rango` | [XDA](https://xdaforums.com/t/rom-official-16-0-crdroid-12-x-for-pixel-10-pro-fold-rango.4785632/) |

## Bringup, not maintenance

Current-generation Pixels are a different problem from keeping a mature tree alive. There's
no accumulated community knowledge to lean on — the device trees get written against what
the factory images reveal, and every subsystem has to be proven working rather than assumed
from someone else's tree.

Four models on shared Tensor G5 silicon means most of the platform work lands once, but
each device still has to be brought up and validated on its own. The Pro Fold least of all
resembles the others: a folding display means a second panel, hinge state, and posture
changes that the framework has to be told about correctly, none of which the other three
exercise.

[`blazer-dump`](/projects/blazer-dump/) is the groundwork — a full firmware extraction is
what makes it possible to see how the stock system is actually configured before trying to
replace it. From there it's device tree, vendor blob extraction, kernel, then the long tail
of SELinux policy and HAL wiring that separates "boots" from "usable as a daily driver."
