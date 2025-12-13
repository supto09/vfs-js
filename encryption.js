// ['encription'](_0x45b41d) {
//     const _0x2d48f8 = _0x5a586d.pki.publicKeyFromPem(_0x398e42.Gl + this.sessionService.rsaString + _0x398e42.a9);
//     return _0x5a586d.util.encode64(_0x2d48f8.encrypt(_0x45b41d.toString(), "RSA-OAEP", {
//         'md': _0x5a586d.md.sha256.create()
//     }));
// }


import forge from "node-forge";

function encryptWithRsaOaepSha256(inputValue) {
    // Known exact values from the code
    const PUBLIC_KEY_PEM_PREFIX = "-----BEGIN PUBLIC KEY-----";
    const PUBLIC_KEY_PEM_SUFFIX = "-----END PUBLIC KEY-----";

    // comes from session storage with Key: csk_str
    const rsaKeyBody = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuupFgB+lYIOtSxrRoHzc\nLmCZKJ6+oSbgqgOPzFMM0TasOeLw0NXEn1XfIzXdx75+tegNKwyIZumoh0yhubKs\nt59GV321kN0iquYRHrdh3ygfDDHlS9rROQeBqRga0ncSADtbLMrBPqXJjPCoV76y\nt92towriKoH75BhiazY0mghm4LjmAWrV0u/GNpV3tk9bxbtHEXGaFmxCJqjg+7x6\n1e5wXLfvpj9w1QsiSWOSJxLOyICz/9ByxXycQQFdNmjnnnwco9Gt/Mi33NYH71j0\n5oXIjklFC4lvJqaqSY5lS7Vwb9oCt9zX9J0Yz4z4e/3V+0jgRnWOFGofyks4FKe2\nGQIDAQAB";

    const publicKeyPem =
        PUBLIC_KEY_PEM_PREFIX +
        rsaKeyBody +
        PUBLIC_KEY_PEM_SUFFIX;

    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

    const encryptedBytes = publicKey.encrypt(
        inputValue.toString(),
        "RSA-OAEP",
        {
            md: forge.md.sha256.create(),
        }
    );

    return forge.util.encode64(encryptedBytes);
}

const inputPassword = "Asdf123456"
const encryptedPassword = encryptWithRsaOaepSha256(inputPassword)


console.log(encryptedPassword)

// Password

// from code
// eF3UQlmSIUhkWC7sGFo4BhPQvj7Qld/QocYQD0aLOBxbK97VQqK75ZUBVo84dZqvZZimGDYZcOzR2bA3qwhihTjs3FLMObgsM/gHwTSO593JDxBvh3fZEJUMImfWjzlf+ZcDZ4k2j0nY0C9zk59T4QHLQelKmU94EJ9x4Qu1HIuATImetBIaQpB3NhCZk49x5Ecie2aYCBw5Pt40WF0o8IMKBb/miyq3agzqi7XRGOlJGdT2b0TGavbc+E1J7G1z4aq5CU3a4eH8rucyPNViV01tx/rTmrTN9OwfXy5ovgmT621KbqqjqWPOnSJ74tjgrTWiWsrmDYJBR16o824S6w==
// from browser
// Y1f7jqEigy4Nam1AgrxhdbReHGzk1t7SJdYV2c3DqX1LYFRJqDq5HznmQVvOF%2B9RxWc5zJ4PjXh6hKp2L%2BD3Yj4UQ4xDwqs46ErrQSmB1ruKUeL8zOSy6y454zM4OGOaJE5k%2B9WJSFUdLywmLSI/ZAovKPXa0%2BRjH4pqeGGSZbEbzmYXGWVcFdzY%2BTUn5ehqt1YbWqUpxIf053exwoLYAGr9rVosY6mja0LVrQnwlUZl0dghf5o/rgOZsQB%2B2vyb4ZT19a02hjcyXcTCpCOdnzzNfOKced2aqRzAcXsAdFNMSZGblUh8%2BLDECKlIWoIToKEqZO9m7S3aLNO3mQ2Ghg==
// from browser url decoded
// Y1f7jqEigy4Nam1AgrxhdbReHGzk1t7SJdYV2c3DqX1LYFRJqDq5HznmQVvOF+9RxWc5zJ4PjXh6hKp2L+D3Yj4UQ4xDwqs46ErrQSmB1ruKUeL8zOSy6y454zM4OGOaJE5k+9WJSFUdLywmLSI/ZAovKPXa0+RjH4pqeGGSZbEbzmYXGWVcFdzY+TUn5ehqt1YbWqUpxIf053exwoLYAGr9rVosY6mja0LVrQnwlUZl0dghf5o/rgOZsQB+2vyb4ZT19a02hjcyXcTCpCOdnzzNfOKced2aqRzAcXsAdFNMSZGblUh8+LDECKlIWoIToKEqZO9m7S3aLNO3mQ2Ghg==


