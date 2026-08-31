---
title: Project Sandcastle fix
summary: Patched Project Sandcastle so Android would boot on iPhones running iOS 14.4 and up, back when it otherwise wouldn't.
date: 2022-04-05
tags: ["android", "ios", "checkra1n", "jailbreak", "shell"]
repo: https://github.com/306bobby/projectsandcastlefix
category: android
status: archived
---

[Project Sandcastle](https://projectsandcastle.org) put Android on the iPhone. It also
stopped working on iOS 14.4 and above, which by 2021 was most iPhones people actually had.

This was the fix: a corrected `isetup` file plus instructions, pinned to checkra1n 0.10.1,
which got Android booting again on affected devices.

## How it went

It picked up 17 stars and a couple of forks — small numbers, but this was a narrow audience
of people trying to boot Android on an iPhone, and for a while it was the way to do it on
Linux and macOS.

It's long since been superseded. My README points at
[`infinity`](https://github.com/fullpwn/infinity), which wraps the same job in a far more
user-friendly installer and, unlike this, works on Windows. The repo stays up as history.

The through-line to what I do now is not subtle: getting Android running on hardware whose
manufacturer would prefer it didn't.
