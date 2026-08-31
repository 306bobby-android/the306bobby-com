---
title: crDroid for the Pixel "redbull" family
summary: Official crDroid maintainer for the Pixel 4a 5G, Pixel 5, and Pixel 5a — three devices Google stopped supporting, kept current on Android 16.
date: 2026-06-29
tags: ["crdroid", "aosp", "pixel", "device-trees", "kernel"]
link: https://xdaforums.com/t/rom-official-13-14-15-crdroid-for-pixel-5a-barbet.4646786/
category: android
status: active
featured: true
---

Three Pixels built on the same Qualcomm SM7250 platform — Google's `redbull` family — all
long past their last official update, all still running current Android.

| Device | Codename | Thread |
| --- | --- | --- |
| Pixel 5a | `barbet` | [XDA](https://xdaforums.com/t/rom-official-13-14-15-crdroid-for-pixel-5a-barbet.4646786/) |
| Pixel 5 | `redfin` | [XDA](https://xdaforums.com/t/rom-official-13-14-15-crdroid-for-pixel-5-redfin.4664665/) |
| Pixel 4a 5G | `bramble` | [XDA](https://xdaforums.com/t/rom-official-13-14-15-crdroid-for-pixel-4a5g-bramble.4664667/) |

All three ship as official crDroid builds on a monthly cadence, currently crDroid 12.x on
Android 16.

## What maintaining these actually involves

The devices share a common tree, so most work lands once and benefits all three. Each
Android release means rebasing device trees onto the new AOSP branch, forward-porting the
kernel, and fixing whatever the platform changed underneath — SELinux policy is the usual
suspect, since new domains and relabelled sysfs paths break silently until something
denies at runtime.

Beyond that: keeping the vendor blobs coherent across firmware revisions, chasing
regressions that only appear on one of the three, and cutting a signed release every
month.

## Where the source lives

The device trees and the shared kernel are kept in
[306bobby-android-org](https://github.com/306bobby-android-org) —
[`crdroid_android_kernel_google_redbull`](https://github.com/306bobby-android-org/crdroid_android_kernel_google_redbull)
covers all three — with the official trees for `barbet` and `bramble` maintained
directly in [crDroid's own organisation](https://github.com/crdroidandroid).

The family isn't crDroid-only: I upstream device and OTA entries for these Pixels into
[Project Infinity X](https://github.com/ProjectInfinity-X/official_devices) and
[Matrixx](https://github.com/Matrixx-Devices) as well.

## Downloads

Builds go out through crDroid's official channels — the OTA app on-device, or the XDA
thread for the device. I publish [matching NikGapps packages](https://nikgapps.com/306bobby-android)
alongside them.
