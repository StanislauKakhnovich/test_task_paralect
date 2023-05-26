export function decoder (nothing) {
  let decodeStr = '';
  for (let character in nothing) {
    let newCharacter = nothing.codePointAt(character)-10;
    let decodeCharacter = String.fromCodePoint(newCharacter);
    decodeStr += decodeCharacter;
  }
  return decodeStr;
}