## Yate

### Default tabs

    nb-tabs()
    
* `'size'`: `'m'`

### Options

* `'id'` {string}
* `'class'` {array} `['my_class1' 'my_class2']` — additional classes
* `'attrs'` {object} `{'attr1': 'value1' 'attr2: 'value2' }` — custom DOM attributes
* `'size'` {string} `'s' | 'm'` — tabs text size
* `'rise'` {string} `'s' | 'm'` — shift tabs so their upper edge will aligh with border of container element
* `'items'` {array} — array of nodesets describing tab titles and contents. Item options:
    * `'title'` {string} — visible in each tab
    * `'content'` {string} — tab's content. Optionally in HTML.
    * `'active'` {boolean} — `true()` to render tab active. If no tab is explicitly set as `active`, first tab is concidered active by default.


### Examples

Two tabs with , first tab will be active:

```
    nb-tabs({
        'items': [
            {
                'title': 'Article'
                'content': "Article content"
            }
            {
                'title': 'Disscusstion'
                'content': 'Discussion content'
            }
        ]
    })
```

More interesting example — tabs contain inputs:

```

    serial_no_input = {
        'attrs': {
            'placeholder': 'Серийный номер'
            'style': 'width: 90%'
        }
    } 

    exchange_tab_content = (
        group = {
            'input': serial_no_input
            'button': {
                'size': 's'
                'content': 'Exchange'
            }
        }

        nb-input-group(group)
    )

    return_tab_content = (
        group = {
            'input': serial_no_input
            'button': {
                'size': 's'
                'content': 'Return'
            }
        }

        nb-input-group(group)
    )

    nb-tabs({
        'rise': 'm'
        'items': [
            {
                'title': 'Exchange'
                'content': exchange_tab_content
            }
            {
                'title': 'Return'
                'content': return_tab_content
            }
        ]
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