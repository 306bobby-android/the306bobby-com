---
title: NikGapps "elite" configs
summary: Custom Google Apps packages built to match my crDroid builds — 17 merged config changes upstream at NikGapps.
date: 2026-08-31
tags: ["nikgapps", "gapps", "packaging", "crdroid"]
repo: https://github.com/nikgapps/config
link: https://nikgapps.com/306bobby-android
status: active
---

A ROM build and its Google Apps package have to agree. Ship too much and you clobber the
ROM's own components or run out of space on a fixed system partition; ship too little and
half of Play Services quietly fails.

[NikGapps](https://nikgapps.com) builds GApps packages from declarative config, so the fix
is to maintain configs that match the builds. Mine are published as the
["306bobby elite" variants](https://nikgapps.com/306bobby-android) — 20 pull requests into
[`nikgapps/config`](https://github.com/nikgapps/config), 17 merged so far, going back to
the first crDroid `redbull` config in May 2024.

The work is mostly trimming: dropping Pixel Launcher where the ROM supplies its own,
cutting package counts to fit, and keeping full/lite variants coherent as each Android
release moves things around.
