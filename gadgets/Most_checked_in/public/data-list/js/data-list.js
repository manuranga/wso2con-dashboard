setInterval(function(){
    var url = '/dash1/gadgets/Most_checked_in/data-api.jag';
    $.getJSON(url , function(data) {
        var tbl_body = "";
        $.each(data, function() {
            var tbl_row = "";
            $.each(this, function(k , v) {
                tbl_row += (v || '') + "  ";
            })
            tbl_body += "<li>"+tbl_row+"</li>";                 
        })
        $("#list").html(tbl_body);
    });
},1000);
