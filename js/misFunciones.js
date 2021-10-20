function cargarInfoBarcos(){
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            cargarRespuestaBarcos(respuesta.items);
        }
    });
}

function cargarRespuestaBarcos(items){
    $("tbody").children().remove()
    var tableBody = $('#tblBarcos tbody');
    var filaTabla = "";
    for (var i=0; i<items.length; i++) {
        filaTabla += "<tr>";
        filaTabla += "<td>"+items[i].id+"</td>";
        filaTabla += "<td>"+items[i].brand+"</td>";
        filaTabla += "<td>"+items[i].model+"</td>";
        filaTabla +="<td>"+items[i].category_id+"</td>";
        filaTabla +="<td>"+items[i].name+"</td>";
        filaTabla +="<td> <button class='btn btn-primary btn-sm btnSelect' onclick='passEditBarco()'>Editar</button><button style='margin-left: 10px' class='btn btn-danger btn-sm' onclick='deleteBarco("+items[i].id+")'>Eliminar</button> </td>";
        filaTabla +="</tr>";
    }
    tableBody.append(filaTabla);
}

function newBarco(){
    let data={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    };
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"POST",
        data:data,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            cargarInfoBarcos();
            alert("Se Guardo Barco Exitosamente")
        }
    });
}

function passEditBarco(){
    $("#tblBarcos").on('click','.btnSelect',function(){
        // get the current row
        var currentRow=$(this).closest("tr");
        var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
        var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
        var col4=currentRow.find("td:eq(3)").text(); // get current row 4rd TD
        var col5=currentRow.find("td:eq(4)").text(); // get current row 4rd TD
        // var data=col1+"\n"+col2+"\n"+col3+"\n"+col4+"\n"+col5;
        // alert(data);
        $('#id').val(col1);
        $('#brand').val(col2);
        $('#model').val(col3);
        $('#category_id').val(col4);
        $('#name').val(col5);
    });
}

function editBarco(){
    let data={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    };
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            cargarInfoBarcos();
            alert("Se Actualizo Barco Exitosamente")
        }
    });
}

function deleteBarco(idElemento){
    let data={
        id:idElemento
    };
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            cargarInfoBarcos();
            alert("Se Eliminado Barco Exitosamente")
        }
    });
}

/* ------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------- */

function cargarInfoClient(){
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            cargarRespuestaClient(respuesta.items);
        }

    });
}

function cargarRespuestaClient(items){
    $("tbody").children().remove()
    var tableBody = $('#tblClientes tbody');
    var filaTabla = "";
    for (var i=0; i<items.length; i++) {
        filaTabla += "<tr>";
        filaTabla += "<td>"+items[i].id+"</td>";
        filaTabla += "<td>"+items[i].name+"</td>";
        filaTabla += "<td>"+items[i].email+"</td>";
        filaTabla +="<td>"+items[i].age+"</td>";
        filaTabla +="<td> <button class='btn btn-primary btn-sm btnSelect' onclick='passEditCliente()'>Editar</button><button style='margin-left: 10px' class='btn btn-danger btn-sm' onclick='deleteClient("+items[i].id+")'>Eliminar</button> </td>";
        filaTabla +="</tr>";
    }
    tableBody.append(filaTabla);
}

function newClient(){
    let data={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:data,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            cargarInfoClient();
            alert("Se Agrego Nuevo Cliente Exitosamente")
        }
    });
}

function passEditCliente(){
    $("#tblClientes").on('click','.btnSelect',function(){
        // get the current row
        var currentRow=$(this).closest("tr");
        var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
        var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
        var col4=currentRow.find("td:eq(3)").text(); // get current row 4rd TD
        $('#id').val(col1);
        $('#name').val(col2);
        $('#email').val(col3);
        $('#age').val(col4);
    });
}

function editClient(){
    let data={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            cargarInfoClient();
            alert("Se Actualizo Cliente Exitosamente")
        }
    });
}

function deleteClient(idElemento){
    let data={
        id:idElemento
    };
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            cargarInfoClient();
            alert("Se Elimino Cliente EXitosamente")
        }
    });
}

/* ------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------- */

function cargarInfoMessage(){
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            cargarRespuestaMessage(respuesta.items);
        }

    });
}

function cargarRespuestaMessage(items){
    $("tbody").children().remove()
    var tableBody = $('#tblMensajes tbody');
    var filaTabla = "";
    for (var i=0; i<items.length; i++) {
        filaTabla += "<tr>";
        filaTabla += "<td>"+items[i].id+"</td>";
        filaTabla += "<td>"+items[i].messagetext+"</td>";
        filaTabla +="<td> <button class='btn btn-primary btn-sm btnSelect' onclick='passEditMensaje()'>Editar</button><button style='margin-left: 10px' class='btn btn-danger btn-sm' onclick='deleteMessage("+items[i].id+")'>Eliminar</button> </td>";
        filaTabla +="</tr>";
    }
    tableBody.append(filaTabla);
}

function newMessage(){
    let data={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()
    };
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:data,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            cargarInfoMessage();
            alert("Se Agrego Nuevo Mensaje Exitosamente")
        }
    });
}

function passEditMensaje(){
    $("#tblMensajes").on('click','.btnSelect',function(){
        // get the current row
        var currentRow=$(this).closest("tr");
        var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
        $('#id').val(col1);
        $('#messagetext').val(col2);
    });
}

function editMessage(){
    let data={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()
    };
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            cargarInfoMessage();
            alert("Se Actualizo Mensaje con Exito")
        }
    });
}

function deleteMessage(idElemento){
    let data={
        id:idElemento
    };
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url:"https://gb6afec73d437f3-dbreto1alejod.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            cargarInfoMessage();
            alert("Se Elimino Mensaje Exitosamente")
        }
    });
}