## Yate

### Default header

    nb-header()
    
* `'services'`: `true()`
* `'settings'`: `true()`
* `'yaHref'`: `'http://yandex.ru'`
* `'arrow'` {nodeset}
    * `'search'`: `true()`
    * `'buttonContent'`: `'Найти'`
    * `'class'`: `'nb-header__arrow'`

### Options

* `'id'` {string}
* `'class'` {array} `['my_class1' 'my_class2']` — additional classes
* `'attrs'` {object} `{'attr1': 'value1' 'attr2: 'value2' }` — custom DOM attributes
* `'services'` {boolean} — display services button
* `'settings'` {boolean} — display settings button
* `'yaHref'` {string} — link for header logo
* `'arrow'` {nodeset} — options for arrow, see arrow.md
* `'user'` {nodeset} — optoins for user, see user.md

### Examples

Header with seatch form and info about some user:

```
    nb-header({
        'user': {
            'username': 'Joe Plumber'
            'notices': '7'
        }
    })
```

Simplified header — no info about user and no 'services' icon, plus custom link:

```
    nb-header({
        'yaHref': 'https://yandex.ru'
        'services': false{}
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

```
    /*
    * Handler function, toggles pressed state of a button
    * @param event {object} — click event from button
    */
    header.togglePress()
```
