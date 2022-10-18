Feature('PracticeAutomationTesting');

Scenario('Registration & Login', ({ I }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.wait(3);
    I.click('//a[contains(text(),"My Account")]');
    I.wait(3);
    I.fillField('//input[@type="email"]', 'fake@gmail.com');
    I.fillField('//input[@id="reg_password"]', 'Test@1234!');
    I.click('//input[@value="Register"]');
    I.wait(2);
    I.fillField('//input[@id="username"]', 'fake@gmail.com');
    I.fillField('//input[@id="password"]', 'Test@1234!');
    I.click('//input[@value="Login"]');
    I.wait(2);
    I.click('//a[contains(text(),"Logout")]');
    I.wait(2);
    
});

// Scenario('test', ({ I }) => {     
//     I.fillField('//input[@id="username"]', 'fake@gmail.com');
//     I.fillField('//input[@id="password"]', 'Test@1234!');
//     I.click('//input[@value="Login"]');
//     I.wait(2);
// });