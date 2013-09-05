<%@include file="imports.jsp" %>
<!DOCTYPE html>
<html>
    <%@include file="head.jsp" %>
    <body>
        <div class="container">
            <%@include file="header.jsp" %>
            <div class="content">
                <div class="register">
                    <form id="form_register" class="form_register" action="validate.jsp" method="POST" onsubmit="return validateRegister(this.id)">
                        <fieldset>
                            <legend>Informações Pessoais</legend>
                            <table>
                                <tr>
                                    <td id="td_left">
                                        <input type="text" id="firstname" name="firstname" placeholder="Primeiro Nome" onblur="validateInputText(this.id)"/><br/>
                                    </td>
                                    <td id="td_right">
                                        <input type="text" id="lastname" name="lastname" placeholder="Último Nome" onblur="validateInputText(this.id)"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="td_left">
                                        <input type="text" id="city" name="city" placeholder="Cidade" onblur="validateInputText(this.id)"/><br/>
                                    </td>
                                    <td id="td_right">
                                        <input type="text" id="state" name="state" placeholder="Estado" onblur="validateInputText(this.id)"/><br/>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="td_left">
                                        <input type="tel" id="phone" name="phone" placeholder="Telefone" onblur="validateInputText(this.id)"/>
                                    </td>
                                    <td id="td_right">
                                        <input type="email" id="email" name="email" placeholder="E-mail" onblur="validateInputText(this.id)"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="td_left">
                                        <input type="password" id="password" name="password" placeholder="Senha" onblur="validateInputText(this.id)"/>
                                    </td>
                                    <td id="td_right">
                                        <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirmar Senha" onblur="validateInputText(this.id)"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td id="td_right">
                                        <span id="error_message"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td id="td_submit">
                                        <button id="register_submit" type="submit" form="form_register">Salvar</button>
                                        <input id="back" type="button" value="Voltar" onclick="window.history.back()"/>
                                    </td>
                                </tr>
                            </table>
                        </fieldset>
                    </form>
                </div>
            </div>
            <%--<%@include file="footer.jsp" %>--%>
        </div>
    </body>
</html>
