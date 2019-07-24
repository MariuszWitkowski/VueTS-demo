## Wstęp

* Czemu warto używać TypeScript?
  - why not?

* Jak skonfigurować IDE?
  - tsconfig.json
  - aliasy (`path` i `baseUrl`)

* Gdzie definiować typy?
  - czemu nie używać `any`
  - porządek w katalogach
  - jak zadeklarować moduł jeżeli biblioteka nie posiada swojego typowania
    - jest napisana w czystym js
    - nie ma definicji w `@types/foobar`

* Po co w Vue TypeScript?
  - why not?

## Vue with TypeScript (no Class-Style Components)

* Czemu nie chcę pokazywać class decorator?
  - Aktualny stan na Vue 3.0 dekoratorów jest deprecated możliwe, że nawet nie wejdą (źródło).
  - W projekcie nie tworzymy klas tylko opieramy się na funkcyjnym paradygmacie programowania

* Wyjaśnić czemu taka kolejność
  - doświadczenie? (po 4 komponentach i pomocy przy 2)
  - Etapy powstawania komponentu

* Powiedzieć jakiej wersji TS używać
  - dlaczego popsuli i nie chcą naprawić [#30854](https://github.com/microsoft/TypeScript/issues/30854)

1. [Basic Usage](https://vuejs.org/v2/guide/typescript.html#Basic-Usage)

```js
import Vue from 'vue'

const Component = Vue.extend({
  // type inference enabled
})

const Component = {
  // this will NOT have type inference,
  // because TypeScript can't tell this is options for a Vue component.
}
```

2. Typing component data

3. Typing props
  - use case PropType
  - validation object/array

4. Typing imported components
  - use case InstanceType
  - SFC
  - Separated files component
    - index.vue
    - index.d.ts
    - script.ts
    - template.html
    - styles.css

5. Typing refs and custom fields
  - refs
    - czemu potrzebujemy typować refsy
    - as instance of vue (for lazy)
    - as imported components (point 4)
    - as native node (example HTMLElement, HTMLInputElement)
  - custom fields
    - zewnętrzne biblioteki które dodają coś do instancji vue
    - na naszym przykładzie Vue-Rx i typowanie streamów
    - dodefiniowanie route w routingu (może znajdzie się bardziej elegancki sposób)

6. Typing mixin
  - wspomnieć jak (mix point 4 i point 5)
  - czemu nie używać (vue 3.0 ich nie chce?)

## Zródła

* https://vuejs.org/v2/guide/typescript.html
* Przykład repo na githubie