---
title: Halium on the Pixel 5
summary: Halium device port for redfin — the plumbing that lets a GNU/Linux distribution boot on a phone using its Android kernel and drivers.
date: 2026-03-25
tags: ["halium", "linux", "pixel", "redfin", "experiment"]
repo: https://github.com/306bobby-android/halium_device_google_redfin
category: android
status: maintained
---

[Halium](https://halium.org) standardises the awkward middle layer that lets a real Linux
distribution run on Android hardware: it boots a mainline-ish userspace on top of the
device's Android kernel and reuses the vendor HALs through a container, because the
proprietary drivers for a phone SoC exist only as Android blobs.

This is the device-side port for `redfin`, the Pixel 5.

It reuses the same kernel and vendor understanding as my
[crDroid work on the redbull family](/projects/crdroid-redbull/), pointed somewhere
different — a Pixel 5 running desktop Linux rather than Android. An experiment more than a
daily driver, but the device tree is public for anyone continuing it.
