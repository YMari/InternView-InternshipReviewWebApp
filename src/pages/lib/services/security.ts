



// cookie.js library snippet (derived from readme.md)

// Create a cookie that expires 7 days from now, and valid to the path of the current page.
Cookies.set('name', 'value', { expires: 7, path: '' });

// Read cookie 
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined

// Delete a cookie valid to the path of the current page:
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name', { path: '' }); // removed



// jsonwebtoken library snipppet (derived from readme.md)

//Synchronous Sign with RSA SHA256 (encoding, if empty default algorithm is HMAC SHA256)
var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });

// Signing a token with 1 hour of expiration: 
// exp field should contain the number of seconds since the epoch (1970-01-01T00:00:00Z)
jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: 'foobar'
  }, 'secret');


//token verification 

// verify issuer
var cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, { audience: 'urn:foo', issuer: 'urn:issuer' }, function(err, decoded) {
  // if issuer mismatch, err == invalid issuer
});

// verification can be further expanded using fields like jwtid, subject,audience... 
