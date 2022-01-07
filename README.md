# 정규표현식 RegExp
정규식, Regular Expression

## 역할
- 문자 검색 search
- 문자 대체 replace
- 문자 추출 extract

## 테스트 사이트
https://regexr.com/
https://regex101.com/
https://regexper.com/

## 정규식 생성

```js
//생성자 함수 : RegExp(전역객체) 생성자 함수를 호출하여 사용할 수 있습니다.
new RegExp('표현', '옵션') 
new RegExp('[a-z]', 'gi')

//리터럴 : /로 감싸진 패턴을 리터럴로 사용합니다.
/표현/옵션
/[a-z]/gi

```

## 옵션
g 전체데이터 가져오기
i 대소문자 가리지 않는다.


## 예제 문자

```js
const str = `
010-1234-5678
theemail@gmail.com
https://www.omdbapi.com/
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## method
메소드 | 문법 | 설명 | 예제
--|--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환 | .test(str)
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환 | str.match(regexp)
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체 | str.replace(regexp,'cat')


## 플래그(옵션)

플래그 | 설명
--|--
g | 일치하는 모든 문자 일치(global)
i | 영어 대소문자를 구분않고 일치(ignore case)
m | 여러 줄 일치(multi line), 각각의 줄을 단독적으로 인식 하겠다.


## 이스케이프 문자(Escape Character)
\ 기호를 통해 본래의 기능에서 벗어나 일반적인 문자로 바뀌는 것


## 패턴(표현)
패턴 | 설명 | 예제
--|--|--
^ab | 줄에 시작에 있는 ab와 일치
ab$ | 줄에 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치(정규표현식에서 문자로 사용시 백슬레이스 필요 ' \ \. ')
a&verbar;b | a 또는 b와 일치
abcd? | d가 없거나 d와 일치
{n} | n개 연속 일치(ex. d{3} > ddd)
{n,} | n개 이상 연속 일치
{n1,n2} | n1개 이상 n2개 이하(n1~n2개) 연속일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힇] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 나머지 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)| .{1,}(?=@)
(?<=) | 뒤쪽 일치(Lookbehind)(?<>=@)| .{1,}


1. 참고사이트 
    https://heropy.blog/2018/10/28/regexp/

2.  자바스크립트뿐만아니라 다른 프로그래밍언어에서도 사용 가능
    but 호환안되는 코드 있음

