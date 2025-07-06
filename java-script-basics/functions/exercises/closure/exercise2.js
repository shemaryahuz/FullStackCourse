// Closure function to hold secret variable

function secretHolder(_secret){
    return {
        getSecret: () => _secret,
        setSecret: (secret) => {
            _secret = secret;
        }
    }
}

const {getSecret, setSecret} = secretHolder('abc');
console.log('Secret:', getSecret()); // Secret: abc
setSecret('123');
console.log('Secret:', getSecret()); // Secret: 123