//myapp/static/js/script.js
$(document).ready(function(){
    $('#create4').on('click', function(){
        
        $sno = $('#sno').val();
        $name = $('#name').val();
        $course = $('#course').val();
        $feesamount = $('#feesamount').val();
        $feespaid = $('#feespaid').val();
        $feesdue = $('#feesdue').val();
        $paymentdate = $('#paymentdate').val();
  
        if($sno == "" || $name == "" || $course == "" || $feesamount == ""  ||$feespaid == "" ||$feesdue == ""||$paymentdate == ""){
            alert("Please complete the required field");
        }else{
            alert("New Member Successfully Added");
            $.ajax({
                url: 'create4/',
                type: 'POST',
                data: {
                    sno: $sno,
                    name: $name,
                    course: $course,
                    feesamount: $feesamount,
                    feespaid: $feespaid,
                    feesdue: $feesdue,
                    paymentdate: $paymentdate,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    
                    window.location = '/cash';
                    
                }
            });
        }
    });
  
});

$(document).on('click', '.pay', function(){
    $id = $(this).attr('name');
    window.location = "pay/" + $id;
});

    $('#payment').on('click', function(){
       
        $feesamount = $('#feesamount').val();
        $feespaid = $('#feespaid').val();
        $feesdue = $('#feesdue').val();

        if($feesamount == ""  ||$feespaid == "" ||$feesdue == ""){
            alert("Please complete the required field");
    }else{
        $id = $('#member_id').val();
        $.ajax({
            url: 'payment/' + $id,
            type: 'POST',
            data: {
                
                feesamount: $feesamount,
                feespaid: $feespaid,
                feesdue: $feesdue,
               
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                window.location = '/cash';
                alert('Payment Added Successfully');
            }
        });
    }
       
    });

$(document).on('click', '.edit', function(){
    
    $id = $(this).attr('name');
    window.location = "edit4/" + $id;
});

    $('#update').on('click', function(){
        $sno = $('#sno').val();
        $name = $('#name').val();
        $course = $('#course').val();
        $feesamount = $('#feesamount').val();
        $feespaid = $('#feespaid').val();
        $feesdue = $('#feesdue').val();
        $paymentdate = $('#paymentdate').val();
        

if($sno == "" || $name == "" || $course == "" || $feesamount == ""  ||$feespaid == "" ||$feesdue == ""||$paymentdate == ""){
            alert("Please complete the required field");
    }else{
        $id = $('#member_id').val();
        $.ajax({
            url: 'update4/' + $id,
            type: 'POST',
            data: {
                sno: $sno,
                name: $name,
                course: $course,
                feesamount: $feesamount,
                feespaid: $feespaid,
                feesdue: $feesdue,
                paymentdate: $paymentdate,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                window.location = '/cash';
                alert('Updated!');
            }
        });
    }

});

$(document).on('click', '.delete', function(){
    $id = $(this).attr('name');
    $.ajax({
        url: 'delete4/' + $id,
        type: 'POST',
        data: {
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(){
            window.location = '/cash';
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
    function updateDue() {

        var total = parseInt(document.getElementById("feesamount").value);
        var val2 = parseInt(document.getElementById("feespaid").value);
        
        // to make sure that they are numbers
        if (!total) { total = 0; }
        if (!val2) { val2 = 0; }
        
        var ansD = document.getElementById("feesdue");
        ansD.value = total - val2;
        }

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

