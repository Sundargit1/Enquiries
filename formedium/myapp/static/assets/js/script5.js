//myapp/static/js/script.js
$(document).ready(function(){
    $('#create5').on('click', function(){
        
        $name = $('#name').val();
        $course = $('#course').val();
        $gender = $('#gender').val();
        $phonenumber = $('#phonenumber').val();
        $joindate = $('#joindate').val();
        $response = $('#response').val();
        $confirmation = $('#confirmation').val();
  
        if($name == "" || $course == "" || $gender == "" ||$phonenumber == "" ||$joindate == ""||$response == ""||$confirmation == ""){
            alert("Please complete the required field");
        }else{
            alert("New Member Successfully Added");
            $.ajax({
                url: 'create5/',
                type: 'POST',
                data: {
                    name: $name,
                    course: $course,
                    gender: $gender,
                    phonenumber: $phonenumber,
                    joindate: $joindate,
                    response: $response,
                    confirmation: $confirmation,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    
                    window.location = '/form';
                    
                }
            });
        }
    });
  
});
$(document).on('click', '.edit', function(){
    
    $id = $(this).attr('name');
    window.location = "edit5/" + $id;
});

    $('#update').on('click', function(){
        $name = $('#name').val();
        $course = $('#course').val();
        $gender = $('#gender').val();
        $phonenumber = $('#phonenumber').val();
        $joindate = $('#joindate').val();
        $response = $('#response').val();
        $confirmation = $('#confirmation').val();
        

if($name == "" || $course == "" || $gender == "" ||$phonenumber == "" ||$joindate == ""||$response == ""||$confirmation == ""){
        alert("Please complete the required field");
    }else{
        $id = $('#member_id').val();
        $.ajax({
            url: 'update5/' + $id,
            type: 'POST',
            data: {
                    name: $name,
                    course: $course,
                    gender: $gender,
                    phonenumber: $phonenumber,
                    joindate: $joindate,
                    response: $response,
                    confirmation: $confirmation,
        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                window.location = '/form';
                alert('Updated!');
            }
        });
    }

});

$(document).on('click', '.delete', function(){
    $id = $(this).attr('name');
    $.ajax({
        url: 'delete5/' + $id,
        type: 'POST',
        data: {
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(){
            window.location = '/form';
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