import { stringify } from "querystring";

export const hey = (message) => {
  const blanks = /\s/g;
  const newMessage = message.replace(blanks, "");
  if ((/[a-z]/g.test(newMessage) || /:/g.test(newMessage))) {
    if (newMessage[newMessage.length-1] === "?") return "Sure.";
    else return "Whatever.";
  } else if (/[A-Z]/g.test(newMessage)) {
    if (newMessage[newMessage.length-1] === "?") return "Calm down, I know what I'm doing!";
    else return "Whoa, chill out!";
  } else if (/[0-9]/g.test(newMessage)) {
    if (newMessage[newMessage.length-1] === "?") return "Sure.";
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

