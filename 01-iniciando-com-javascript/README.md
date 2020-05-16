# 🤯 Iniciando com Javascript
O objetivo dessa aula é instalar o Node.js, aprender sobre variáveis e tipos de dados.
----

## 🎓 Aprendizados

- [x] Introdução ao capítulo
- [x] Instalação e configuração
- [x] Instalando o VSCode e Node.js no Ubuntu
- [x] Instalando o VSCode e Node.js no Windows
- [x] Guardando informações em variáveis
- [x] Demostração: Guardando informações em variáveis
- [x] [Diferença entre var, let e const](#var-let-const)
- [x] Variáveis

---

### Palavras reservadas que não podem ser usadas como nome de variáveis

- `class` 
- `function`

### Como saber o que pode usar e o que não pode?

Através da lista disponibilizada no [W3Schools](https://www.w3schools.com/js/js_reserved.asp), que você consegue conferir aqui também:

| abstract 	| arguments     | await*        |  boolean  |
|-----------|:-------------:|--------------:|----------:|
| break		| byte			| case			| catch		|
| char		| class*		| const			| continue	|
| debugger	| default		| delete		| do		|
| double	| else			| enum*			| eval		|
| export*	| extends*		| false			| final		|
| finally	| float			| for			| function	|
| goto		| if			| implements	| import*	|
| in		| instanceof	| int			| interface	|
| let*		| long			| native		| new		|
| null		| package		| private		| protected	|
| public	| return		| short			| static	|
| super*	| switch		| synchronized	| this		|
| throw		| throws		| transient		| true		|
| try		| typeof		| var			| void		|
| volatile	| while			| with 			| yield		|

---
<div id="var-let-const" />

## Diferença entre var, let e const

- `var` não se deve usar mais, pelo fato de você não saber o comportamento dele, acabar declarando novamente e etc
- `let` usa para valores que podem ser alterados por exemplo: `let contador = 0; contador = contador + 1`
- `const` são valores que nunca se altera

