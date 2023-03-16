import { MAX_LENGTH } from "./config"

export const onHandleSms = (str) => {

  const quantity = str.length

  if (quantity > MAX_LENGTH) {

    return onDevideText(str)

  }

  return [str]
}



const onDevideText = (text) => {
  let arr = [""];

  const words = text.split(" ");
  
  words.forEach(word => {
    if (arr[arr.length - 1].length < MAX_LENGTH) {
      arr[arr.length - 1] += `${word} `
    } else {
      arr.push(word)
    }
  });

  return arr.map((el, idx) => el + `${idx + 1} / ${arr.length}`)

}
