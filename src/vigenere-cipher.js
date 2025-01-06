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

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (alphabet.includes(messageChar)) {
        const keyChar = key[keyIndex % key.length];
        const encryptedChar = alphabet[(alphabet.indexOf(messageChar) + alphabet.indexOf(keyChar)) % 26];
        encryptedMessage += encryptedChar;
        keyIndex++;
      } else {
        encryptedMessage += messageChar;
      }
    }
    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      if (alphabet.includes(encryptedChar)) {
        const keyChar = key[keyIndex % key.length];
        const decryptedChar = alphabet[(alphabet.indexOf(encryptedChar) - alphabet.indexOf(keyChar) + 26) % 26];
        decryptedMessage += decryptedChar;
        keyIndex++;
      } else {
        decryptedMessage += encryptedChar;
      }
    }
    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
