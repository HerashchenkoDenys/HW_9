var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Ivan",
        lastName:"Ivanov",
        email:"ivan.ivanov@yahoo.com"
    },
    {
        userName:"Pedro",
        lastName:"",
        email:"pedro@mail.ru" // Нам такі чорти не підходять
    },
];

var trustedEmails = arr.filter(obj => {
    var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/;

    // Перевірка на формат і домен
    return emailRegex.test(obj.email);
});

console.log(trustedEmails);
