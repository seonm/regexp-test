const str = `
010-1234-5678
theemail@gmail.com
https://www.omdbapi.com/
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/(?<=@).{1,}/g)
)