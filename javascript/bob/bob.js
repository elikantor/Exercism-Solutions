import { stringify } from "querystring";

export const hey = (message) => {  
  if (/[A-Z]/.test(message) && !/[a-z]/.test(message)) {
    if (message.trim().slice(-1) === "?") return "Calm down, I know what I'm doing!";
    else return "Whoa, chill out!";
  }
  if (/\w|:/.test(message)) {
    if (message.trim().slice(-1) === "?") return "Sure.";
    else return "Whatever.";
  }
  return "Fine. Be that way!"
};


