# Projeto Valoriza

## Regras

- Cadastro de Usuário
    - Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    - Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG
    - Não é permitido cadastrar mais de uma TAG com o mesmo nome
    - Não é permitido cadastrar TAG sem nome
    - Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de Elogios
    - Não é permitido um usuário cadastrar um elogio para si
    - Não é permitido cadastrar elogios para usuários inválidos
    - o usuário precisa estar autenticado na aplicação



### Anotações das aulas
/**
* GET => Buscar uma informação
* POST => Inserir(Criar) uma informação
* PUT => Alterar uma informação
* DELETE => Remover um dado
* PATCH => Alterar uma informação específica
*/

/**
* Tipos de parâmetros
* Routes Params => http://localhost:3000/produtos/78347583458345
* Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom&
* Body Params => { "name": "teclado", "description": "teclado bom" }
*/

/**
 * Server -> Routes -> Controller -> Service (throw new Error)
 */

/**
* Verificar se email existe
*
* Verificar se senha está correta
*
* Gerar o Token
*/

/**await queryRunner.createForeignKey(
* "compliments",
* new TableForeignKey({
*     name: "FKUserSenderCompliments",
*             referencedTableName: "users",
*             referencedColumnNames: ["id"],
*             columnNames:["user-sender"],
*             onDelete: "SET NULL",
*             onUpdate: "SET NULL"*
*/

/**
     * Receber o nosso Token
     * 
     * Validar se token está preenchido
     * 
     * Validar se Token é válido
     * 
     * Recuperar Informações do Usuário
     */