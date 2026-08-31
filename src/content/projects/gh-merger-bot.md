---
title: gh-merger-bot
summary: Telegram-connected bot that watches upstream repositories and cherry-picks or rebases new commits into your fork, handing conflicts back to you in chat.
date: 2026-06-22
tags: ["python", "telegram", "git", "automation"]
repo: https://github.com/306bobby-android/gh-merger-bot
status: active
---

Maintaining a ROM means living downstream of a dozen repositories that all move without
warning. Staying current is mechanical work — check upstream, cherry-pick, resolve, repeat
— right up until a conflict needs a human, at which point it needs one immediately.

This bot does the mechanical part and escalates the rest.

## What it does

- Polls configured upstream repositories hourly for new commits.
- Syncs them downstream by `cherry-pick` or `rebase`, whichever the repo is configured for.
- On conflict, sends the conflicting files to Telegram and waits for you to send back
  resolved versions.
- Notifies with clickable links to each new upstream commit.

Authentication is either a GitHub fine-grained PAT or local SSH. It runs as a group bot
with topic support, or as a private direct-message bot, and the local runner can daemonize
with automatic log tailing.