// client source
// from browser:
// R88puL8jwSGagQTO7K7RlBPaPUBEv6zErj5AuQchQkqozo+LsFv7ttdbhQ5AawxKYoAJbZJjxqvdRVrkHAfaMjQMeGc5SF6c3iIo+aP7Srxuyw7ee1/2R/EAVcgn4KMI15/AAhchk69YIb/qhYUroisegoPFobwFAUJ/qhQoJklwrtfSqtsoWNQWnOoK6zcpFp9HDWbUyRc//V6/ZR6Z0OP5M4ySr5+9uTN63YlUp8JJ11dmTZBBGrI8xvnkbb3Z707bc4JclN96PT3d3+9OAU4bpC0vikM2+QiWqKqSuoOu+j/Tw+iR6vjIcJZJiSPfcyGHijTmnxg9XBhAtmbSNw==







function main(){
    const clientsource = "k4+aq4UaEmJPIRvOl4ccj8TwyZWzH5bVMyTegn8kXgXJrL28l1thJCPAgRH4D+hUePX6yproQbQSxy0XxwUbmTJuGhVOwKhyMUczD2y5vokj425Zv7Lkv5GmENULRG/cBBLXfmlaXYOsFToKTsUCwXqHUkS/sWkr1oBIcC7hGvoPQg2TkkO0mQpKKjixVkkTfI6ZxLbLuE6UQnwx2Fo/fNEpShQwmnVEXRbsSIepmPbER8JqevbGeOhylYOjX+exHTSCMy7heA6pEzxgBdrB6ZqK4Q4Jkc0djCJ3ouQf2wHZzctbWfEthG7x1JZ4sOC5/ELXAw8ue8LAMTBV7MIQWQ=="
    const captcha = "0.D85TsSgDbPRoXXZ6xi1nc3OTp7_bZ8dU2hPLbnP3IbYv_74UfKHsrsK_zZcEznn0BHjbMbtuGWrzgI2xJl7-9Q9qv9KoRsyIbmW4l4YRPKDFc47LZpQerV8gK3MA-3Zmm_avmoJLl16HEzjmHjv4KCS3VNS-9V5yiOjMrSqf_w2VBb-FQxQ1YS_mJl8dkyXclB2571tGwPxuRtiMd2MzwJFstTJXxDeSyBsWgUMA7Kq9QVMjxF9rOsygeDEL0orZdvHHzVEUrnFDHVPlZt5eWndjiBlzWEtr_7omfiBemxGHGxUJy5iP4TuIEE5v-54cTgUSVY3PZRMgv6AfVIpj9ACX6u10eiUVVAvbsNK5VXJJPk5iIYdryRGcsUgpgRiKIQKLHylKHMCA-DBwWP5vpsKar2Tl9WtQpdd-9DccpVTBoCGia4YJ_XDS7WHHKpb02rIWRIZGP9TQTTYQAaSa0b1nDAnIrkfCJvzFBFxg3b2LU_UJN1qslm7_EYbs-J5USu_lpNy46B5g_C6rv27mOb51BEx2gTktqwuPT2PIb4Yd8MINqkjNyeFkg4pkzsp1QlazWTVrb11Kzk352YbEwLTsF0hO0rkACShgqC10BiCBz88uUiwWIyVsAJGIy7YWixgngFF1MaAgReNv-a6e4HqHHO6Su555aNEPd3oyA6FCubSjiblvV6-wtjqWM9aiP_SzRysPTN8ocbi4d_3QzGUxT8GPGkDI19U4BFA5PLy8wmHPYIsBqYru6Paa_uupEfUTxf4xQlwjSxHMVSTGQm0sbav2YQa4QSMZ613eVLQJbYKknP7n7-Sk4viCKdlQdT46Qdk97vCkprz9UgLCavFs5pTFMT6Xm8E2i_EgDzIkDWqvk3beWDCWIsBE9XaxFHCfKCgpDHPNTMr2guW7ZxyRIw1hzS-3MXGyWOKMG8enuEF86bZeD1I0dkvhqGNMZ2eFmyJBIoI41-kcsMTb2hJAZ7POK45DywnABbcdXhlvwaDblBcR-Yyh2pJyU8Xd.6fOXvIDUVeYggyKVh6QS1g.198adb0b1fdb6d15be7d4887c46c54ba5e719ea2bad767e4c2b0c81925fad679"

    fetch("https://lift-api.vfsglobal.com/user/login", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "clientsource": `${clientsource}`,
            "content-type": "application/x-www-form-urlencoded",
        },
        "body": `username=tarilo1116@naqulu.com&password=ZPJhZLDnpCQGAxiIMFVJH3pUefUInq2T7nE4Hny5%2FAW78E4OV6fpj6gM3Hw%2BY520JSbMgE9lylOAGjxvzDIvezDW3E%2BGjppp59bBxKMCubJp7AVWGiQhCsw1MCMAN8Bbj4mi50xbT1Y1z5Tuhx%2BS7n%2FY89GRTfqk62KrZ9sl3ei%2Fe6QlzteoYaBcbNb8rDpoMHd4yqaEOeMqxTCUCTR%2Fwa84ztpswjrBlEdjD9xLNpaIwK2FWceNHquFBVsfcoE7K9bSzFlK53wt%2Bdd75zpXCUGyd3LcbOehqpMet1CCXgvu1PXOulbn6cBVctedSlbS%2BpHftG1LJfbMIfCDIzR4Ww%3D%3D&missioncode=ukr&countrycode=pak&languageCode=en-US&captcha_version=cloudflare-v1&captcha_api_key=${captcha}`,
        "method": "POST",
    })

    // fetch("https://lift-api.vfsglobal.com/user/login", {
    //     "headers": {
    //     },
    //     "referrer": "https://visa.vfsglobal.com/",
    //     "body": "username=tarilo1116@naqulu.com&password=ZPJhZLDnpCQGAxiIMFVJH3pUefUInq2T7nE4Hny5%2FAW78E4OV6fpj6gM3Hw%2BY520JSbMgE9lylOAGjxvzDIvezDW3E%2BGjppp59bBxKMCubJp7AVWGiQhCsw1MCMAN8Bbj4mi50xbT1Y1z5Tuhx%2BS7n%2FY89GRTfqk62KrZ9sl3ei%2Fe6QlzteoYaBcbNb8rDpoMHd4yqaEOeMqxTCUCTR%2Fwa84ztpswjrBlEdjD9xLNpaIwK2FWceNHquFBVsfcoE7K9bSzFlK53wt%2Bdd75zpXCUGyd3LcbOehqpMet1CCXgvu1PXOulbn6cBVctedSlbS%2BpHftG1LJfbMIfCDIzR4Ww%3D%3D&missioncode=ukr&countrycode=pak&languageCode=en-US&captcha_version=cloudflare-v1&captcha_api_key=0.D85TsSgDbPRoXXZ6xi1nc3OTp7_bZ8dU2hPLbnP3IbYv_74UfKHsrsK_zZcEznn0BHjbMbtuGWrzgI2xJl7-9Q9qv9KoRsyIbmW4l4YRPKDFc47LZpQerV8gK3MA-3Zmm_avmoJLl16HEzjmHjv4KCS3VNS-9V5yiOjMrSqf_w2VBb-FQxQ1YS_mJl8dkyXclB2571tGwPxuRtiMd2MzwJFstTJXxDeSyBsWgUMA7Kq9QVMjxF9rOsygeDEL0orZdvHHzVEUrnFDHVPlZt5eWndjiBlzWEtr_7omfiBemxGHGxUJy5iP4TuIEE5v-54cTgUSVY3PZRMgv6AfVIpj9ACX6u10eiUVVAvbsNK5VXJJPk5iIYdryRGcsUgpgRiKIQKLHylKHMCA-DBwWP5vpsKar2Tl9WtQpdd-9DccpVTBoCGia4YJ_XDS7WHHKpb02rIWRIZGP9TQTTYQAaSa0b1nDAnIrkfCJvzFBFxg3b2LU_UJN1qslm7_EYbs-J5USu_lpNy46B5g_C6rv27mOb51BEx2gTktqwuPT2PIb4Yd8MINqkjNyeFkg4pkzsp1QlazWTVrb11Kzk352YbEwLTsF0hO0rkACShgqC10BiCBz88uUiwWIyVsAJGIy7YWixgngFF1MaAgReNv-a6e4HqHHO6Su555aNEPd3oyA6FCubSjiblvV6-wtjqWM9aiP_SzRysPTN8ocbi4d_3QzGUxT8GPGkDI19U4BFA5PLy8wmHPYIsBqYru6Paa_uupEfUTxf4xQlwjSxHMVSTGQm0sbav2YQa4QSMZ613eVLQJbYKknP7n7-Sk4viCKdlQdT46Qdk97vCkprz9UgLCavFs5pTFMT6Xm8E2i_EgDzIkDWqvk3beWDCWIsBE9XaxFHCfKCgpDHPNTMr2guW7ZxyRIw1hzS-3MXGyWOKMG8enuEF86bZeD1I0dkvhqGNMZ2eFmyJBIoI41-kcsMTb2hJAZ7POK45DywnABbcdXhlvwaDblBcR-Yyh2pJyU8Xd.6fOXvIDUVeYggyKVh6QS1g.198adb0b1fdb6d15be7d4887c46c54ba5e719ea2bad767e4c2b0c81925fad679",
    //     "method": "POST",
    // })

        .then(response=>{
        return response.json();
    }).then(json=>{
        console.log(json)
    }).catch(error=>{
        console.log(error)
    });
}

main()