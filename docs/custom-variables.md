---
id: custom-variables
title: Custom Dimensions
---

| Field            | Type   | Required | Description                                              |
| :--------------- | :----- | :------- | :------------------------------------------------------- |
| dimensions[0-9]+ | String | No       | Able to set any custom variable. Max number of index: 20 |

## Send Data

```js
_ud("send", "pageview", {
    dimension15: "custom dimension 15 data"
});
```

Show [example](https://userdive.github.io/agent.js/simple/cd-with-send.html)

## Set Data

```js
_ud("set", "dimension5", "custom dimension data");
```

To `set` multi dimensions, you can use:

```js
_ud("set", {
    dimension5: "custom dimension data",
    dimension10: "custom dimension data"
});
```

Show [example](https://userdive.github.io/agent.js/simple/cd-with-set.html)
