<%@include file="imports.jsp" %>

<%
    try {
        String login = request.getParameter("login");
        String password = request.getParameter("password");

        boolean validou = false;
        if(login != null && senha != null) {
            HashMap<String, Client> users = (HashMap)session.getAttribute("usuarios");
            if(users.containsKey(login)) {
                Client u = users.get(login);
//                if(senha.equals(u.getSenha())) {
                    validou = true;
                }
        }
        if(validou) {
            out.print("<b>Bem vindo!</b>");
        } else {
            response.sendRedirect("index.jsp");
        }
    } catch(Exception e) {
        System.out.println(e.getMessage());
    }
%>