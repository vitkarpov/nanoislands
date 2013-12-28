## Yate

### Default arrow

    nb-arrow()

* `'search'`: `true()`
* `'buttonContent'`: `'Найти'`

### Options

* `'search'` {boolean} — display search form
* `'href'` {string} — URL for service arrow link
* `'action'` {string} — action URL for search form
* `'text'` {string} — text for service arrow or link rendered before search input
* `'buttonContent'` {string} — text for form field's `'submit'` button
* `'value'` {string} — placeholder for search field
* `'requests'` {string} — info about number of request with this search field

### Examples

No inputs, with name of service:

```
    nb-arrow({
        'search': 'false'
        'href': '#'
        'text': 'Диск'
    })
```

Arrow with search form, no placeholder text:

```
    nb-arrow({
        'search': 'true'
    })
```

Arrow with search form, prefilled and with requests info:

```
    nb-arrow({
        'search': 'true'
        'requests': '8 млн ответов'
        'value': 'жираф'
    })
```

Arrow with search form and namelink enabled:

```
    nb-arrow({
        'search': 'true'
        'href': '#'
        'text': 'Диск'
    })
```

### Initialisation

Initialize nb block on DOM node:

```
    nb.block(node);
```

Initialize all nb blocks with class '_init' within DOM node

```
    nb.init(node);
```


### Arrow methods

```
    /*
    * Add shadow to wrapper and hide info about requests
    */
    arrow.focus()
    
    /*
    * Remove shadow from wrapper and show info about requests
    */
    arrow.blur()
```