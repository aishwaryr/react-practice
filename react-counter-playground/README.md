## Counter Playground

### Requirements

- Display a counter starting at `0`
- Buttons to:
  - Increment counter by `+1`
  - Decrement counter by `-1`
  - Reset counter to `0`
- Counter value must never go below `0`
- Display whether the counter value is **Even** or **Odd**
- Even/Odd label must be derived from the counter value (no separate state)
- Update the browser tab title to `Count: X` whenever the counter changes
- When the counter reaches `10`, show a message:  
  “🔥 You reached 10!”
- The “reached 10” message must:
  - Appear only once per reach
  - Disappear when the counter goes below `10`
  - Reappear if `10` is reached again
- Handle rapid clicks correctly
- No routing
- No external libraries
