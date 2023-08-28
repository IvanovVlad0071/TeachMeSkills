import RegistrationForm from "../Registration_form";




describe('RegistrationForm - positive tests', () => {
    let form: RegistrationForm;
    
    beforeEach(() => {
    form = new RegistrationForm('testuser', 'Test1234');
    });
    
  
    
    test('should create a new instance of RegistrationForm', () => {
    expect(form).toBeInstanceOf(RegistrationForm);
    });
    
    test('should return true if login and password are valid', () => {
    expect(form.registerUser()).toBe(true);
    });
    
    test('should return false if login is invalid', () => {
    form = new RegistrationForm('', 'Test1234');
    expect(form.registerUser()).toBe(false);
    });
    
    test('should return false if password is invalid', () => {
    form = new RegistrationForm('testuser', 'test1234');
    expect(form.registerUser()).toBe(false);
    });
    
    test('should return false if login and password are invalid', () => {
    form = new RegistrationForm('', 'test1234');
    expect(form.registerUser()).toBe(false);
    });
    
    test('should return true if login is valid alphanumeric string', () => {
    form = new RegistrationForm('testuser123', 'Test1234');
    expect(form.registerUser()).toBe(true);
    });
    
    test('should return false if login is less than 4 characters long', () => {
    form = new RegistrationForm('tes', 'Test1234');
    expect(form.registerUser()).toBe(false);
    });
    
    test('should return false if password does not contain an uppercase letter', () => {
    form = new RegistrationForm('testuser', 'test1234');
    expect(form.registerUser()).toBe(false);
    });
    
    test('should return false if password does not contain a lowercase letter', () => {
    form = new RegistrationForm('testuser', 'TEST1234');
    expect(form.registerUser()).toBe(false);
    });
    
    test('should return false if password is less than 6 characters long', () => {
    form = new RegistrationForm('testuser', 'Test1');
    expect(form.registerUser()).toBe(false);
    });
    
    test('should return true if password is valid and contains special characters', () => {
    form = new RegistrationForm('testuser', 'Test1234!');
    expect(form.registerUser()).toBe(true);
    });
    
    test('should return true if login and password are valid and have special characters', () => {
    const form = new RegistrationForm('test_user', 'Test1234!?');
    expect(form.registerUser()).toBe(false);
    });
    });



    describe('RegistrationForm - Negative tests', () => {
        let fregistrationForm: RegistrationForm;
        
    

        test('Empty login and password', () => {
            const registrationForm = new RegistrationForm('', '');
            expect(registrationForm.registerUser()).toBe(false);
          });
        
          test('Login less than 4 characters', () => {
            const registrationForm = new RegistrationForm('abc', 'Password123');
            expect(registrationForm.registerUser()).toBe(false);
          });

          test('Password less than 6 characters', () => {
            const registrationForm = new RegistrationForm('user123', 'Pass1');
            expect(registrationForm.registerUser()).toBe(false);
          });
        
          test('Non-alphanumeric login and password', () => {
            const registrationForm = new RegistrationForm('#$%^&', '^%$#@!');
            expect(registrationForm.registerUser()).toBe(false);
          });


          test('Password missing uppercase characters', () => {
            const registrationForm = new RegistrationForm('user123', 'password123');
            expect(registrationForm.registerUser()).toBe(false);
          });

          test('Login contains special characters', () => {
            const registrationForm = new RegistrationForm('user@123', 'Password123');
            expect(registrationForm.registerUser()).toBe(false);
          });

          test('Password missing lowercase characters', () => {
            const registrationForm = new RegistrationForm('user123', 'PASSWORD123');
            expect(registrationForm.registerUser()).toBe(false);
          });

          test('Short login and password', () => {
            const registrationForm = new RegistrationForm('u', 'P1');
            expect(registrationForm.registerUser()).toBe(false);
          });

          test('Login missing uppercase characters', () => {
            const registrationForm = new RegistrationForm('user123', 'password123');
            expect(registrationForm.registerUser()).toBe(false);
          });

          test('Password missing lowercase characters', () => {
            const registrationForm = new RegistrationForm('user123', 'PASSWORD123');
            expect(registrationForm.registerUser()).toBe(false);
          });


          test('Leading/trailing whitespace in login and password', () => {
            const registrationForm = new RegistrationForm('  user123  ', '  Password123  ');
            expect(registrationForm.registerUser()).toBe(false);
          });
    })