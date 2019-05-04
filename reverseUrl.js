function reverseUrl(url) {
  let i = 0;
  let len = url.length;
  let ret = [];
  let sub = "";

  while (i < len) {
    if (url[i] === ".") {
      sub = reverseStr(sub);
      sub += ".";
      ret.push(sub);
      console.log(sub);
      sub = "";
    } else if (i === len - 1) {
      sub += url[i];
      sub = reverseStr(sub);
      ret.push(sub);
    } else {
      sub += url[i];
    }
    i++;
  }
  console.log(ret.join(""));
  return reverseStr(ret.join(""));
}

function reverseStr(str) {
  let ori = str.split("");
  let len = ori.length;
  let mid = parseInt(len / 2);

  while (mid >= 0) {
    let temp = ori[mid];
    ori[mid] = ori[len - mid];
    ori[len - mid] = temp;
    mid--;
  }

  return ori.join("");
}
