# React Practice Apps

This repository contains **React practice apps built sequentially** to develop strong mental models around state, rendering, and side effects.

Each app lives in its own folder and includes its **own README** with detailed requirements and acceptance criteria.

---

---

## Apps Overview

### 001 – Counter Playground

**Focus:** State fundamentals

- `useState`
- functional updates
- batching
- stale state issues

Goal: build a correct mental model of how state updates work in React.

---

### 002 – Smart Todo

**Focus:** Lists & derived state

- immutable updates (`map`, `filter`)
- keys
- controlled inputs
- derived counts (done / pending)

Goal: model real UI state without duplicating or mutating data.

---

### 003 – Pomodoro Focus Timer

**Focus:** Side effects & time

- `useEffect`
- interval setup and cleanup
- pause / resume logic
- mode switching (focus / break)

Goal: understand effects and avoid common timer and cleanup bugs.
