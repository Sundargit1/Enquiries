//myapp/static/js/script.js
$(document).ready(function(){
    $('#create1').on('click', function(){
        
        $sno = $('#sno').val();
        $date = $('#date').val();
        $fname = $('#fname').val();
        $school = $('#school').val();
        $phonenumber = $('#phonenumber').val();
        $response = $('#response').val();
  
        if($sno == "" || $date == "" || $fname == "" || $school == ""  ||$phonenumber == "" ||$response == ""){
            alert("Please complete the required field");
        }else{
            alert("New Member Successfully Added");
            $.ajax({
                url: 'create1/',
                type: 'POST',
                data: {
                    sno: $sno,
                    date: $date,
                    fname: $fname,
                    school: $school,
                    phonenumber: $phonenumber,
                    response: $response,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    
                    window.location = '/student';
                    
                }
            });
        }
    });
  
});
$(document).on('click', '.edit', function(){
    
    $id = $(this).attr('name');
    window.location = "edit1/" + $id;
});

    $('#update').on('click', function(){
        $sno = $('#sno').val();
        $date = $('#date').val();
        $fname = $('#fname').val();
        $school = $('#school').val();
        $phonenumber = $('#phonenumber').val();
        $response = $('#response').val();
        

    if($sno == "" || $date == "" || $fname == "" || $school == ""  ||$phonenumber == "" ||$response == ""){
        alert("Please complete the required field");
    }else{
        $id = $('#member_id').val();
        $.ajax({
            url: 'update1/' + $id,
            type: 'POST',
            data: {
                sno: $sno,
                date: $date,
                fname: $fname,
                school: $school,
                phonenumber: $phonenumber,
                response: $response,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                window.location = '/student';
                alert('Updated!');
            }
        });
    }

});


$(document).on('click', '.delete', function(){
    $id = $(this).attr('name');
    $.ajax({
        url: 'delete1/' + $id,
        type: 'POST',
        data: {
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(){
            window.location = '/student';  
            alert("Deleted!");
        }
    });
});

$(document).ready(function(){

    // Search all columns
    $('#txt_searchall').keyup(function(){
        // Search Text
        var search = $(this).val();

        // Hide all table tbody rows
        $('table tbody tr').hide();

        // Count total search result
        var len = $('table tbody tr:not(.notfound) td:contains("'+search+'")').length;

        if(len > 0){
          // Searching text in columns and show match row
          $('table tbody tr:not(.notfound) td:contains("'+search+'")').each(function(){
              $(this).closest('tr').show();
          });
        }else{
          $('.notfound').show();
        }
        
    });
});

//Print
$(function () {
    $('button[type="button"]').click(function () {
        var pageTitle = 'User List',
            stylesheet = 'static/assets/css/soft-ui-dashboard.css',
            win = window.open('', 'Print', 'width=500,height=300');
        win.document.write('<html><head><title>' + pageTitle + '</title>' +
            '<link rel="stylesheet" href="' + stylesheet + '">' +
            '</head><body>' + $('.table')[0].outerHTML + '</body></html>');
        win.document.close();
        win.print();
        win.close();
        return false;
    });
});