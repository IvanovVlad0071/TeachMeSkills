function trimstring (str: string, from: number, to: number) :string {
return str.slice(from, to)
}
console.log (trimstring("Hello world", 2, 5))