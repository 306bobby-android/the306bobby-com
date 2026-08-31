---
title: radb
summary: Lend a USB-attached Android device to a remote machine, so stock adb and fastboot drive it as if it were plugged in there.
date: 2026-08-25
tags: ["go", "adb", "fastboot", "usb", "tooling"]
repo: https://github.com/306bobby-android/radb
category: tooling
status: active
featured: true
---

The device is on your desk. The work — a build, a test run, an agent — happens on a server
somewhere else. `radb` bridges that gap without asking the remote end to install anything.

## Two halves, because the tools differ

**adb needs no protocol work.** It's already split into a client and a server that talk
over TCP, and the client is happy to talk to a server on another host. Point
`ADB_SERVER_SOCKET` at a tunnelled port 5037 and `shell`, `push`, `pull`, `install` and
`logcat` all work — file transfer included, since it rides the same connection.

**fastboot has no such split.** It drives USB directly. But it does know how to reach a
bootloader over TCP via `fastboot -s tcp:HOST:PORT`, and that protocol is simple: a
four-byte `FB01` handshake each way, then packets prefixed with an unsigned eight-byte
big-endian length. So `radb serve` impersonates a network-attached bootloader and relays
each packet to the real one over USB. The `fastboot` binary on the remote machine is stock
and unmodified.

## Only one side runs anything

`radb` runs solely on the machine holding the device. The remote server needs no Go, no
libusb, no root, no daemon — just `adb` and `fastboot` from platform-tools, pointed at
ports that ssh puts on its loopback.

One command on the device host:

```bash
radb link me@build-box
```

That starts the adb server if it isn't up, the adb proxy on 5038, the fastboot bridge on
5554, and a self-reconnecting ssh reverse tunnel. The real adb server keeps 5037 to
itself, so anything running locally carries on unaffected.
