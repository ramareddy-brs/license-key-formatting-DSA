function reformatLicenseKey(s, k) {
    const formattedString = s.replace(/-/g, '').toUpperCase();
    const firstGroupLength = formattedString.length % k || k;

    let result = formattedString.slice(0, firstGroupLength);

    for (let i = firstGroupLength; i < formattedString.length; i += k) {
        result += '-' + formattedString.slice(i, i + k);
    }

    return result;
}


const input = "5F3Z-2e-9-w";
const k = 4;
const output = reformatLicenseKey(input, k);
console.log(output);