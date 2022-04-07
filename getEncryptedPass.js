import bcrypt from 'bcrypt';
/*
(async () => {
    // Hash the password
    
    console.log("----------------------------------------------------")
    console.log(salt);
    console.log("----------------------------------------------------");
    //In the line below, you need to change the "123" to your app GUID that you can found in your .csproj file.
    console.log(await bcrypt.hash("123", salt));
})(); */

async function returnPassword() {

    const salt = await bcrypt.genSalt(15);
    console.log("----------------------------------------------------")
    console.log(salt);
    console.log("----------------------------------------------------");
    var pass = await bcrypt.hash("dnwieru483m2s", salt); 
    return pass;
}

var finalPass = returnPassword();

module.exports = finalPass;