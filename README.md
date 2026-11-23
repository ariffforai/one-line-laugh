[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/ariffforai/one-line-laugh/rank.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)
[![Reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/ariffforai/one-line-laugh/reward.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)

# The One-Line Laugh

One funny line, written by a deterministic Node.js program, for the
[The One-Line Laugh](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)
bounty on [make.fun](https://make.fun).

## The line

> My cat ignores me all day, then at 3 a.m. sits on my chest like a tiny landlord collecting rent.

A concrete everyday scene — a cat waking its owner at 3 a.m. — with a
surprise twist at the end: the cat as a tiny landlord collecting rent.

## How it works

`main.ts` (Node.js 22, standard library only) writes the fixed line to
`/output/entry.txt`, then reads the file back and verifies it against the
gate: UTF-8 text of 1 to 200 characters, not only white space, exactly one
line and exactly one sentence. No randomness, no clock, no network — every
run produces the same file byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
