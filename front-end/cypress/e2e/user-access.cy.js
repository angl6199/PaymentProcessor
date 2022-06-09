describe('Interacciones de usuario con su perfil', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  after(()=> {
    cy.request('http://localhost:8000/users/borrarTodos/cypress')
  })

  it('Test 1. El usuario puede acceder al form de registrar', () => {
    cy.contains('Registrar nuevo usuario').click()
    cy.contains('Registrar Usuario')
  })

  it('Test 2. El usuario puede detonar errores de campos en blanco en form de registrar', () => {
    cy.contains('Registrar nuevo usuario').click()
    cy.contains('Registrarse').click()
    cy.contains('Campos no válidos')
  })

  it('Test 3. El usuario puede registrarse', () => {
    cy.request('http://localhost:8000/users/borrarTodos/cypress')
    cy.contains('Registrar nuevo usuario').click()
    cy.get('[name="nombre"]').type('Angel')
    cy.get('[name="apellidos"]').type('Heredia Vazquez')
    cy.get('[name="email"]').type('angelherediavazquez@gmail.com')
    cy.get('[name="password"]').type('asdf')
    cy.get('[name="confirm_password"]').type('asdf')
    cy.contains('Registrarse').click()
    cy.contains('Inicio de sesión')
  })

  it('Test 4. El usuario puede detonar el error de email ya ocupado', () => {
    cy.contains('Registrar nuevo usuario').click()
    cy.get('[name="nombre"]').type('Angel')
    cy.get('[name="apellidos"]').type('Heredia Vazquez')
    cy.get('[name="email"]').type('angelherediavazquez@gmail.com')
    cy.get('[name="password"]').type('asdf')
    cy.get('[name="confirm_password"]').type('asdf')
    cy.contains('Registrarse').click()
    cy.contains('Email ya ocupado')
  })

  it('Test 5. El usuario puede acceder al form de login', () => {
    cy.contains('Inicio de sesión')
  })
  
  it('Test 6. El usuario puede detonar errores de campos en blanco en form de login', () => {
    cy.contains('Inicio de sesión')
    cy.contains('Ingresar').click()
    cy.contains('Credenciales incorrectas')
  })

  it('Test 7. El usuario puede detonar error de contraseña incorrecta en form de login', () => {
    cy.contains('Inicio de sesión')
    cy.get('[name="username"]').type('angelherediavazquez@gmail.com')
    cy.get('[name="password"]').type('contraenamal')
    cy.contains('Ingresar').click()
    cy.contains('Credenciales incorrectas')
  })

  it('Test 8. El usuario puede detonar error de email no verificado', () => {
    cy.contains('Inicio de sesión')
    cy.get('[name="username"]').type('angelherediavazquez@gmail.com')
    cy.get('[name="password"]').type('asdf')
    cy.contains('Ingresar').click()
    cy.contains('Usuario no verificado por mail')
  })

  it('Test 9. El usuario puede iniciar sesión', () => {
    cy.request('POST','http://localhost:8000/users/verificarForzado/cypress', {email: 'angelherediavazquez@gmail.com'})
    cy.contains('Inicio de sesión')
    cy.get('[name="username"]').type('angelherediavazquez@gmail.com')
    cy.get('[name="password"]').type('asdf')
    cy.contains('Ingresar').click()
    cy.contains('Angel Heredia Vazquez')
  })

  it('Test 10. El usuario puede iniciar sesión', () => {
    cy.contains('Inicio de sesión')
    cy.get('[name="username"]').type('angelherediavazquez@gmail.com')
    cy.get('[name="password"]').type('asdf')
    cy.contains('Ingresar').click()
    cy.contains('Angel Heredia Vazquez')
    cy.contains('Salir').click()
    cy.contains('Inicio de sesión')
  })
})