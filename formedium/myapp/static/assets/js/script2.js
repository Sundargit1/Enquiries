//myapp/static/js/script.js
$(document).ready(function(){
    $('#create2').on('click', function(){
        
        $courseid = $('#courseid').val();
        $coursename = $('#coursename').val();
        $duration = $('#duration').val();
        $startdate = $('#startdate').val();
        $enddate = $('#enddate').val();
        $courseamount = $('#courseamount').val();
        $discount = $('#discount').val();
        if($courseid == "" || $coursename == "" || $duration == "" || $startdate == ""  ||$enddate == "" ||$courseamount == ""||$discount == ""){
            alert("Please complete the required field");
        }else{
            alert("New Member Successfully Added");
            $.ajax({
                url: 'create2/',
                type: 'POST',
                data: {
                    courseid: $courseid,
                    coursename: $coursename,
                    duration: $duration,
                    startdate: $startdate,
                    enddate: $enddate,
                    courseamount: $courseamount,
                    discount: $discount,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    
                    window.location = '/course';
                    
                }
            });
        }
    });
  
});
$(document).on('click', '.edit', function(){
    
    $id = $(this).attr('name');
    window.location = "edit2/" + $id;
});

    $('#update').on('click', function(){
        $courseid = $('#courseid').val();
        $coursename = $('#coursename').val();
        $duration = $('#duration').val();
        $startdate = $('#startdate').val();
        $enddate = $('#enddate').val();
        $courseamount = $('#courseamount').val();
        $discount = $('#discount').val();

if($courseid == "" || $coursename == "" || $duration == "" || $startdate == ""  ||$enddate == "" ||$courseamount == ""||$discount == ""){
            alert("Please complete the required field");
    }else{
        $id = $('#member_id').val();
        $.ajax({
            url: 'update2/' + $id,
            type: 'POST',
            data: {
                courseid: $courseid,
                coursename: $coursename,
                duration: $duration,
                startdate: $startdate,
                enddate: $enddate,
                courseamount: $courseamount,
                discount: $discount,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                window.location = '/course';
                alert('Updated!');
            }
        });
    }

});


$(document).on('click', '.delete', function(){
    $id = $(this).attr('name');
    $.ajax({
        url: 'delete2/' + $id,
        type: 'POST',
        data: {
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(){
            window.location = '/course';
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