## Yate

### Default slider

    nb-slider()

* `'value'` — `0`
* `'type'` — `'range'`
* `'orientation'` — `'horiz'`

### Options

* `'id'` {string}
* `'class'` {array} `['my_class1' 'my_class2']` — additional classes
* `'attrs'` {object} `{'attr1': 'value1' 'attr2: 'value2' }` — custom DOM attributes
* `'size'` {string} — slider handle size
* `'theme'` {string} — theme name?
* `'type'` {string} — handle type?
* `'value'` {number} — handle position on init
* `'static'` {boolean} — render as static
* `'handle'` {object} — options for handle:
    * `'class'` {string} — additional class for handle

### Examples

Small slider:

```
    nb-slider({
        'id': 's2'
        'size': 's'
        'handle': {
            'class': 'js-custom-class'
        }
        'value': 20
    })
```

Medium slider:

```
    nb-slider({
        'size': 'm'
        'class': 'js-super-class'
        'value': 50
        'id': 's1'
    })
```

## JS

### Initialisation

Initialize nb block on DOM node:

```
    nb.block(node);
```

Initialize all nb blocks with class '_init' within DOM node

```
    nb.init(node);
```

### Methods

None declared.