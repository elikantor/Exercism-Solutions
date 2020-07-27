import { stringify } from "querystring";

export const hey = (message) => {
  let lastIndex = message.length-1
  let empty = true
  for(let i = 0; i < message.length - 1; i++) {
    if(message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      while(message.charCodeAt(lastIndex) === 32) lastIndex--
      if(message[lastIndex] === "?") {
        return "Sure."
      } else {
        return "Whatever."
      }
    } else if (message[i+2] && message.charCodeAt(i+2) >= 65 && message.charCodeAt(i+2) <= 90) {
      if(message[lastIndex] === "?") {
        return "Calm down, I know what I\'m doing!"
      } else {
        return "Whoa, chill out!"
      }
    } else if (message.charCodeAt(i) !== 32 && message.charCodeAt(i) !== 9 && message.charCodeAt(i) !== 10 && message.charCodeAt(i) !== 13) {
      empty = false
    }
  }
  if(empty) {
    return "Fine. Be that way!"
  } else {
    if(message[lastIndex] === "?") {
      return "Sure."
    } else {
      return "Whatever."
    }
  }
};

/*
ignore all non letters except for last character
  yell = if every letter is in caps without ending in ? - return "Whoa, chill out!"
  yell and ask = if every letter is in caps and ending in ? - return "Calm down, I know what I'm doing!"
  empty string return "Fine. Be that way!"




  -ask a question = if one letter is lower case and ends in ? return "Sure."
  -all else return "Whatever."
*/

