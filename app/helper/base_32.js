export default function base32Encode(honesty, reported, actual) {
  const str = honesty + " " + reported.toString() + " " + actual.toString();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  const bytes = new TextEncoder().encode(str);

  let bits = "";
  let output = "";

  for (let byte of bytes) {
    bits += byte.toString(2).padStart(8, "0");
  }

  for (let i = 0; i < bits.length; i += 5) {
    const chunk = bits.substring(i, i + 5).padEnd(5, "0");
    output += alphabet[parseInt(chunk, 2)];
  }

  while (output.length % 8 !== 0) {
    output += "=";
  }

  return output;
}

console.log(base32Encode("h", 15, 16));
