---
title: Upstream contributions
summary: 43 pull requests into crDroid's own repositories, plus platform patches that other custom ROMs picked up and shipped.
date: 2026-07-10
tags: ["crdroid", "aosp", "upstream", "frameworks", "kernel"]
link: https://github.com/crdroidandroid
category: android
status: active
featured: true
---

Maintaining devices means a lot of the work doesn't live in my own repositories — it lands
in the ROM's. Across the [crdroidandroid](https://github.com/crdroidandroid) organisation
that's 43 pull requests, plus direct commit access to the official device trees for
`barbet` and `bramble` and to the `redbull` kernel.

## Platform changes

| Repository | Change |
| --- | --- |
| `android_frameworks_base` | `PixelPropsUtils: re-enable hardware attestation` |
| `android_packages_services_OmniJaws` | Added the Pirate Weather provider |
| `android_packages_apps_Updater` | crDroid header logo, cached maintainer/build info, completed-update persistence across reboot |
| `android_packages_inputmethods_LatinIME` | Brought the keyboard back up to current; emoji key on by default, language-switch key removed |
| `android_packages_apps_Settings` | Material You "About" logo, re-centred for QPR1 menu styling |
| `android_vendor_bcr` | Call-recorder updates through 3.4 |

## Kernel

Eight merged PRs against `android_kernel_google_redbull` — mostly the unglamorous half of
the job: merging LineageOS upstream, pulling in monthly Android Security Bulletin patches,
and keeping the tree building across releases. One that wasn't routine:

```
sched/headers: Move 'struct sched_param' out of uapi
```

Alongside that, `install_docs` (8 merged) and `android_vendor_crDroidOTA` (9 merged), which
is where every monthly release for my devices is actually cut.

## Picked up elsewhere

Patches written for crDroid have been cherry-picked into other ROMs — the same commits,
authored here, shipping in trees I don't maintain:

- **RisingOS-LTS** — `PixelPropsUtils: re-enable hardware attestation`
- **Project Mist** — the OmniJaws Pirate Weather provider
- **AlphaDroid** — the Updater changes
- **VoltageOS** — the LatinIME work
- **Lunaris-AOSP**, **Project Mist** — `vendor_bcr` updates

I also maintain the `redbull` family beyond crDroid, with device and OTA entries upstreamed
into [Project Infinity X](https://github.com/ProjectInfinity-X/official_devices) and
[Matrixx](https://github.com/Matrixx-Devices).
