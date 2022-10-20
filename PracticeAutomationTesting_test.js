Feature('PracticeAutomationTesting');

Scenario('Registration & Login', ({ I }) => {
    I.amOnPage('https://practice.automationtesting.in/');
    I.wait(3);
    I.click('//a[contains(text(),"My Account")]');
    I.wait(3);
    I.fillField('//*[@id="reg_email"]', 'fake@gmail.com');       
    I.fillField('//*[@id="reg_password"]', 'Test@1234!'); 
    // This below XPath i've copy it  by selecting and copy the XPath
    I.click('//*[@id="customer_login"]/div[2]/form/p[3]/input[3]');    
    I.wait(2);                     
    I.fillField('//input[@id="username"]', 'fake@gmail.com');
    I.fillField('//input[@id="password"]', 'Test@1234!');
    I.click('//input[@value="Login"]');
    I.wait(2);
    I.click('//a[contains(text(),"Logout")]');
    I.wait(2);  
});