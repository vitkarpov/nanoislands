
```
    nb-island()
```

### Options

* `padding` {string} — s / m / l
* `type` {string} — inline / fly
* `content` {xml|string} — island's content, can be string or `xml` _xss warning!_

### Examples

Basic island:

```
    nb-island({
        'content': 'Остров миу-миу'
    })
```

Flying island with an M-sized padding:

```
    nb-island({
        'content': 'Летающий остров'
        'type': 'fly'
        'padding': 'm'
    })
```

Inline island with an L-sized padding:

```
    nb-island({
        'content': 'Остров с паддингами и инлайном'
        'padding': 'l'
        'type':  'inline'
    })
```