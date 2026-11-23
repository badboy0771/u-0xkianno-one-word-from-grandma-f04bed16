# One Word From Grandma

One word, and nothing else — the single word a grandma would text about AI — written for the make.fun bounty [u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16).

[![Bounty](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/badboy0771/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/badboy0771/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)

## The entry

`main.ts` (Node 22, no dependencies, no network) writes exactly one word to `/output/entry.txt`:

> Roboot

## Why this word

**Roboot** is a grandma's typo of "robot" — the double-o reads exactly like a grandmother thumbing a text about the new robot thing the grandkids keep talking about. It is warm and a little baffled, funny in one word with no caption needed, tied squarely to robots and AI, fresh (not the obvious "Robot"), and instantly readable. It sounds like something she would actually send.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The program validates the word before writing (exactly one word, letters only, 1–30 characters per the competition gate) and reads the file back to confirm it matches byte-for-byte, with no trailing newline.
