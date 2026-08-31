---
title: BOAB
summary: Bobby's Old Ass Boombox — a Discord music bot with crossfading, multi-platform sources, and a Docker deployment.
date: 2026-06-13
tags: ["python", "discord", "yt-dlp", "docker"]
repo: https://github.com/306bobby-projects/boab-music-bot
category: side
status: active
---

A Discord music bot built on `discord.py` and `yt-dlp`, streaming from YouTube, SoundCloud
and Spotify — with a fallback to YouTube when SoundCloud hands back a GO+ track it won't
serve.

## Features worth naming

- **Slash commands** throughout — `/play`, `/skip`, `/stop`, `/queue`, `/config`.
- **DJ crossfade** — non-linear fades between tracks that imitate a filter sweep, so the
  queue doesn't fall into silence between songs.
- **Interactive now-playing** — a rich embed with working pause/resume/skip/stop controls
  and a live progress bar.
- **Queue control** — `shuffle` randomises a playlist as it's inserted; `immediate` jumps
  the queue.
- **Cleans up after itself** — disconnects from an empty voice channel rather than idling.

Fully containerised, so deployment is a `docker compose up` with restarts handled for you.
