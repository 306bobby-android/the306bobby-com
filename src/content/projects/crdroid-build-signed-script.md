---
title: crDroid signed build script
summary: Build script for producing signed crDroid OTA packages. Adopted upstream by crDroid and now maintained there.
date: 2026-02-04
tags: ["shell", "crdroid", "build", "signing", "ota"]
repo: https://github.com/crdroidandroid/crDroid-build-signed-script
status: archived
featured: true
---

Signing an Android build for release is a fiddly, easy-to-get-wrong sequence: generate and
manage the key set, run the build, re-sign the target files, then generate an OTA package
that devices will actually accept. Every maintainer needs it, and most reinvent it.

This wrapped the whole thing into one script.

## Upstreamed

It found an audience — 82 stars and 60 forks — and crDroid took it upstream. The canonical
version now lives at
[**crdroidandroid/crDroid-build-signed-script**](https://github.com/crdroidandroid/crDroid-build-signed-script),
which is where development continues and where you should get it.

My original repo is archived and kept only for history.
