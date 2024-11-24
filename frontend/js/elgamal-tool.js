// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
  
      // Add active class to the clicked tab and show the corresponding content
      this.classList.add('active');
      const targetId = this.id.replace('-tab', '-form');
      document.getElementById(targetId).style.display = 'block';
    });
  });
  
  // Default tab
  document.getElementById('encryption-tab').click();
  
  // Encryption/Decryption logic
 // EL GAMAL Encryption
document.getElementById('encrypt-button').addEventListener('click', async function() {
  const message = document.getElementById('message-to-encrypt').value;
  
  if (message) {
    try {
      const response = await fetch('http://127.0.0.1:5000/elgamal/encrypt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      const result = await response.json();
      if (result.encryptedMessage) {
        document.getElementById('encrypted-message').value = result.encryptedMessage; // Update textarea
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

// EL GAMAL Decryption
document.getElementById('decrypt-button').addEventListener('click', async function() {
  const cipherText = document.getElementById('message-to-decrypt').value;

  if (cipherText) {
    try {
      const response = await fetch('http://127.0.0.1:5000/elgamal/decrypt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cipherText })
      });

      const result = await response.json();
      if (result.decryptedMessage) {
        document.getElementById('decrypted-message').value = result.decryptedMessage; // Update textarea
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

// EL GAMAL Sign Message

document.getElementById('sign-message-button').addEventListener('click', async function() {
  const message = document.getElementById('message-to-sign').value;

  if (message) {
    try {
      const response = await fetch('http://127.0.0.1:5000/elgamal/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      const result = await response.json();
      if (result.signature) {
        document.getElementById('digital-signature').value = result.signature; // Update textarea
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

// EL GAMAL Verify Signature
document.getElementById('verify-signature-button').addEventListener('click', async function() {
  const message = document.getElementById('original-message').value;
  const signature = document.getElementById('signature-to-verify').value;

  if (message && signature) {
    try {
      const response = await fetch('http://127.0.0.1:5000/elgamal/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature })
      });

      const result = await response.json();
      if (result.valid !== undefined) {
        const verificationResult = result.valid ? 'Signature is valid' : 'Signature is invalid';
        document.getElementById('verification-output').value = verificationResult; // Update textarea
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

