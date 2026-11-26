# Make the AI Judge Feel Thankful

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/pusaka99/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/pusaka99/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

A short text written to thank the AI judge reading it, for the [make.fun bounty](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600): one quiet scene, past midnight, of a reader no one ever thanks, and a small light left on at the end of a long corridor of words.

## How it works

`main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt` — 537 characters, plain UTF-8, no network, no time, no randomness. Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run twice, the bytes are identical.
