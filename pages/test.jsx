import { useState, useEffect } from 'react';

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function modInverse(a, m) {
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return 1;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

export default function EncryptionForm() {
  const [msg, setMsg] = useState('');
  const [pValue, setPValue] = useState('');
  const [qValue, setQValue] = useState('');
  const [encryptedMsg, setEncryptedMsg] = useState('');
  const [decryptedMsg, setDecryptedMsg] = useState('');

  useEffect(() => {
    if (pValue !== '' && qValue !== '') {
      handleEncryption();
    }
  }, [msg, pValue, qValue]); // Run encryption whenever the message or prime values change

  const handleEncryption = () => {
    const p = parseInt(pValue);
    const q = parseInt(qValue);

    if (!isPrime(p) || !isPrime(q)) {
      setEncryptedMsg('Invalid p or q (not prime)');
      setDecryptedMsg('');
      return;
    }

    const n = p * q;
    const t = (p - 1) * (q - 1);
    const e = 2; // Setting e to 2 as per your requirement

    const d = modInverse(e, t);

    const m = [];
    for (let i = 0; i < msg.length; i++) {
      m.push(msg.charCodeAt(i));
    }

    const encrypted = [];
    const decrypted = [];

    for (let i = 0; i < m.length; i++) {
      const encryptedChar = BigInt(m[i]) ** BigInt(e) % BigInt(n);
      encrypted.push(encryptedChar);
      const decryptedChar = BigInt(encryptedChar) ** BigInt(d) % BigInt(n);
      decrypted.push(Number(decryptedChar));
    }

    setEncryptedMsg(encrypted.join(' '));
    setDecryptedMsg(String.fromCharCode(...decrypted)); // Convert Unicode values to characters
  };

  return (
    <div>
      <label>
        ENTER MESSAGE:
        <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      </label>
      <br />
      <label>
        Enter prime number p:
        <input type="number" value={pValue} onChange={(e) => setPValue(e.target.value)} />
      </label>
      <br />
      <label>
        Enter prime number q:
        <input type="number" value={qValue} onChange={(e) => setQValue(e.target.value)} />
      </label>
      <br />
      <div>
        <p>Encrypted Message: {encryptedMsg}</p>
        <p>Decrypted Message: {decryptedMsg}</p>
      </div>
    </div>
  );
}
