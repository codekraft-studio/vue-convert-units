# vue-convert-units

> A VueJs wrapper for convert-units module

See it in action on the [demo](https://codekraft-studio.github.io/vue-convert-units/).

## Installation

Download the project using your favourite package manager:

```
npm install @codekraft-studio/vue-convert-units
yarn install @codekraft-studio/vue-convert-units
```

This command will download __this project__ and the [convert-units](https://github.com/ben-ng/convert-units) package by [ben-ng](https://github.com/ben-ng).

Than load it inside your application main file:

```js
import Vue from 'vue'
import VueConvertUnits from '@codekraft-studio/vue-convert-units'

Vue.use(VueConvertUnits)
```

Using it is very simple since it maps to __convert-units__ method, below an example of the basic usage:

```html
<p>{{12000 | convert('m', 'best')}}</p>
<p>{{units | convert(unitsFrom, 'best')}}</p>
```

You can refer to the [original documentation](https://github.com/ben-ng/convert-units#usage) to see how it's working in details.

---

## Development

If you want to help in the development of this project fork the repository than follow this instructions to setup the development environment.

```
yarn install
```

#### Compiles and hot-reloads for development

This starts the development server with files watching and hot modules replacement.

```
yarn run serve
```

#### Compiles and minifies for production

This build the source code into the final minified distribution in various formats.

```
yarn run build
```

#### Lints and fixes files

This command ensure all files are linted according to the project rules before committing them into the repository.

```
yarn run lint
```

---

## Contributing

1. Create an issue and describe your idea
2. Fork the project (https://github.com/codekraft-studio/vue-convert-units/fork)
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Publish the branch (`git push origin my-new-feature`)
6. Add some test for your new feature
7. Create a new Pull Request

---

## License

This package is released under [MIT License](LICENSE).
