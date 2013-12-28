## Yate

### Default user

    nb-user()
    
* `'size'`: `'m'`
* `'userpic'`: `'/libs/nanoislands/blocks/header/avatar.png'`

### Options

* `'id'` {string}
* `'class'` {array} `['my_class1' 'my_class2']` — additional classes
* `'attrs'` {object} `{'attr1': 'value1' 'attr2: 'value2' }` — custom DOM attributes
* `'size'` {string} `'m' | 's'` — size, affects font and avatar size
* `'userpic'` {string} — link to avatar picture
* `'justify'` {boolean} — justify text of userinfo block
* `'rightToLeft'` {boolean} — avatar on the right, text on the left
* `'notices'` {number} — number of notices (rendered as red round thingie with number)
* `'username'` {string} — username to display
* `'email'` {string} — email addressto display

### Examples

Large userinfo block with notices count:

```
    nb-user({
        'username': 'sweetlush'
        'notices': '7'
        'userpic': 'http://center.yandex-team.ru/api/v1/user/sweetlush/photo_10670/300.jpg'
    })
```

Same large userinfo block, but inverted horisontally:

```
    nb-user({
        'username': 'Username'
        'notices': '1'
        'rightToLeft': 'true'
    })
```

Small userinfo block:

```
    nb-user({
        'username': 'basvasilich'
        'size': 's'
        'userpic': 'http://center.yandex-team.ru/api/v1/user/basvasilich/photo_6631/300.jpg?0.5863942694850266'
    })
```

Small userinfo block with lots of additional info, justification and RTL:

```
    nb-user({
        'username': 'Константин Леонидович Васильев'
        'email': 'mctep@yandex-team.ru'
        'justify': true()
        'rightToLeft': true()
        'size': 's'
        'userpic': 'https://center.yandex-team.ru/api/v1/user/mctep/avatar/36.jpg'
    })
```

Medium-sized userinfo block, M-sized, justification on:

```
    nb-user({
        'username': 'Константин Леонидович Васильев'
        'email': 'mctep@yandex-team.ru'
        'justify': true()
        'size': 'm'
        'userpic': 'https://center.yandex-team.ru/api/v1/user/mctep/avatar/36.jpg'
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
