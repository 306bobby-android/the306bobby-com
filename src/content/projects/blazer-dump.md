---
title: blazer-dump
summary: Full firmware dump of the Pixel 10 Pro — the reference material that made crDroid bringup on Tensor G5 possible.
date: 2026-01-25
tags: ["pixel", "firmware", "dump", "bringup"]
repo: https://github.com/306bobby-android/blazer-dump
category: android
status: maintained
---

A complete extraction of the Pixel 10 Pro's stock firmware: partitions, vendor blobs, and
the configuration that ships on retail hardware.

Dumps like this are unglamorous but load-bearing. Before you can replace a stock system you
have to know exactly what it does — which HALs are present, how partitions are laid out,
what properties and SELinux labels the vendor image expects. Guessing costs days; reading
the actual image costs an afternoon.

This one is the groundwork under [crDroid for the Pixel 10 Pro](/projects/crdroid-blazer/),
and it's public so nobody else porting to `blazer` has to redo it.
