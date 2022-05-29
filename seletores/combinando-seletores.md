# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar estilização

## Descendant combinator

- Identificado por um espaço entre os seletores
- Busca um elemento dentro do outro

```css
body article h2
```

## Child combinator

- Identificado pelo sinal `>` entre dois seletores
- Seleciona somente o elemento que é filho direto do pai
- Elementos depois do filho depois do filho serão desconsiderados

```css
body > ul > li
```

## Adjacent sibiling combinator

- Identificado pelo sinal `+` entre dois seletores
- Seleciona somente o elemento do lado direto que é irmão que é irmão direto na hierarquia

```css
h1 + p
```

## General sibiling combinator

- Identificado pelo sinal `~` entre dois seletores
- Seleciona todos os elementos irmãos

```css
h1 ~ p
```

## Utilizando combinadores

```css
ul > li[class="red"]
```

## Dica

- Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
- Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente
