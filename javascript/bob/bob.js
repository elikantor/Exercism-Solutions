import { stringify } from "querystring";

export const hey = (message) => {
  let index = -1
  while (message[message.length + index] === " ") index--
  const last = message[message.length + index]
  
  if (/[A-Z]/.test(message) && !/[a-z]/.test(message)) {
    if (last === "?") return "Calm down, I know what I'm doing!";
    else return "Whoa, chill out!";
  } else if (/\w|:/.test(message)) {
    if (last === "?") return "Sure.";
    else return "Whatever.";
  } else {
    return "Fine. Be that way!"
  };
};
/*
  ignore all non letters except for last character
  yell = if every letter is in caps without ending in ? - return "Whoa, chill out!"
  yell and ask = if every letter is in caps and ending in ? - return "Calm down, I know what I'm doing!"
  empty string return "Fine. Be that way!"

  -ask a question = if one letter is lower case and ends in ? return "Sure."
  -all else return "Whatever."
*/

