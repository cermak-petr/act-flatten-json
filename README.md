# act-flatten-json

This act extracts all arrays from input JSON and extends their elements with the core object.

__Example input:__
```javascript
[
    {
        "name": "elem_1",
        "value": ["a", "b", "c"]
    },
    {
        "name": "elem_2",
        "value": ["d", "e"]
    }
]
```

__Example output:__
```javascript
[
    { "name": "elem_1", "value": "a" },
    { "name": "elem_1", "value": "b" },
    { "name": "elem_1", "value": "c" },
    { "name": "elem_2", "value": "d" },
    { "name": "elem_2", "value": "e" }
]
```
