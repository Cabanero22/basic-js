const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let encryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const textChar = text[i];
      if (alphabet.includes(textChar)) {
        const keyChar = key[keyIndex % key.length];
        const encryptedChar = alphabet[(alphabet.indexOf(textChar) + alphabet.indexOf(keyChar)) % 26];
        encryptedText += encryptedChar;
        keyIndex++;
      } else {
        encryptedText += textChar;
      }
    }
    return this.direct ? encryptedText : encryptedText.split('').reverse().join('');
  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let decryptedText = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const encryptedChar = text[i];
      if (alphabet.includes(encryptedChar)) {
        const keyChar = key[keyIndex % key.length];
        const decryptedChar = alphabet[(alphabet.indexOf(encryptedChar) - alphabet.indexOf(keyChar) + 26) % 26];
        decryptedText += decryptedChar;
        keyIndex++;
      } else {
        decryptedText += encryptedChar;
      }
    }
    return this.direct ? decryptedText : decryptedText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
