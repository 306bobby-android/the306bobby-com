---
title: MineCord
summary: Minecraft server manager driven from Discord — multiple instances, CurseForge modpack installs, and crash recovery.
date: 2026-02-09
tags: ["python", "discord", "minecraft", "systemd"]
repo: https://github.com/306bobby-projects/MineCord
category: side
status: active
---

Running a Minecraft server for friends means someone has to be the person with SSH access
when it falls over. This moves that job into Discord, where the people who care are
already sitting.

- **Multiple instances** managed side by side, with a configurable concurrency limit so one
  box doesn't get flattened.
- **Discord control** with role-based access, so not everyone gets a stop button.
- **CurseForge modpacks** installed straight from a pack link — no manual server-pack
  wrangling.
- **Runs as a systemd service**, starting on boot and bringing back whichever servers were
  up before the reboot.
- **Crash detection** that notifies rather than failing quietly.
